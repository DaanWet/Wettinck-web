<template>
  <header class="page-header">
    <router-link to="/" class="name">Daan Wettinck</router-link>
    <nav>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/social">Social</router-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style>
.page-header {
  max-width: 760px;
  margin: 0 auto;
  padding: 28px 20px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.page-header .name {
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  border-bottom: 3px solid var(--gold);
}

.page-header nav {
  display: flex;
  gap: 24px;
  font-family: var(--mono);
  font-size: 15px;
}

.page-header nav a {
  text-decoration: none;
  color: var(--muted);
}

.page-header nav a:hover,
.page-header nav a.router-link-active {
  color: var(--ink);
  text-decoration: underline;
  text-decoration-color: var(--gold);
}
</style>
