<template>
  <div class="home">
    <!-- Own photo later? Set --banner-image in the style below, e.g. url('../assets/me.jpg') -->
    <div class="banner">
      <div class="banner-inner">
        <h1>Hi, I'm Daan.</h1>
      </div>
    </div>

    <section class="intro">
      <p>
        I'm a developer at <a href="https://assistonline.eu/">Assist</a>. Outside of work
        I build Discord bots, a SteelSeries library and small tools that solve my own
        problems, mostly in Java and TypeScript.
      </p>
      <p class="aside">
        Online I usually go by <span class="handle">Damascus</span> or
        <span class="handle">dazed00</span>.
      </p>
    </section>

    <section class="now">
      <h2 class="label">now</h2>
      <ul>
        <li>Working at Assist</li>
        <li>Still adding things to Sumarville, my D&amp;D bot</li>
        <li>Building a tracker for my own stock trades</li>
      </ul>
    </section>

    <section class="picks">
      <h2 class="label">a few things I made</h2>
      <ol>
        <li v-for="project in featured" :key="project.slug">
          <router-link :to="{ path: '/projects', hash: '#' + project.slug }" class="pick-name">
            {{ project.name }}
          </router-link>
          <span class="pick-summary">{{ project.summary }}</span>
        </li>
      </ol>
      <router-link to="/projects" class="all">All projects →</router-link>
    </section>
  </div>
</template>

<script>
import { projects } from '../data/projects'

export default {
  name: 'Home',
  computed: {
    featured() {
      return projects.filter(p => p.featured)
    }
  }
}
</script>

<style>
.home .banner {
  --banner-image: none;
  /* full width, even though it sits inside the narrow main column */
  margin: 0 calc(50% - 50vw) 40px;
  min-height: clamp(200px, 30vw, 300px);
  display: flex;
  align-items: flex-end;
  background: var(--gold) var(--banner-image) center / cover no-repeat;
}

.home .banner-inner {
  width: calc(100% - 40px);
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 28px;
}

.home h1 {
  font-size: clamp(44px, 9vw, 72px);
  margin: 0;
  letter-spacing: -0.02em;
}

.home .intro {
  padding: 0 0 32px;
}

.home .intro p {
  font-size: 20px;
  max-width: 600px;
  margin: 0 0 12px;
}

.home .intro .aside {
  font-size: 16px;
  color: var(--muted);
}

.home .handle {
  font-family: var(--mono);
  font-size: 15px;
  background: #f1e6c4;
  padding: 1px 6px;
  border-radius: 3px;
  color: var(--ink);
}

.home section + section {
  border-top: 1px solid var(--line);
  padding-top: 24px;
  margin-top: 8px;
}

.home h2.label {
  margin: 0 0 12px;
  font-weight: 500;
}

.home .now ul {
  margin: 0 0 24px;
  padding-left: 20px;
}

.home .now li::marker {
  color: var(--gold);
}

.home .picks ol {
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
}

.home .picks li {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  align-items: baseline;
  padding: 10px 0;
}

.home .pick-name {
  font-weight: 600;
  min-width: 170px;
}

.home .pick-summary {
  color: var(--muted);
}

.home .all {
  font-family: var(--mono);
  font-size: 15px;
}
</style>
