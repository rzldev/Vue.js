<template>
    <div class="col-xs-12 col-sm-6">
      <p v-if="!server">Please select a Server</p>
      <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
      <hr>
      <button type="button" @click="resetServer">Reset Server</button>
    </div>

</template>

<script>
  import { serverBus } from '../../main';

  export default {
    data: function() {
      return{
        server: null
      }
    },
    created() {
      serverBus.$on('serverSelected', (server) => {
        this.server = server
      });
    },
    methods: {
      resetServer() {
        this.server.id = 1;
        this.server.status = 'Normal';
      }
    }
  }
</script>

<style>

</style>
