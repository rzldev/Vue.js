import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('toLowercase', function(value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('Global Mixin - created Hook!');
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
