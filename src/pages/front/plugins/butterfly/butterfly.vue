<script setup lang="ts">
// 如果您引用的项目使用了jquery和lodash，为了缩小项目的体积，我们建议：
import Canvas from './canvas'
import 'butterfly-dag/dist/index.css';
import {onMounted, ref} from "vue";
import mockData from "@/pages/front/plugins/butterfly/data";
import panelPlugins from 'butterfly-dag/plugins/panel/dist';
import 'butterfly-dag/plugins/panel/dist/index.css';
import './iconfont.less'
import './index.less'
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
    <div className='operate-bar'>
      <div className='operate-bar-title'>属性配置</div>
      <div className='operate-item'>
        <div className='operate-node'>增删节点:</div>
        <a-button  >添加节点</a-button>
        <a-button >删除节点</a-button>
      </div>
      <div className='operate-item'>
        <div className='operate-rankdir'>布局方向:</div>
        <a-select defaultValue="TB" style="width: 100%" >
        <Option value="TB">TB</Option>
        <Option value="BT">BT</Option>
        <Option value="LR">LR</Option>
        <Option value="RL">RL</Option>
        </a-select>
      </div>
      <div className='operate-item'>
        <div className='operate-align'>对齐方向:</div>
        <a-select defaultValue='默认' style="width: 100%" >
        <Option value={undefined}>默认</Option>
        <Option value="UL">UL</Option>
        <Option value="UR">UR</Option>
        <Option value="DL">DL</Option>
        <Option value="DR">DR</Option>
        </a-select>
      </div>
      <div className='operate-item'>
        <div className='operate-nodesep'>水平间距:</div>
        <a-slider defaultValue={40}   />
      </div>
      <div className='operate-item'>
        <div className='operate-ranksep'>层间距:</div>
        <a-slider defaultValue={40} />
      </div>
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