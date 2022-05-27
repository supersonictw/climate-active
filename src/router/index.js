import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/viewer/:uuid',
    name: 'Viewer',
    component: () => import('@/views/ViewerView.vue'),
    props: true
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('@/views/EditorView.vue')
  },
  {
    path: '/editor/:uuid',
    name: 'Editor',
    component: () => import('@/views/EditorView.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
