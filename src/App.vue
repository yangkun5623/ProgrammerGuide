<script lang="ts" setup >
import { RouterView } from 'vue-router'
import {ref} from "vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const theme = ref({
  token: {
  }
})
const locale = ref(zhCN);

const getPopupContainer = (el, dialogContext) => {
  if (dialogContext) {
    return dialogContext.getDialogWrap();
  } else {
    return document.body;
  }
}
</script>

<template>
  <a-config-provider  :getPopupContainer="getPopupContainer" :locale="locale" :theme="theme">
    <RouterView />
  </a-config-provider>
</template>

<style scoped>
</style>
