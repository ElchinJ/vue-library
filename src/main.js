import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import
import json from './assets/books.json'

import store from './store'

Vue.config.productionTip = false

new Vue({
  router,

  // Add data to root component
  data: () => ({
    books: json.books
  }),

  store,
  render: h => h(App)
}).$mount('#app')
