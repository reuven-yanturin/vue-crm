import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    mata: { layout: 'main' },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/detail-record',
    name: 'DetailRecord',
    mata: { layout: 'main' },
    component: () => import('../views/DetailRecord.vue')
  },
  {
    path: '/history',
    name: 'History',
    mata: { layout: 'main' },
    component: () => import('../views/History.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    mata: { layout: 'main' },
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    mata: { layout: 'main' },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'Record',
    mata: { layout: 'main' },
    component: () => import('../views/Record.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'auth' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'auth' },
    component: () => import('../views/Register.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
