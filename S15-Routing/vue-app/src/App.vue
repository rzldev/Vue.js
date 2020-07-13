<template>
  <div id="app">
    <header-app></header-app>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderApp from './components/layouts/Header.vue'

  export default {
    name: 'App',
    components: {
      HeaderApp
    }
  }
</script>

<style>

</style>
