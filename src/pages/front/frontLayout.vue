<script lang="ts" setup >
import type { CSSProperties } from 'vue';
import { reactive, ref, watch, VueElement, h } from 'vue';
import type { MenuProps, ItemType } from 'ant-design-vue';
import {useRouter} from "vue-router";
const router = useRouter();
import menus from "@/pages/front/menus";

const contentStyle: CSSProperties = {
  backgroundColor: 'white',
  marginLeft: '6px',
  padding: '6px'
};
const selectedKeys = ref<string[]>(['vueJs']);
const openKeys = ref<string[]>(['sub1']);
const items = ref<MenuProps['items']>(menus.map(e => {
  return {
    title: e.title,
    label: e.title,
    key: e.name,
  } as ItemType
}));

const handleClick = (e: any) => {
  router.push({
    name: e.key
  })
};
</script>

<template>
  <a-layout style="min-height: 100%">
      <a-layout-sider width="256">
        <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            style="width: 256px;border-right: none;min-height: 100%"
            mode="inline"
            :items="items"
            @click="handleClick"
        ></a-menu>
      </a-layout-sider>
      <a-layout-content :style="contentStyle">
        <RouterView/>
      </a-layout-content>
  </a-layout>
</template>

<style scoped>
</style>
