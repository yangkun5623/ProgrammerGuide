<script lang="ts" setup>
import FooterBar from "@/core/layout/part/footer.vue";
import HeaderNav from "@/core/layout/part/headerNav.vue";
const headerCss = {
  position: 'fixed',
  zIndex: 1,
  padding: '0 20px',
  width: '100%',
  backgroundColor: 'white'
}
const contentStyle = {
  padding: '18px 16px',
  height: 'auto',
  marginTop: '60px',
  overflowY: 'auto'
};
const backTopElm = () => {
  return document.querySelector('#content')
}
</script>

<template>
  <a-layout style="height: 100%">
    <a-layout-header :style="headerCss" class="header">
      <header-nav/>
    </a-layout-header>
    <a-layout-content :style="contentStyle" id="content">
      <RouterView v-slot="{Component}" key="ddd">
        <keep-alive :include="/[a-zA-Z-\d]*/">
            <component :is="Component"/>
        </keep-alive>
      </RouterView>
<!--      <footer-bar/>-->
    </a-layout-content>
    <a-float-button-group shape="circle">
      <a-back-top :visibility-height="200" :target="backTopElm"/>
    </a-float-button-group>
  </a-layout>
</template>

<style scoped>
</style>
