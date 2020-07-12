<template>
  <div id="app" class="container">
    <main-app></main-app>
  </div>
</template>

<script>
import MainApp from './components/Main.vue'

export default {
  name: 'App',
  components: {
    MainApp
  }
}
</script>

<style>
  #app {
    padding: 20px;
  }
</style>
