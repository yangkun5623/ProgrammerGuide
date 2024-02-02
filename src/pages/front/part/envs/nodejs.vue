<script setup lang="ts">
import MdEditor from "@/components/mdEditor/mdEditor.vue";
import {inject, ref} from "vue";
const previewData = ref('')
const syncLoadFile: any = inject('syncLoadFile')
syncLoadFile('/md/Node安装配置.md')
    .then((text: string)=> {
      previewData.value = text
    })
</script>

<template>
  <md-editor :model-value="previewData" mode="preview"></md-editor>
</template>

<style scoped>

</style>