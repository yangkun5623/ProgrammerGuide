<script setup lang="ts">
import { VerticalAlignBottomOutlined } from '@ant-design/icons-vue'
import { ref} from "vue";
import {htmlToPDF} from "@/utils/exportPdf";
const page = ref()
const exportPdf = () => {
  htmlToPDF(page.value.$el,  '导出文档'+ new Date().getDate())
}
</script>

<template>
    <RouterView ref="page"/>
    <a-float-button-group shape="square"  >

    <a-float-button @click="exportPdf">
      <template #icon>
        <VerticalAlignBottomOutlined />
      </template>
    </a-float-button>
  </a-float-button-group>
</template>

<style scoped lang="less">
.container{
  width: 100%;
  height: 100%;
}
</style>