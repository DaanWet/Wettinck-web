<template>
  <header>
      <div :class="['navigator', currentRouteName]">
      <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/social">Social</router-link>
      </nav>
      <h1>{{ currentRouteName }}</h1>
      </div>
      
  </header>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>

<style>

header .navigator{
        background-color: #dab551;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        height: 450px;
        width: 100%;
        
}

.Home {
  background-image: url('../assets/northern-lights.jpg');
}

.Projects {
  background-image: url('../assets/code.jpg');
}

.Social {
  background-image: url('../assets/smartphone2.jpg');
  background-position-y: 50px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

header nav {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content:space-evenly;
    align-items: flex-start;
}

header nav a {
    margin-top: 30px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    
}

header nav a.router-link-exact-active {
  
}

header {
  position: relative;
  width: 100%;
  height: 100%
}

header h1 {
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 50px;
  font-size: 100px;
  color: whitesmoke
}


</style>