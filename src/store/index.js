import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userMsg: {},
  },
  mutations: {
    addUserMsg(state, payload) {
      state.userMsg = payload;
    },
    removeUserMsg(state) {
      state.userMsg = {};
    },
  },
  actions: {

  },
  modules: {
  },
});
