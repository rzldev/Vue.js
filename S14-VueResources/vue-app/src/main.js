import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-http-4495b.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  console.log(request)

  if (request.method == 'POST') {
    request.method = 'PUT'
  }

  next((response) => {
    response.json = () => {
      return {
        messages: response.body
      }
    }
  })
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
