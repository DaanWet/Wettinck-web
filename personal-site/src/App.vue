<template>
  <!-- Mounted inside <div id="app"> from index.html, which the #app styles below target. -->
  <page-header/>
  <main>
    <router-view/>
  </main>
  <footer class="site-footer">
    <span>Daan Wettinck</span>
    <a href="https://github.com/DaanWet">GitHub</a>
    <a href="https://discord.gg/4Atn8t2">Discord</a>
  </footer>
</template>

<script>

import PageHeader from './components/PageHeader.vue'

export default {
  components: {
    PageHeader
  }
}
</script>

<style>
:root {
  --paper: #faf7f0;
  --ink: #1d1f22;
  --muted: #5f6368;
  --line: #e4ddcc;
  --gold: #dab551;
  --gold-dark: #8a6a14;
  --mono: 'IBM Plex Mono', ui-monospace, monospace;
  --sans: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
}

#app {
  font-family: var(--sans);
  font-size: 17px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: clip;
}

main {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px 64px;
}

a {
  color: inherit;
  text-decoration-color: var(--gold);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}

a:hover {
  color: var(--gold-dark);
}

h1, h2, h3 {
  line-height: 1.2;
}

.label {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
  text-transform: lowercase;
  letter-spacing: 0.02em;
}

.site-footer {
  width: calc(100% - 40px);
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 0 40px;
  border-top: 1px solid var(--line);
  display: flex;
  gap: 20px;
  font-family: var(--mono);
  font-size: 14px;
  color: var(--muted);
}

.site-footer span {
  margin-right: auto;
}
</style>
