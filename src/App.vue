<script lang="ts" setup >
import { RouterView } from 'vue-router'
import {provide, ref} from "vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import {syncLoadFile} from "@/utils/utils";
dayjs.locale('zh-cn');

const theme = ref({
  token: {
  }
})
const locale = ref(zhCN);

const getPopupContainer = (el: any, dialogContext: any) => {
  if (dialogContext) {
    return dialogContext.getDialogWrap();
  } else {
    return document.body;
  }
}
provide('syncLoadFile', syncLoadFile)
</script>

<template>
  <a-config-provider  :getPopupContainer="getPopupContainer" :locale="locale" :theme="theme">
    <RouterView />
  </a-config-provider>
</template>

<style scoped>
</style>
