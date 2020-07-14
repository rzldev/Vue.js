<template>
  <div id="app" class="container">
    <h1>Vuex</h1>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-12">
        <app-result></app-result>
        <app-counter></app-counter>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-12">
        <app-getters-result></app-getters-result>
        <app-action-counter></app-action-counter>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <app-vuex-binding></app-vuex-binding>
      </div>
    </div>
  </div>
</template>

<script>
  import Result from './components/Result.vue'
  import Counter from './components/Counter.vue'
  import GettersResult from './components/GettersResult.vue'
  import ActionCounter from './components/ActionCounter.vue'
  import VuexBinding from './components/VuexBinding.vue'

  export default {
    name: 'App',
    components: {
      AppResult: Result,
      AppCounter: Counter,
      AppGettersResult: GettersResult,
      AppActionCounter: ActionCounter,
      AppVuexBinding: VuexBinding
    }
  }
</script>

<style>

</style>
