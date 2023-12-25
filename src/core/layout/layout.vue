<script lang="ts" setup>
import headerNav from "@/core/layout/part/headerNav.vue";
import LeftMenu from "@/core/layout/part/leftMenu.vue";
import type { CSSProperties } from 'vue';
const headerStyle: CSSProperties = {
  color: '#fff',
  height: 48,
  paddingInline: 0,
  lineHeight: '48px',
  backgroundColor: 'white',
};

const contentStyle: CSSProperties = {
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'white',
};

const siderStyle: CSSProperties = {
  lineHeight: '64px',
  color: '#fff',
  height: '100%',
  backgroundColor: 'white',
};

const footerStyle: CSSProperties = {
  color: '#fff',
  backgroundColor: 'white',
};
</script>

<template>
  <a-layout>
    <a-layout-sider :style="siderStyle">
      <LeftMenu/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="headerStyle">
        <headerNav/>
      </a-layout-header>
      <a-layout-content :style="contentStyle">Content</a-layout-content>
      <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>

</style>