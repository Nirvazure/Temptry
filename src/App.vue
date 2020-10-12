<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ceremony">Ceremony</router-link> |
      <router-link to="/place">Place</router-link> |
      <router-link to="/place2">Place</router-link> |
      <router-link to="/bank">Bank</router-link> |
      <router-link to="/train">Train</router-link> |
      <router-link to="/schedule">Schedule</router-link> |
      <router-link to="/plan">Plan</router-link> |
    </div>
    <router-view />
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>