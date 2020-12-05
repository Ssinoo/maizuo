import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";
import  CityModule from './module/CityModule'
import  CinemaModule from './module/CinemaModule'
import  TabbarModule from './module/TabbarModule'

Vue.use(Vuex)

export default new Vuex.Store({
  //vuex的持久化
  // plugins: [createPersistedState()],
  state: {
  },
  mutations: {
  },
  //异步
  actions: {
  },
  modules: {
    CityModule,
    CinemaModule,
    TabbarModule
  }
})
