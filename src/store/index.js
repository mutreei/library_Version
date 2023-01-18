import Vue from 'vue';
import Vuex from 'vuex';
import getData from '../request/_ajax';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userMsg: {},
    books: [],
    searchBooks: [],
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
    saveSearchBooks(state, payload) {
      state.searchBooks = payload;
      console.log('成功将搜索结果存储到了vuex中');
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
    searchBooks(context, payload) {
      return new Promise((resolve, reject) => {
        getData.post('/findBook', payload)
          .then((res) => {
            context.commit('saveSearchBooks', res.data);
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
