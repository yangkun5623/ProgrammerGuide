<template>
  <div class="container">
    <div class="slider" :style="{width: collapsed ? '61px' : '256px'}">
      <div class="avatar" :style="{height: collapsed ? '61px' : '140px'}">
        <img src="@/assets/avatar.jpg" :width="collapsed ? '60px' : '80px'"/>
        <a-typography-title class="avatar-title" :style="{opacity: collapsed ? 0 : 1}">Shieru</a-typography-title>
      </div>
      <div class="menu beautifyScrollbar">
        <a-menu
            v-model:openKeys=" menuConfig.openKeys"
            v-model:selectedKeys="menuConfig.selectedKeys"
            mode="inline"
            style="border: none;width: 100%"
            :theme="menuConfig.theme"
            :inline-collapsed="collapsed"
            :items="items"
            @click="menuClick"
        ></a-menu>
      </div>
      <a-button type="link" style="width: 100%" @click="menuConfig.toggleCollapsed()">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
    </div>
    <div class="content beautifyScrollbar">
      <RouterView/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {watch, h, computed, onMounted} from 'vue';
import {useMenuConfigStore} from "@/stores/menuConfig";
import {useRoute, useRouter} from "vue-router";
import type { ItemType } from 'ant-design-vue'
import type { FunctionalComponent } from 'vue'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  FolderOpenOutlined,
  BulbOutlined
} from '@ant-design/icons-vue';

const icons: { [key: string]: FunctionalComponent; } = {
  FolderOpenOutlined,
  HomeOutlined,
  BulbOutlined
}

const menuConfig = useMenuConfigStore()
let collapsed = computed(() => menuConfig.collapsed);

// 根据路由组装菜单
const getMenuRoutes: any = (routes: any[]) => {
  const menus: any[] = [];
  // 遍历路由，将meta中title为菜单的项添加到menus中
  routes.forEach(e => {
    if (e.meta) {
      const menu:ItemType = {
        key: e.name,
        label: e.meta.title,
        icon: e.meta.icon ? h(icons[e.meta.icon]) : undefined,
        children: e.children ? getMenuRoutes(e.children) : undefined
      }
      if (e.children && !e.meta.icon) {
        menu.icon = () => h(FolderOpenOutlined)
      }
      menus.push(menu)
    }
  })
  return menus;
}
const route =  useRoute()
const menuRoutes =  route.matched.find(item => item.name === 'layout')
const items = getMenuRoutes(menuRoutes?.children)

// 路由跳转
const router = useRouter()
const menuClick = (e:any) => {
  router.push({name: e.key})
}


onMounted(() => {
  if (menuConfig.selectedKeys?.[0]) {
    menuClick({key: menuConfig.selectedKeys[0]})
  }
})
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
    padding: 6px;
    background: #F1F2F6;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
}
</style>

