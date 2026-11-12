<template>
  <div class="projects">
    <h1>Projects</h1>
    <p class="lede">
      Mostly things I built for myself or for friends. The rest lives on
      <a href="https://github.com/DaanWet">GitHub</a>.
    </p>

    <article
      v-for="project in projects"
      :key="project.slug"
      :id="project.slug"
      class="project"
    >
      <div class="meta">
        <span class="years">{{ project.years }}</span>
        <span class="stack">{{ project.stack.join(' · ') }}</span>
      </div>
      <div class="body">
        <h2>
          <img v-if="project.image" :src="project.image" alt="" class="icon">
          {{ project.name }}
        </h2>
        <p class="summary">{{ project.summary }}</p>
        <p>{{ project.story }}</p>
        <p class="links">
          <a v-for="link in project.links" :key="link.href" :href="link.href">{{ link.label }}</a>
        </p>
      </div>
    </article>

    <section class="earlier">
      <h2 class="label">earlier</h2>
      <ul>
        <li v-for="item in earlier" :key="item.name">
          <span class="years">{{ item.years }}</span>
          <a :href="item.href">{{ item.name }}</a>
          <span class="what">{{ item.what }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { projects, earlier } from '../data/projects'

export default {
  name: 'Projects',
  data() {
    return { projects, earlier }
  }
}
</script>

<style>
.projects h1 {
  font-size: clamp(36px, 7vw, 52px);
  margin: 40px 0 12px;
  letter-spacing: -0.02em;
}

.projects .lede {
  color: var(--muted);
  margin: 0 0 32px;
}

.project {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 8px 24px;
  padding: 28px 0;
  border-top: 1px solid var(--line);
}

.project .meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
  padding-top: 6px;
}

.project .years {
  color: var(--ink);
}

.project h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 4px;
  font-size: 24px;
}

.project .icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.project p {
  margin: 0 0 10px;
}

.project .summary {
  font-weight: 500;
}

.project .links {
  display: flex;
  gap: 18px;
  font-family: var(--mono);
  font-size: 14px;
  margin-top: 4px;
}

.project:target h2 {
  text-decoration: underline;
  text-decoration-color: var(--gold);
  text-decoration-thickness: 3px;
}

.earlier {
  border-top: 1px solid var(--line);
  padding-top: 28px;
}

.earlier h2.label {
  margin: 0 0 12px;
  font-weight: 500;
}

.earlier ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.earlier li {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  align-items: baseline;
  padding: 6px 0;
}

.earlier .years {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
  width: 40px;
}

.earlier a {
  font-weight: 600;
  min-width: 110px;
}

.earlier .what {
  color: var(--muted);
}

@media (max-width: 600px) {
  .project {
    grid-template-columns: 1fr;
  }

  .project .meta {
    flex-direction: row;
    gap: 12px;
  }
}
</style>
