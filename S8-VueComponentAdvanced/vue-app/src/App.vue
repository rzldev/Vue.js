<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <button type="button" @click="selectedComponent = 'app-quote'">Quote</button>
        <button type="button" @click="selectedComponent = 'app-author'">Author</button>
        <button type="button" @click="selectedComponent = 'app-new'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>

        <keep-alive>
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>

        <!-- <app-quote>
          <h1 slot="title">{{ title }}</h1>
          <p>A Wonderful Quote</p>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue'
  import Author from './components/Author.vue'
  import New from './components/New.vue'

  export default {
    data: function() {
      return {
        title: 'The Quote',
        selectedComponent: 'app-quote'
      }
    },
    components: {
      'app-quote': Quote,
      'app-author': Author,
      'app-new': New
    }
  }
</script>

<style>

</style>
