import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'
import axios from 'axios'

import Main from '@/pages/Main'

import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (localStorage.userInfo) {
    axios.defaults.headers.common['authorization'] = localStorage.userToken
    store.commit('setUserInfo', JSON.parse(localStorage.userInfo))
    return next()
  }

  if (store.getters.userInfo) return next()
  next('/auth/login')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      beforeEnter: requireAuth
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/auth/logout',
      name: 'Logout',
      beforeEnter: (to, from, next) => {
        axios.defaults.headers.common['authorization'] = ''
        store.commit('setUserInfo', '')
        localStorage.userInfo = ''
        localStorage.userToken = ''
        next('/auth/login')
      }
    }
  ]
})
