<script setup lang="ts">
import {onMounted, ref} from "vue";
import {htmlToPDF} from "@/utils/exportPdf";
const page = ref()
onMounted(() => {
  setTimeout(() => {


    console.log('page', page.value)
    htmlToPDF(page.value.$el, '测试')
  }, 1000)
})
</script>

<template>
    <RouterView ref="page"/>
</template>

<style scoped lang="less">
.container{
  width: 100%;
  height: 100%;
}
</style>