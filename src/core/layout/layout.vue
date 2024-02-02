<template>
  <div class="container">
    <div class="slider" :style="{width: state.collapsed ? '81px' : '256px'}">
      <div class="avatar" :style="{height: state.collapsed ? '81px' : '140px'}">
        <img src="@/assets/avatar.jpg" width="80px"/>
        <a-typography-title class="avatar-title" :style="{opacity: state.collapsed ? 0 : 1}">Shieru</a-typography-title>
      </div>
      <div class="menu beautifyScrollbar">
        <a-menu
            v-model:openKeys="state.openKeys"
            v-model:selectedKeys="state.selectedKeys"
            mode="inline"
            style="border: none"
            theme="light"
            :inline-collapsed="state.collapsed"
            :items="items"
            @click="menuClick"
        ></a-menu>
      </div>
      <a-button type="link" style="width: 100%" @click="toggleCollapsed">
        <MenuUnfoldOutlined v-if="state.collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
    </div>
    <div class="content">
      <RouterView/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, h } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue';
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});


watch(
    () => state.openKeys,
    (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    },
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

import {useRoute} from "vue-router";
import type {MenuItemType, SubMenuType} from "ant-design-vue/es/menu/src/interface";
import router from "@/core/route";
const getMenuRoutes: any = (routes: any[]) => {
  const menus: any[] = [];
  // 遍历路由，将meta中title为菜单的项添加到menus中
  routes.forEach(e => {
    if (e.meta) {
      if (e.children) {
        const menu:SubMenuType = {
          key: e.name,
          label: e.meta.title,
          children: getMenuRoutes(e.children)
        }
        menus.push(menu)
      } else {
        const menu:MenuItemType = {
          key: e.name,
          label: e.meta.title,
        }
        menus.push(menu)
      }
    }
  })
  return menus;
}
const route =  useRoute()
const menuRoutes =  route.matched.find(item => item.name === 'layout')
const items = getMenuRoutes(menuRoutes?.children)
const menuClick = (e:any) => {
  router.push({name: e.key})
}

</script>
<style scoped lang="less">

.container{
  width: 100%;
  height: 100%;
  display: flex;
  background: white;

  .slider{
    flex: none;
    border-right: 1px solid #EBECF0;
    transition: width 200ms;
    display: flex;
    flex-direction:column;

    .avatar{
      display: flex;
      align-items: center;
      flex-direction:column;
      overflow-y: hidden;

      .avatar-title{
        transition: ease-in 0.4s;
      }
    }

    .menu{
      overflow: auto;
      flex: 1;

    }
  }

  .content{
    flex: 1;
    padding: 10px;
    background: #F1F2F6;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
}
</style>

