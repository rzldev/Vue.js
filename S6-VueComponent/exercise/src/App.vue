<template>
  <div class="container">
    <my-header></my-header>

    <div class="row">
      <server-detail></server-detail>
      <server></server>
    </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import ServerDetail from './components/server/ServerDetail.vue'
import Server from './components/server/Server.vue'

  export default {
    components: {
      'my-header': Header,
      'my-footer': Footer,
      serverDetail: ServerDetail,
      Server
    }
  }
</script>

<style>

</style>
