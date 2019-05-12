import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'
import axios from 'axios'

import Main from '@/pages/Main'

import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'

import RegisterSensor from '@/pages/register/Sensor'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (localStorage.userInfo) {
    axios.defaults.headers.common['authorization'] = localStorage.userToken
    store.commit('setUserInfo', JSON.parse(localStorage.userInfo))
    store.commit('setIsAuth', true)
    return next()
  }

  if (store.getters.userInfo) return next()
  next('/auth/login')
}

const forbidAuth = (to, from, next) => {
  if (localStorage.userInfo) {
    axios.defaults.headers.common['authorization'] = localStorage.userToken
    store.commit('setUserInfo', JSON.parse(localStorage.userInfo))
    store.commit('setIsAuth', true)
  }
  if (store.getters.getIsAuth) return next('/')
  next()
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
      component: Login,
      beforeEnter: forbidAuth
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: Register,
      beforeEnter: forbidAuth
    },
    {
      path: '/auth/logout',
      name: 'Logout',
      beforeEnter: (to, from, next) => {
        axios.defaults.headers.common['authorization'] = null
        store.commit('setUserInfo', '')
        store.commit('setIsAuth', false)
        localStorage.userInfo = ''
        localStorage.userToken = ''
        next('/auth/login')
      }
    },
    {
      path: '/register/sensor',
      name: 'RegisterSensor',
      component: RegisterSensor,
      beforeEnter: requireAuth
    }
  ]
})
