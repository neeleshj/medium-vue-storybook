import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import State from './store/State';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    State,
  },
});
