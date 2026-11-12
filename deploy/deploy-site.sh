#!/usr/bin/env bash
# Build personal-site and upload it to daan.wettinck.be.
#
# Usage, from anywhere in the repo:
#   DEPLOY_TARGET=daan@<server> deploy/deploy-site.sh
#
# Needs: node_modules in personal-site (npm ci), rsync, and SSH access to the
# server with write rights on /var/www/daan.wettinck.be.
set -euo pipefail

target="${DEPLOY_TARGET:?Set DEPLOY_TARGET, for example daan@my-server}"

cd "$(dirname "$0")/../personal-site"
npm run build

# --delay-updates puts all new files in place at the end, and --delete-after
# removes old ones only then: a visitor never gets a new index.html that
# points to assets which are not there yet.
rsync -rlptvz --delete-after --delay-updates dist/ "$target:/var/www/daan.wettinck.be/"

echo "Done: https://daan.wettinck.be"
