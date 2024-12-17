<script setup lang="ts">
import {useLoadFile} from "@/utils/utils";
import {ref} from "vue";

const previewData = ref()
useLoadFile('/md/npm包下载nexus包到本地.md').then(e => {
  previewData.value = e
})
</script>

<template>
  <md-editor :model-value="previewData" mode="preview"></md-editor>
</template>

<style scoped>

</style>