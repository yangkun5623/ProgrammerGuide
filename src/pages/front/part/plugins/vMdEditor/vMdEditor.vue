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