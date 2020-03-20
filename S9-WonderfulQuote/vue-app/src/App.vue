<template>
  <div class="container">
    <header-app :quoteCount="quotes.length" :quoteMax="maxQuotes"></header-app>
    <new-quote-app @quoteAdded="newQuote"></new-quote-app>
    <quote-grid-app :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid-app>
    <div class="row">
      <div class="col-sm-12 text-center" style="padding-top: 10px">
        <div class="alert alert-info">
          Info: Click on Quote to delete it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue'
  import NewQuote from './components/NewQuote.vue'
  import Header from './components/Header.vue'

  export default {
    data: function() {
      return {
        maxQuotes: 10,
        quotes: [
          '"Time isn\'t the main thing. It\'s the only thing."'
        ]
      }
    },
    components: {
      'quote-grid-app': QuoteGrid,
      'new-quote-app': NewQuote,
      'header-app': Header
    },
    methods: {
      newQuote(quote) {
        if (this.quotes.length <= this.maxQuotes) {
          this.quotes.push(quote);
        }
        console.log(this.quotes);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    }
  }
</script>

<style>

</style>
