<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ text | reverse }}</p>

        <hr>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ text | countCharacter }}</p>

        <hr>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>{{ reverseComputed }}</p>
        <p>{{ countComputed }}</p>

        <hr>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p>{{ countComputedMixin }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { countMixin } from './countMixin'

  export default {
    mixins: [countMixin],
    data() {
      return {
        text: 'Hello World!'
      }
    },
    filters: {
      reverse(value) {
        return value.split('').reverse().join('');
      }
    },
    computed: {
      reverseComputed() {
        return this.text.split('').reverse().join('');
      },
      countComputed() {
        return this.text + '( ' + this.text.length + ' )';
      }
    }
  }
</script>

<style>

</style>
