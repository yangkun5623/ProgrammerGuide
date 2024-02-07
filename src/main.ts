import './assets/main.css'
import './assets/common.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import router from './core/route'
import plugins from "@/components";
import MdEditor from "@/components/mdEditor";

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.component('MdEditor', MdEditor)

app.use(Antd)
app.use(router)
app.use(plugins)
app.use(pinia)

// 添加全局方法


app.mount('#app')

