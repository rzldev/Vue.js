<template>
  <div>
    <h3>New Quote</h3>
    <button type="button" @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        counter: 0
      }
    },
    destroyed() {
      console.log('destroyed');
    },
    activated() {
      console.log('activated');
    },
    deactivated() {
      console.log('dectivated');
    }
  }
</script>

<style lang="scss" scoped>

</style>
