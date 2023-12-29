import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import Layout from '../layout/layout.vue'
import Login from '../login/login.vue'
import routes from "@/pages/routes";
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      redirect: 'worktable',
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
