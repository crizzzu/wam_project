<template>
  <div id="app">
    <router-link to="/login">Login</router-link>
    <router-link to="/index">Index</router-link>
    <router-link to="/browse">Browse</router-link>
    <router-link to="/register">Register</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {}
  }
</script>

<style>
  * {
    font-family: 'Open Sans', sans-serif;

  }

</style>
