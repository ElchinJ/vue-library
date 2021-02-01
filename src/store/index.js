import Vue from 'vue'
import Vuex from 'vuex'
import Book from '@/assets/books.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookList: Book.books
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
