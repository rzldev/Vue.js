import router from '../../routes.js'
import AxiosAuth from '../../axios-auth.js'
import AxiosGlobal from '../../axios-global.js'

const state = {
    idToken: '',
    userId: '',
    user: {}
}

const getters = {
    user: state => {
        return state.user
    },
    isAuthenticated: state => {
        return state.idToken !== ''
    }
}

const mutations = {
    userAuth: (state, userData) => {
        state.idToken = userData.idToken
        state.userId = userData.localId
    },
    saveUser: (state, userData) => {
        state.user = userData
    },
    clearUserAuth: (state) => {
        state.idToken = ''
        state.userId = ''
    }
}

const actions = {
    signup: ({ dispatch }, formUser) => {
        AxiosAuth.post('accounts:signUp?key=AIzaSyDd6IfNZDjcljtLgEVVV29o-_y_TVCZh3I', 
            { email: formUser.email, password: formUser.password, returnSecureToken: true })
            .then(res => {
                // console.log(response.data)

                dispatch('storeUser', formUser)
                dispatch('setLogoutTimer', res.data.expiresIn)
            })
            .catch(err => {
                console.log(err)
            })
    },
    signin: ({ commit, dispatch }, formUser) => {
        AxiosAuth.post('accounts:signInWithPassword?key=AIzaSyDd6IfNZDjcljtLgEVVV29o-_y_TVCZh3I', 
            { email: formUser.email, password: formUser.password, returnSecureToken: true })
            .then(response => {
                // console.log(response.data)
                const now = new Date()
                const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000)

                localStorage.setItem('token', response.data.idToken)
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', response.data.localId)

                commit('userAuth', response.data)
                commit('saveUser', response.data)
                
                dispatch('setLogoutTimer', response.data.expiresIn)
                router.push('/')
            })
            .catch(error => {
                console.log(error)
            })
    },
    signout: ({ commit }) => {
        commit('clearUserAuth')
        localStorage.clear()
        router.push('/signin')
    },
    setLogoutTimer: ({ commit }, expirationTime) => {
        setTimeout(() => {
            commit('clearUserAuth')
            router.push('/signin')
        }, expirationTime * 1000)
    },
    autoLogin: ({ commit }) => {
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }

        const expirationDate = localStorage.getItem('expirationDate')
        const now = new Date()
        if (now >= expirationDate) {
            return
        }

        const userId = localStorage.getItem('userId')
        commit('userAuth', {
            idToken: token,
            localId: userId
        })
        router.push('/')
    },
    storeUser: ({ commit }, formUser) => {
        AxiosGlobal.post('/axios/user.json?auth=' + state.idToken, formUser)
            .then(() => {
                // console.log(res.data)
                
                router.push('/signin')
                console.log(commit);
            })
            .catch(err => {
                console.log(err);
            })
    },
    fetchData: ({ commit }) => {
        AxiosGlobal.get('/axios/user.json?auth=' + state.idToken)
            .then(res => {
                // console.log(res)
                const data = res.data

                for (let key in data) {
                    const user = data[key]

                    if (user.email == state.user.email) {
                        console.log(user);
                        commit('saveUser', user)
                        return
                    }
                }

            })
            .catch(err => {
                console.log(err);
            })
    }
}

export default { state, getters, mutations, actions }