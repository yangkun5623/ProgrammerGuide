<script setup lang="ts">
import {ref} from "vue";
import MdEditor from "@/components/mdEditor/mdEditor.vue";
const previewData = ref('')
try {
  fetch('src/pages/front/part/plugins/vMdEditorRead.md')
      .then(data => data.text())
      .then(data => {
        previewData.value = data
      })
} catch (e) {

}
</script>

<template>
  <md-editor :model-value="previewData" mode="preview"></md-editor>
</template>

<style scoped>

</style>