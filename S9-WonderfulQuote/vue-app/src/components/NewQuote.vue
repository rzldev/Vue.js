<template>
    <form>
      <label>Quote</label>
      <div class="form-group">
        <textarea class="form-control" rows="2" v-model="quote"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="button" @click.prevent="createNewQuote">Add Quote</button>
      </div>
    </form>
</template>

<script>
  export default {
    data: function() {
      return {
        quote: ''
      }
    },
    methods: {
      createNewQuote() {
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  }
</script>

<style scoped>
  form {
    margin: 10px 50px;
  }
</style>
