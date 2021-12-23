import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('../views/Editor.vue')
  },
  {
    path: '/edit/:uuid',
    name: 'Edit',
    component: () => import('../views/Editor.vue')
  },
  {
    path: '/view/:uuid',
    name: 'View',
    component: () => import('../views/Viewer.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
