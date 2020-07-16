<template>
  <div id="app">
    <app-main></app-main>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    AppMain: Main
  }
}
</script>

<style>
  html, .primary-color {
    background-color: #eeeeee;
  }

  .secondary-color {
    background-color: #00adb5;
  }

  .grey-border {
    border: solid 1px;
    border-radius: 4px;
    border-color: #a3a9b4;
    box-shadow: 0px 0px 4px grey;
    background-color: white;
  }


</style>
