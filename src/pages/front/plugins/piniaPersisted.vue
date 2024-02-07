<script setup lang="ts">
import {inject, ref} from "vue";
const previewData = ref('')
const syncLoadFile: any = inject('syncLoadFile')
syncLoadFile('/md/pinia持久化.md')
    .then((text: string)=> {
      previewData.value = text
    })
</script>

<template>
  <md-editor :model-value="previewData" mode="preview"></md-editor>
</template>

<style scoped>

</style>