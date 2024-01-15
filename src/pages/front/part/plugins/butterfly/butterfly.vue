<script setup lang="ts">
// 如果您引用的项目使用了jquery和lodash，为了缩小项目的体积，我们建议：
import {Canvas, TreeCanvas} from 'butterfly-dag'
import 'butterfly-dag/dist/index.css';
import {onMounted, ref} from "vue";
import mockData from "@/pages/front/part/plugins/butterfly/data";
//画布

onMounted(() => {
  let root = document.getElementById('dag-canvas');
  const canvas = new Canvas({
    root: root,
    disLinkable: true, // 可删除连线
    linkable: true,    // 可连线
    draggable: true,   // 可拖动
    zoomable: true,    // 可放大
    moveable: true,    // 可平移
    theme: {
      edge: {
        shapeType: 'AdvancedBezier',
        defaultAnimate: true,
      }
    }
  });
  canvas.draw(mockData);

  canvas.on('system.node.move', (data: any) => {
    console.log('move', data);
  })
})

</script>

<template>
  <div class='flow-page'>
    <div class="flow-canvas" id="dag-canvas">
    </div>
  </div>

  <a href="https://butterfly-dag.gitee.io/butterfly-dag/demo/flow" target="_blank">官网</a>
</template>

<style scoped lang="less">
.flow-page{
  height: calc(100% - 80px);
  width: 100%;
  .flow-canvas{
    height: 100%;
    width: 100%;
  }
}
</style>