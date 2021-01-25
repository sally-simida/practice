import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userId: '',
    nickName: '',
    isShow: false
  },
  mutations: {
    setNickName (state, nickName) {
      state.nickName = nickName
      console.log(state.nickName)
      state.isShow = true
    },
    changeIsShow (state) {
      state.isShow = false
    }
  },
  actions: {
    setToken: (state, token) => {
      state.token = token
      console.log(state.token)
      localStorage.setItem('mytoken', token)
    },
    setUserId: (state, userId) => {
      state.userId = userId
      console.log(userId)
      localStorage.setItem('userId', userId)
    }
  },
  modules: {}
})
