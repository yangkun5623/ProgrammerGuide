<script setup lang="ts">

import MdEditor from "@/components/mdEditor/mdEditor.vue";
import {ref} from "vue";
const previewData = ref('#这里是要预览的markdown数据')
</script>

<template>
  <div>typeScript</div>
  <md-editor :model-value="previewData" mode="preview"></md-editor>
</template>

<style scoped>

</style>