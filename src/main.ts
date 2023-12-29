import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import router from './core/route'
import plugins from "@/components";


app.use(Antd)
app.use(router)
app.use(plugins)
app.use(createPinia())

app.mount('#app')

