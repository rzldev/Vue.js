<template>
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2">
      <hr>
      <input type="text" v-model="inputFruits">
      <button type="button" @click="fruits.push('Grape')">Add Fruit</button>
      <ul>
        <li v-for="(fruit, index) in filteredFruit" :key="index">{{ fruit }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { fruitMixin } from './fruitMixin'

  export default {
    mixins: [fruitMixin]
  }
</script>

<style>

</style>
