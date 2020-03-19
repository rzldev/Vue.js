<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ reverseName() }}</p>
        <p>User Age: {{ age }}</p>
        <button type="button" @click="resetName">Reset Name</button>
        <button type="button" @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    props: {
      name: {
        type: String,
        // required: true
        default: 'Barry Alen'
      },
      resetFn: Function,
      age: Number
    },
    methods: {
      reverseName() {
        return this.name.split('').reverse().join('');
      },
      resetName() {
        this.name = 'Hal Jordan';
        this.$emit('nameWasReset', this.name);
      }
    },
    created() {
      eventBus.$on('ageWasChanged', (data) => {
        this.age = data;
      });
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
