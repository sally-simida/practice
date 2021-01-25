import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 60000
})

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('mytoken')
    config.headers.Authorization = 'Bearer ' + token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
