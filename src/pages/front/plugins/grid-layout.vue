<script lang="ts" setup>
import type { CSSProperties } from 'vue';
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
var testLayout = [
  {"x":0,"y":0,"w":2,"h":2,"i":"0"},
  {"x":2,"y":0,"w":2,"h":4,"i":"1"},
  {"x":4,"y":0,"w":2,"h":5,"i":"2"},
  {"x":6,"y":0,"w":2,"h":3,"i":"3"},
  {"x":8,"y":0,"w":2,"h":3,"i":"4"},
  {"x":10,"y":0,"w":2,"h":3,"i":"5"},
  {"x":0,"y":5,"w":2,"h":5,"i":"6"},
  {"x":2,"y":5,"w":2,"h":5,"i":"7"},
  {"x":4,"y":5,"w":2,"h":5,"i":"8"},
  {"x":6,"y":3,"w":2,"h":4,"i":"9"},
  {"x":8,"y":4,"w":2,"h":4,"i":"10"},
  {"x":10,"y":4,"w":2,"h":4,"i":"11"},
  {"x":0,"y":10,"w":2,"h":5,"i":"12"},
  {"x":2,"y":10,"w":2,"h":5,"i":"13"},
  {"x":4,"y":8,"w":2,"h":4,"i":"14"},
  {"x":6,"y":8,"w":2,"h":4,"i":"15"},
  {"x":8,"y":10,"w":2,"h":5,"i":"16"},
  {"x":10,"y":4,"w":2,"h":2,"i":"17"},
  {"x":0,"y":9,"w":2,"h":3,"i":"18"},
  {"x":2,"y":6,"w":2,"h":2,"i":"19"}
];


</script>
<!--https://jbaysolutions.github.io/vue-grid-layout/zh/guide/#npm-->
<template>
  <a-layout>
    <a-layout-content :style="contentStyle">
      <grid-layout
          :layout.sync="testLayout"
          :col-num="12"
          :row-height="30"
          :is-draggable="true"
          :is-resizable="true"
          :is-mirrored="false"
          :vertical-compact="true"
          :margin="[10, 10]"
          :use-css-transforms="true"
      >

        <grid-item v-for="item in testLayout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
          {{item.i}}
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
.vue-grid-item{
  background: white;
}
</style>


