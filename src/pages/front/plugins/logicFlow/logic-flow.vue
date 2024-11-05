<script setup lang="ts">
import { LogicFlow } from '@logicflow/core'
import {ref} from 'vue'
import '@logicflow/core/dist/index.css';
import { onMounted } from 'vue'
import cNode from './cNode'
const data = {
  // 节点
  nodes: [
    {
      id: 50,
      type: 'customNodeType',
      x: 100,
      y: 150,
      text: {
        value: '矩形节点',
        x: 80,
        y: 150,
      },
    },
    {
      id: 21,
      type: 'customNodeType',
      x: 300,
      y: 150,
      text: {
        value: '矩形节点',
        x: 280,
        y: 150,
      },
    },
  ],
  edges: [
    {
      type: 'polyline',
      sourceNodeId: 50,
      targetNodeId: 21,
    },
  ],
};

const selectEdge:any = ref(null)

onMounted(() => {
  const clientWidth = window.document.body.clientWidth - 72;
  const clientHeight = window.document.body.clientHeight - 12;
  const lf:any = new LogicFlow({
    container: window.document.querySelector('#container'),
    stopScrollGraph: true,
    stopZoomGraph: true,
    width: clientWidth,
    height: clientHeight
  });
  lf.register(cNode)
  lf.on('element:click', (data, e, position) => {
  })
  lf.on('edge:click', (data, e, position) => {
    selectEdge.value = data
  })

  lf.render(data);
  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 46) {  // 监听Del
      console.log(selectEdge)
      // 执行相应的代码
      lf.deleteEdge(selectEdge.value.data.id);
    }
  });
})

</script>

<template>
  <div id="container"></div>
</template>

<style scoped>

</style>