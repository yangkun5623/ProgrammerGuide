# pinia 持久化插件pinia-plugin-persistedstate 



## 安装

```shell
npm install pinia-plugin-persistedstate
```

## 在入口文件引入

```js

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.component('MdEditor', MdEditor)

app.use(pinia)

app.mount('#app')


```

## 在store中使用,

```js

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuConfigStore = defineStore('menuConfig', () => {
    // 菜单是否折叠
    const collapsed = ref(true)
    // 主题色
    const theme = ref('light')

    // 切换菜单折叠
    const  toggleCollapsed = () => {
        collapsed.value = !collapsed.value
    }

    return {
        collapsed,
        toggleCollapsed,
        theme
    }
}, {persist: true})

```
设置了persist为true后，在state状态修改时，pinia会自动将修改后的状态保存到本地存储中,刷新页面时，会自动读取本地存储中的状态，恢复到之前的状态。



[更多用法请访问官网](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/config.html)
