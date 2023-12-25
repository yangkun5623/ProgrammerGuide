<script lang="ts" setup>
import HeaderNav from "@/core/layout/part/headerNav.vue";
import FooterBar from "@/core/layout/part/footer.vue";
const headerCss = {
  position: 'fixed',
  zIndex: 1,
  padding: '0 20px',
  width: '100%',
  backgroundColor: 'linear-gradient(135deg,#65799b,#5e2563)'
}
const contentStyle = {
  padding: '18px 16px 0 16px',
  height: 'auto',
  marginTop: '60px',
  overflowY: 'auto'
};
</script>

<template>
  <a-layout style="height: 100%">
    <a-layout-header :style="headerCss" class="header">
      <header-nav/>
    </a-layout-header>
    <a-layout-content :style="contentStyle">
      <RouterView/>
<!--      <footer-bar/>-->
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
</style>
