// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import VueSweetAlert2 from 'vue-sweetalert2'

Vue.config.productionTip = false

Vue.use(VueSweetAlert2)
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
