<script lang="ts" setup >
import type { CSSProperties } from 'vue';
import { reactive, ref, watch, VueElement, h } from 'vue';
import type { MenuProps, ItemType } from 'ant-design-vue';
import {useRouter} from "vue-router";
import routes from "@/pages/routes";
const router = useRouter();

const contentStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'white',
  marginLeft: '6px'
};
const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
const items = ref<MenuProps['items']>(routes.find(e => e.name === 'frontLayout')?.children?.map(e => {
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
      <a-layout-content :style="contentStyle">111
        <RouterView/>
      </a-layout-content>
  </a-layout>
</template>

<style scoped>
</style>
