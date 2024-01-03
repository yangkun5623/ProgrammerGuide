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
      redirect: 'frontLayout',
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
// router.beforeEach((to, from, next) =>{
//   console.log('to', to)
//   console.log('from', from)
//   console.log('next', next())
// })



export default router
