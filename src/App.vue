<script setup>
import {ref} from "vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import Layout from "@/core/layout/layout.vue";
dayjs.locale('zh-cn');

const theme = ref({
  token: {
    colorPrimary: '#00b96b'
  }
})
const locale = ref(zhCN);
</script>

<template>
  <a-config-provider :locale="locale" :theme="theme">
     <layout/>
  </a-config-provider>
</template>

<style scoped>
</style>
