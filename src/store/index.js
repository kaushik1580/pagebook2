import Vue from 'vue'
import Vuex from 'vuex'
import {setAuthorizationToken} from '../util/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: localStorage.token?true:false,
    postId: "",
    friendId: "",
    postId_react: "",
    reactId: "",
    moderatorSearch: ""
  },
  mutations: {
    AUTHENTICATE_USER(state){
      state.isAuthenticated = !state.isAuthenticated
    },
  },
  actions: {
    loginUser({commit},token){
      localStorage.setItem("token" ,token)
          setAuthorizationToken(token)
          if(localStorage.getItem){
            commit("AUTHENTICATE_USER")
          }
      }
  },
  modules: {
  }
})