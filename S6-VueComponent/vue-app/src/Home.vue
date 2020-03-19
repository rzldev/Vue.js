<template>
  <div>
    <server-status v-for="x in 5" :key="x"></server-status>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue'

  export default {
    components : {
      'server-status': ServerStatus
    }
  }
</script>
