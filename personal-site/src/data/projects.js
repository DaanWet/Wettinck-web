// One place for all project info, used by both Home and Projects.
// `featured` projects also show up on the home page.

export const projects = [
  {
    slug: 'sumarville',
    name: 'Sumarville',
    years: '2019 – now',
    stack: ['Java', 'JDA'],
    featured: true,
    image: require('../assets/Sumarville.png'),
    summary: 'A Discord bot for D&D groups.',
    story: 'Sumarville keeps a campaign calendar with reminders, runs the "what are we eating" poll before a session, rolls dice and helps with character creation. It is listed on top.gg, and it is the project I keep coming back to.',
    links: [
      { label: 'source', href: 'https://github.com/DaanWet/Sumarville' },
      { label: 'top.gg', href: 'https://top.gg/bot/577940186755891211' }
    ]
  },
  {
    slug: 'pingo',
    name: 'Pingo',
    years: '2020 – 2024',
    stack: ['Java', 'JDA'],
    featured: true,
    summary: 'A Discord bot for games and a bit of moderation.',
    story: 'Blackjack with hit, stand, double and split, Uno, a role picker, and a credit system with daily and weekly rewards, a server leaderboard and records for the biggest wins and losses. Also on top.gg.',
    links: [
      { label: 'source', href: 'https://github.com/DaanWet/Pingo_Discord_Bot' },
      { label: 'top.gg', href: 'https://top.gg/bot/589027434611867668' }
    ]
  },
  {
    slug: 'gamesense-client',
    name: 'gamesense-client',
    years: '2020',
    stack: ['JavaScript', 'npm'],
    featured: true,
    summary: 'A Node.js library for SteelSeries GameSense.',
    story: 'GameSense lets a program control the lights on SteelSeries keyboards and mice. cschuller started this client; I picked it up and kept it going. It has 31 stars on GitHub and still gets a few hundred downloads a year.',
    links: [
      { label: 'source', href: 'https://github.com/DaanWet/gamesense-client' },
      { label: 'npm', href: 'https://www.npmjs.com/package/gamesense-client' }
    ]
  },
  {
    slug: 'ets2-steelseries',
    name: 'ETS2 × SteelSeries',
    years: '2020',
    stack: ['Node.js'],
    summary: 'My keyboard as a truck dashboard in Euro Truck Simulator 2.',
    story: 'Reads the game\'s telemetry and lights up the matching keys: the brackets blink with the indicators, the spacebar turns red when the parking brake is on, and L fades up with the headlights. Built on top of gamesense-client.',
    links: [
      { label: 'source', href: 'https://github.com/DaanWet/Ets2-Steelseries-Engine' }
    ]
  },
  {
    slug: 'trade-app',
    name: 'Trade App',
    years: '2026',
    stack: ['TypeScript', 'Angular', 'Express', 'SQLite'],
    summary: 'A tracker for my own stock trades.',
    story: 'Matches sells against buys with FIFO, shows realized and unrealized profit, converts currencies and calculates the new Belgian capital gains tax per year.',
    links: [
      { label: 'source', href: 'https://github.com/DaanWet/trade-app' }
    ]
  },
  {
    slug: 'finance-app',
    name: 'Finance App',
    years: '2026',
    stack: ['TypeScript', 'Angular'],
    summary: 'Where my money goes, without the manual sorting.',
    story: 'Imports ING bank exports, classifies transactions with my own rules and syncs with Splitwise. It keeps expenses I pay for a club or organisation, and get back later, apart from my own spending.',
    links: [
      { label: 'source', href: 'https://github.com/DaanWet/Finance-app' }
    ]
  }
]

export const earlier = [
  {
    name: 'Curtis',
    years: '2019',
    what: 'Discord bot for the Cortex Development server',
    href: 'https://github.com/DaanWet/Curtis'
  },
  {
    name: 'Teams Plus',
    years: '2019',
    what: 'Spigot plugin: teams, warps and AFK handling',
    href: 'https://github.com/DaanWet/MinecraftTeamsPlugin'
  },
  {
    name: 'LumberAxe',
    years: '2020',
    what: 'Spigot plugin: an axe that fells a whole tree at once',
    href: 'https://github.com/DaanWet/LumberAxe'
  }
]
