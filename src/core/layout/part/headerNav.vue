<script lang="ts" setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";
import type {ItemType, MenuProps} from "ant-design-vue";
import routes from "@/pages/routes";
const selectedKeys1 = ref<string[]>(['frontLayout']);
const menus = ref<MenuProps['items']>(routes.map(e => {
  return {
    title: e.title,
    label: e.title,
    key: e.name,
  } as ItemType
}));
const router = useRouter();
const changeMenu = (e: { key: string }) => {
  router.push({
    name: e.key
  })
}
</script>

<template>
  <div class="logo" >
    <img src="@/core/common/img/logo.jpg" height="54">
  </div>
  <a-menu v-model:selectedKeys="selectedKeys1"
          :style="{ lineHeight: '64px' }"
          :inlineIndent="0"
          @click="changeMenu"
          mode="horizontal"
          :items="menus" />
</template>

<style scoped lang="less">
.logo {
  float: left;
  width: 64px;
  padding-top: 5px;

  img{
    vertical-align: top;
  }
}
</style>
