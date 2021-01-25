import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../views/regist.vue')
  },
  {
    path: '/err',
    name: 'err',
    component: () => import('../views/err.vue')
  },
  {
    path: '/blogDetail/:blogId',
    name: 'BlogDetail',
    component: () => import('../views/blogDetail.vue')
  },
  {
    path: '/published',
    name: 'Published',
    component: () => import('../views/published.vue')
  },
  {
    path: '/signOut',
    name: 'SignOut',
    component: () => import('../views/signOut.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
