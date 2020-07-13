// import Main from './components/Main.vue'
// import User from './components/user/User.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'

const Main = resolve => {
    require.ensure(['./components/Main.vue'], () => {
        resolve(require('./components/Main.vue'))
    }, 'Home')
}
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'User')
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'User')
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'User')
}

export const routes = [
    { path: '/', component: Main, name: 'Home'},
    { path: '/user/', component: User, name: 'User', children: [
        { path: '/user/:id', component: UserDetail, name: 'UserDetail', 
            beforeEnter: (to, from, next) => {
                console.log('beforeEnter inside route setup')
                next()
            } 
        },
        { path: '/user/:id/edit', components: {
            default: UserEdit,
            'user-detail': UserDetail
        }, name: 'UserEdit' }
    ]},
    { path: '*', redirect: '/' }
]