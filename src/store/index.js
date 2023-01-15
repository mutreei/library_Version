import Vue from 'vue';
import Vuex from 'vuex';
import getData from '../request/_ajax';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userMsg: {},
    books: [],
  },
  mutations: {
    addUserMsg(state, payload) {
      state.userMsg = payload;
    },
    removeUserMsg(state) {
      state.userMsg = {};
    },
    saveBooks(state, payload) {
      state.books = payload;
      console.log('成功将图书数据存储到vuex');
    },
  },
  actions: {
    saveBooks(context) {
      return new Promise((resolve, reject) => {
        getData.post('/getAllBook')
          .then((res) => {
            context.commit('saveBooks', res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {
  },
});
