<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ age }}</p>
        <button type="button" @click="changeAge">Change Age</button>
    </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    props: {
      age: Number
    },
    methods: {
      changeAge() {
        this.age = 30;
        // this.$emit('ageWasChanged', this.age);
        // eventBus.$emit('ageWasChanged', this.age);
        eventBus.changeAge(this.age)
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
