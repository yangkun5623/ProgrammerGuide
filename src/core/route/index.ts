import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import Layout from '../layout/layout.vue'
import Login from '../login/login.vue'
import routes from "@/pages";
import { allUser } from '@/core/common/js/permission'
import { permission } from '@/core/common/js/permission'
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
  if (to.name === 'login') {
    next()
  }
  const loginCode:string | null = localStorage.getItem('loginCode')
  const metaPermission:any = to.meta.permission
  if (metaPermission && permission[metaPermission].includes(loginCode)) {
    next()
  } else if (allUser.includes(typeof loginCode === 'string' ? loginCode :'')) {
    next()
  } else {
    next('/login')
  }
})



export default router
