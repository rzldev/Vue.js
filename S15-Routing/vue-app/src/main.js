import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    
    if (to.hash) {
      return { selector: to.hash }
    }

    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
