<script lang="ts" setup>
import type { CSSProperties } from 'vue';
import { ref} from 'vue'
import CardAuthorTable from "@/pages/worktable/components/Cards/CardAuthorTable.vue";
import CardBarChart from "@/pages/worktable/components/Cards/CardBarChart.vue";
import CardBillingInfo from "@/pages/worktable/components/Cards/CardBillingInfo.vue";
const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
};
const testLayout:any = ref([
  {"x":0,"y":0,"w":100,"h":39,"i":"0", component: CardAuthorTable},
  {"x":50,"y":39,"w":50,"h":40,"i":"1", component: CardBarChart},
  {"x":0,"y":39,"w":50,"h":48,"i":"2", component: CardBillingInfo},
  {"x":50,"y":69,"w":50,"h":25,"i":"3"}
])

</script>
<template>
  <a-layout>
    <a-layout-content :style="contentStyle">
      <grid-layout
          :layout.sync="testLayout"
          :col-num="100"
          :row-height="2"
          :is-draggable="true"
          :is-resizable="true"
          :is-mirrored="false"
          :vertical-compact="true"
          :margin="[10, 10]"
          :use-css-transforms="true"
      >

        <grid-item v-for="item in testLayout"
                   :x="item.x"
                   style="background: white"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
          <component style="height: 100%" :is="item.component"/>
        </grid-item>
      </grid-layout>
    </a-layout-content>
    <a-layout-footer :style="footerStyle">
      <a-typography-link href="https://jbaysolutions.github.io/vue-grid-layout/zh/guide/#npm" target="_blank">
        VueGridLayout
      </a-typography-link>
    </a-layout-footer>
  </a-layout>

</template>
<style>
</style>


