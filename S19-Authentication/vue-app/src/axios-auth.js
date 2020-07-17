import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/'
})

// instance.defaults.headers.common['Authorization'] = 'abc123'
// instance.defaults.headers.get['Accepts'] = 'application/json'

// instance.interceptors.request.use(config => {
//   console.log('Request Interceptors', config)
//   return config
// })

// instance.interceptors.response.use(res => {
//   console.log('Response Interceptors', res)
//   return res
// })

// axios.interceptors.request.eject(reqInterceptor)
// axios.interceptors.response.eject(resInterceptors)

export default instance