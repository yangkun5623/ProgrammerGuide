import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import Layout from '../layout/layout.vue'
import Login from '../login/login.vue'
import routes from "@/pages";
import { allUser } from '@/core/common/js/permission'
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
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

router.beforeEach((to, from, next) =>{
  const loginCode:string | null = localStorage.getItem('loginCode')
  if (!allUser.includes(typeof loginCode === 'string' ? loginCode :'') &&  to.name !== 'login') {
    next({
      name: 'login',
    })
  } else {
    next()
  }
})



export default router
