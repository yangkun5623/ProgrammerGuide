import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../core/layout/layout.vue'
import Login from '../core/login/login.vue'
import routes from '@/work/routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      redirect: 'gpt',
      children: routes,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: 'layout'
    }
  ]
})

export default router
