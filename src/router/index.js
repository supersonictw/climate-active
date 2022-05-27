import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/viewer/:uuid',
    name: 'ViewerView',
    component: () => import('@/views/ViewerView.vue'),
    props: true
  },
  {
    path: '/editor',
    name: 'EditorViewCreate',
    component: () => import('@/views/EditorView.vue')
  },
  {
    path: '/editor/:uuid',
    name: 'EditorViewUpdate',
    component: () => import('@/views/EditorView.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
