# Moving the web sites to the new server

One Caddy server for every site that ran behind nginx on the old server. Caddy
gets and renews the HTTPS certificates itself, so there is no certbot.

| Site | Old server | New server |
| --- | --- | --- |
| `daan.wettinck.be` (+ `www`) | static, `/var/www/daan.wettinck.be/html` | static, `/var/www/daan.wettinck.be`, uploaded by `deploy-site.sh` |
| `wettinck.be` (+ `www`) | proxy to port 8080 (that was SockBot) | `/kotk` and `/pingo` short links, the rest to `daan.wettinck.be` |
| `kotk.wettinck.be` | redirect | redirect |
| `pingo.wettinck.be` | Pingo's HTML logs, `/uno` via `images.js` | `/uno/` from `/opt/pingo/Uno`, the rest to the projects page |
| `zwervers.wettinck.be` | `images.js` on port 4000 | files from `/opt/pingo/Pictures` |
| `blok.jhsock.be` (+ `www`) | static + `/api/` to SockBot on 8080 | the same, SockBot only on `127.0.0.1` |
| `telraam.wettinck.be` | nothing behind it | gone |

`images.js` (Node, started by hand in 2021) is not needed anymore: Caddy serves
the same files. Pingo itself moves with its own guide, `deploy/README.md` in
the Pingo repo; do that first or at the same time, since Caddy reads its
`/opt/pingo/Uno` and `/opt/pingo/Pictures`.

Files in this folder:

- `Caddyfile`: all sites, for `/etc/caddy/Caddyfile`
- `sockbot.service`: systemd unit for SockBot
- `deploy-site.sh`: builds `personal-site` and uploads it

## 1. Prepare the new server (once)

Install Caddy from its own apt repository (instructions:
https://caddyserver.com/docs/install#debian-ubuntu-raspbian). It starts as the
`caddy` service right away.

Java 21 is the same one Pingo uses (`openjdk-21-jre-headless`).

Open the firewall for the web, if `ufw` is on:

```
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 443/udp   # HTTP/3
```

Ports 8080 and 4000 stay closed: SockBot only listens on `127.0.0.1`.

Folders. The personal site belongs to you, so `deploy-site.sh` can write it
without sudo:

```
sudo mkdir -p /var/www/daan.wettinck.be /var/www/blok.jhsock.be
sudo chown daan:daan /var/www/daan.wettinck.be

sudo useradd --system --no-create-home --shell /usr/sbin/nologin sockbot
sudo mkdir -p /opt/sockbot
```

## 2. Lower the DNS TTL (a day before)

Set the TTL of every record in the table above to 300 seconds, at the
registrar of `wettinck.be` and of `jhsock.be`. The switch in step 6 then
takes minutes instead of hours. Find out now who manages the DNS of
`jhsock.be`, if that is not you.

## 3. Personal site

From WSL, once Caddy runs:

```
cd ~/Wettinck-web/personal-site && npm ci
DEPLOY_TARGET=daan@<new server> ~/Wettinck-web/deploy/deploy-site.sh
```

Later updates: only the second line.

## 4. Blok-spot

Copy the static front end from the old server (it was served from
`/home/daan/Web/sock/blok-spot`) to `/var/www/blok.jhsock.be`.

## 5. SockBot

On the **old** server, stop it first, so no reservation lands in the old
`reservations.json` after you copy it:

```
sudo systemctl stop sockbot
cd /home/daan/DiscordBots/SockBot
tar -czf ~/sockbot.tar.gz SockApplication.jar application.properties users.json reservations.json
```

Copy `sockbot.tar.gz` to the new server, then:

```
sudo tar -xzf sockbot.tar.gz -C /opt/sockbot
echo 'server.address=127.0.0.1' | sudo tee -a /opt/sockbot/application.properties
sudo chown -R sockbot:sockbot /opt/sockbot
sudo chmod 600 /opt/sockbot/application.properties
sudo cp sockbot.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now sockbot
journalctl -u sockbot -f
```

`application.properties` holds the Discord token and the Assist login: it is
readable by `sockbot` only.

## 6. Caddy and the DNS switch

```
sudo cp Caddyfile /etc/caddy/Caddyfile
caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

Now point the A record (and AAAA if the server has IPv6) of every site at the
new server. Caddy asks for each certificate as soon as the name points to it
and retries by itself until then: follow it with `journalctl -u caddy -f`.

Remove the record of `telraam.wettinck.be`.

## 7. Check

- `https://daan.wettinck.be/projects`: reload the page, it must not give a 404.
- `https://www.daan.wettinck.be` and `https://wettinck.be` end up on `https://daan.wettinck.be`.
- `https://wettinck.be/pingo` opens the Discord invite, `https://wettinck.be/kotk` and `https://kotk.wettinck.be` the Assist activity.
- Pingo: start an `!uno` game, the card thumbnail loads; open a picture command, the picture loads.
- `https://blok.jhsock.be`: log in and make (and remove) a reservation.
- From your own PC, `curl -m 5 http://<new server>:8080` must fail: SockBot is not reachable from outside.

## 8. Backups

SockBot keeps its data in `users.json` and `reservations.json`. Next to Pingo's
backup, a nightly copy is enough:

```
echo '45 4 * * * root tar -czf /var/backups/sockbot-$(date +\%F).tar.gz -C /opt/sockbot users.json reservations.json && find /var/backups -name "sockbot-*.tar.gz" -mtime +30 -delete' | sudo tee /etc/cron.d/sockbot-backup
```

## 9. The old server

Leave it running for a week, with SockBot stopped, as the way back: if
something fails, point the DNS back and start SockBot there again (any
reservations made on the new server are then not in the old file).

After that: stop nginx, `images.js` and the bots, and cancel the server.

Before you cancel it: on the old server `pingo.wettinck.be` served every file
in `/home/daan/DiscordBots/Pingo`, including the jar with Pingo's tokens in
`config.properties`. Make new tokens when you move Pingo (its guide already
asks for them in `pingo.env`).
