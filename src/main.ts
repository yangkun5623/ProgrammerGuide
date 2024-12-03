import './assets/main.css'
import './assets/common.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Swipe, SwipeItem } from 'vant'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import router from './core/route'
import plugins from "@/components"
import MdEditor from "@/components/mdEditor"
import gridLayout from 'vue-grid-layout'

// 创建应用实例
const app = createApp(App)

// 创建 Pinia 实例并使用插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 注册全局组件
app.component('MdEditor', MdEditor)

// 使用插件
app.use(pinia)
app.use(Antd)
app.use(router)
app.use(plugins)
app.use(Swipe)
app.use(SwipeItem)
app.use(gridLayout)

// 挂载应用
app.mount('#app')

