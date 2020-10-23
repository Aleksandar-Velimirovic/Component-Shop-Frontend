import Vue from 'vue'
import Vuex from 'vuex'
import { ProductStore } from './ProductStore'
import { AuthStore } from './AuthStore'


Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ProductStore,
    AuthStore
  }
})

export default store
