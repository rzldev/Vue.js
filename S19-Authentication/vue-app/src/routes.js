import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store.js'
// import Dashboard from './components/Dashboard.vue'
// import SignIn from './components/auth/SignIn.vue'
// import SignUp from './components/auth/SignUp.vue'

const Dashboard = resolve => {
    require.ensure(['./components/Dashboard.vue'], () => {
        resolve(require('./components/Dashboard.vue'))
    }, 'Home')
}
const SignIn = resolve => {
    require.ensure(['./components/auth/SignIn.vue'], () => {
        resolve(require('./components/auth/SignIn.vue'))
    }, 'Auth')
}
const SignUp = resolve => {
    require.ensure(['./components/auth/SignUp.vue'], () => {
        resolve(require('./components/auth/SignUp.vue'))
    }, 'Auth')
}

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: Dashboard, name: 'Dashboard',
            beforeEnter: (to, from, next) => {
                if (store.getters.isAuthenticated) {
                    next()
                } else {
                    next('/signin')
                }
            }
        },
        { path: '/signin', component: SignIn, name: 'SignIn' },
        { path: '/signup', component: SignUp, name: 'SignUp' },
        { path: '*', redirect: '/' }
    ],
    mode: 'history'
})