import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      isIndex: true
    }
  },
  getters: {
  },
  mutations: {
    SET_INDEX(state, payload) {
      state.isIndex = payload
    }
  },
  actions: {
    CHANGE_INDEX({ commit }, path) {
      path === '/index' ? commit('SET_INDEX', true) : commit('SET_INDEX', false)
    }
  },
  modules: {
  }
})
