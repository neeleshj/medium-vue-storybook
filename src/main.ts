import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuex, { Module } from "vuex";
import SimpleStore from './store/index'

Vue.config.productionTip = false


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    SimpleStore
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
