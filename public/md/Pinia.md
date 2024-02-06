## Pinia 基础使用

环境：

- Vue3
- Pinia

### 安装

```bash
pnpm install pinia
```

### 创建 store

在项目入口文件 src/main.ts 中创建一个 store，并将其挂载到 Vue 应用上。

```js
// src/main.ts
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')

export { pinia }
```

### 创建 state

在 src 目录下创建一个 store 文件夹，并在该文件夹下创建一个 user.js 文件，用于创建 user store。

```js
// src/stores/menuConfig.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'
// 定义整个菜单配置

export const useMenuConfigStore = defineStore('menuConfig', () => {
    // 菜单是否折叠
    const collapsed = ref(false)
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
})
```


### 使用 store

在 src 目录下创建一个 views 文件夹，并在该文件夹下创建一个 Home.vue 文件，用于展示用户信息。

```vue
<template>
  <div>
    <a-button type="link" style="width: 100%" @click="menuConfig.toggleCollapsed()">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
  </div>
</template>

<script lang="ts" setup>
  // 引入store
  import {useMenuConfigStore} from "@/stores/menuConfig";
  import {computed} from "vue";

 
  const menuConfig = useMenuConfigStore()
  // 如果直接使用menuConfig.collapsed来展示值的话是不需要定义成computed计算属性的
  let collapsed = computed(() => menuConfig.collapsed);
</script>
```




[更多用法请访问官网](https://pinia.vuejs.org?_blank)
