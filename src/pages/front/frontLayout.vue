<script lang="ts" setup >
import type { CSSProperties } from 'vue';
import { reactive, ref, watch, VueElement, h } from 'vue';
import type { MenuProps, ItemType } from 'ant-design-vue';
import {useRouter} from "vue-router";
const router = useRouter();

const contentStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'white',
  marginLeft: '6px'
};

const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);

import routes from "./routes";
const items = ref<MenuProps['items']>(routes.map(e => {
  return {
    title: e.title,
    label: e.title,
    key: e.name,
  } as ItemType
}));

const handleClick: MenuProps['onClick'] = e => {
  router.push({
    name: e.key
  })
};

watch(openKeys, val => {
  console.log('openKeys', val);
});
const value = ref('')
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
