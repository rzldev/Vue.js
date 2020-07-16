import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import SignIn from './components/auth/SignIn.vue'
import SignUp from './components/auth/SignUp.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: Dashboard, name: 'Dashboard' },
        { path: '/signin', component: SignIn, name: 'SignIn' },
        { path: '/signup', component: SignUp, name: 'SignUp' }
    ],
    mode: 'history'
})