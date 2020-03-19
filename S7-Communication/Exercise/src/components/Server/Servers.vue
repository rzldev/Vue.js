<template>
<div class="col-xs-12 col-sm-6">
  <ul class="list-group">
    <app-server v-for="server in servers" :server="server"></app-server>
  </ul>
</div>
</template>

<script>
  import Server from './Server.vue'

  export default {
    data: function() {
      return {
        servers: [{
            id: 1,
            status: 'Working'
          },
          {
            id: 2,
            status: 'Warning'
          },
          {
            id: 3,
            status: 'Critical'
          },
          {
            id: 4,
            status: 'Dead'
          },
          {
            id: 5,
            status: 'Unknown'
          }
        ]
      }
    },
    components: {
      'app-server': Server
    }
  }
</script>

<style>

</style>
