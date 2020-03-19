import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('server-app', Home);

new Vue({
  render: h => h(App),
}).$mount('#app')
