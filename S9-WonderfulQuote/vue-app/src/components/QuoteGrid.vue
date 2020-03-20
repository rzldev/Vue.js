<template>
  <div class="row">
    <quote-app v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)">
      {{ quote }}
    </quote-app>
  </div>
</template>

<script>
  import Quote from './Quote.vue'

  export default {
    props: ['quotes'],
    components: {
      'quote-app': Quote
    },
    methods: {
      deleteQuote(index){
        this.$emit('quoteDeleted', index);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
