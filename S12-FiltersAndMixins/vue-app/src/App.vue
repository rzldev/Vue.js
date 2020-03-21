<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2">
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <hr>
        <input type="text" v-model="inputFruits">
        <button type="button" @click="fruits.push('Watermelon')">Add Fruit</button>
        <ul>
          <li v-for="(fruit, index) in filteredFruit" :key="index">{{ fruit }}</li>
        </ul>
      </div>
    </div>
    <list-app></list-app>
  </div>
</template>

<script>
  import List from './components/List.vue'
  import { fruitMixin } from './components/fruitMixin'

  export default {
    mixins: [fruitMixin],
    data() {
      return {
        text: 'Hello World!'
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    components: {
      listApp: List
    }
  }
</script>

<style>

</style>
