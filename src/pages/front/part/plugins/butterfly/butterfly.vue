<script setup lang="ts">
// 如果您引用的项目使用了jquery和lodash，为了缩小项目的体积，我们建议：
import Canvas from './canvas.js'
// import * as HotKeyPlugin from 'butterfly-dag/plugins/hotkey/dist/index.unpkg.js';
import 'butterfly-dag/dist/index.css';
import {onMounted, ref} from "vue";
import mockData from "@/pages/front/part/plugins/butterfly/data";
import panelPlugins from 'butterfly-dag/plugins/panel/dist';
import 'butterfly-dag/plugins/panel/dist/index.css';
import './iconfont.less'
//画布

let PanelNode = panelPlugins.PanelNode;

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
  canvas.on('system.drag.end', (data: any) => {
    console.log('end', data);
  })
  canvas.on('system.nodes.add', (data: any) => {
    console.log('add', data);
  })

  panelPlugins.register(
      [
        {
          root: document.getElementById('dnd'),
          canvas: canvas,
          type: 'basic',
          width: 40,
          height: 40,
          data: [
            {
              id: 'user-baidu-1',
              type: 'png',
              content: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
              with: 100,
              height: 40,
            }
          ]
        },
      ],() => {
        console.log('finish')
      }
  );
})

</script>

<template>
  <div class='flow-page'>
    <div class="flow-panel" id="dnd"></div>
    <div class="flow-canvas" id="dag-canvas">
    </div>
  </div>
  <a href="https://butterfly-dag.gitee.io/butterfly-dag/demo/flow" target="_blank">官网</a>
</template>

<style scoped lang="less">
.flow-page{
  height: calc(100% - 80px);
  position: relative;
  width: 100%;
  .flow-canvas{
    height: 100%;
    width: 100%;
    border: 1px solid #ccc;
  }
  .flow-panel{
    width: 122px;
    position: absolute;
    left: 0;
    top: 100px;
    z-index: 999;
    background: white;
    border: 1px solid #ccc;
  }
}
</style>