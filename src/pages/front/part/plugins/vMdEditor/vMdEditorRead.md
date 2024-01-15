## 前言

```v-md-editor```是一个基于Vue的Markdown编辑器插件，支持Vue 3和TypeScript

## 安装依赖

```
pnpm install @kangc/v-md-editor
```

## 导入组件


### 导入v-md-editor组件

```
<!--src/components/mdEditor/index.ts-->

import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'

import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

import Prism from 'prismjs'

VueMarkdownEditor.use(vuepressTheme, {
    Prism
})

export default VueMarkdownEditor
```

在上述代码中，我们还导入了基础的编辑器样式和VuePress主题样式，并使用VMdEditor.use()方法来启用VuePress主题。

### 导入到Vue

```javascript
<!--src/components/index.ts-->

import type { App  } from 'vue'

import VueMarkdownEditor from './mdEditor'

const pluginList = [
    VueMarkdownEditor
]

const plugins = {
    install (app: App<Element>) {
        Object.entries(pluginList).forEach(([key, value]) =>{
            app.use(value)
        })
    }
}

export default plugins
```

### 在入口函数引入

```javascript
<!--src/main.ts-->

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import plugins from "@/components";

app.use(plugins)

app.mount('#app')

```

## 创建Markdown编辑器组件

创建一个Vue组件来使用Markdown编辑器。例如：

```javascript
<!--src/components/mdEditor/mdEditor.vue-->
<script setup lang="ts">
    import {computed} from "vue";
    interface Props {
    modelValue: string
    height?: string // 编辑器的高度
    placeholder?: string
}
    interface EmitEvent {
    (e: 'update:modelValue', params: string): void
}
    const props = withDefaults(defineProps<Props>(), {
    placeholder: '请输入内容'
})
    const emit = defineEmits<EmitEvent>()
        const newValue = computed({
            get() {
            return props.modelValue
        },
            set(value: string) {
            emit('update:modelValue', value)
        }
        })
</script>

<template>
    <v-md-editor
    :placeholder="placeholder"
    :disabled-menus="[]"
    v-model="newValue"
    :height="height"></v-md-editor>
</template>

```
在上述代码中，我们创建了一个名为MarkdownEditor的组件，其中包含一个v-md-editor组件。我们使用v-model指令将编辑器的内容绑定到markdownText属性。

## 使用Markdown编辑器

在应用程序中使用MarkdownEditor组件。例如：

```
<!-- App.vue -->
<script setup lang="ts">
import {ref} from "vue";
import MdEditor from "@/components/mdEditor/mdEditor.vue";
const previewData = ref('')
import vMdEditorRead from './vMdEditorRead'
previewData.value = vMdEditorRead
</script>

<template>
  <md-editor :model-value="previewData" mode="preview"></md-editor>
</template>

<style scoped>

</style>
```
在上述代码中，我们在App.vue组件中使用了MarkdownEditor组件。

以上就是在Vue 3和TypeScript环境下使用v-md-editor的基本步骤。你可以根据你的实际需求进行适当的调整和定制。


## [vue-markdown-editor官网入口](https://ckang1229.gitee.io/vue-markdown-editor/zh/ "https://ckang1229.gitee.io/vue-markdown-editor/zh/")