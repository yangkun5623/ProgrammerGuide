<script lang="ts" setup>
import { h, ref } from 'vue';
const selectedKeys1 = ref<string[]>(['1']);
</script>

<template>
  <div class="logo" >
    <img src="@/core/common/img/logo.jpg" height="54">
  </div>
  <a-menu
      v-model:selectedKeys="selectedKeys1"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
  >
    <a-menu-item key="1">GPT</a-menu-item>
  </a-menu>
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
