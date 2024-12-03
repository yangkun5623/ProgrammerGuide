<script setup lang="ts">
import { LogicFlow } from '@logicflow/core'
import { ref } from 'vue'
import '@logicflow/core/dist/index.css'
import { onMounted } from 'vue'
import cNode from './cNode'

// 定义节点类型接口
interface NodeData {
  id: number
  type: string
  x: number
  y: number
  text: {
    value: string
    x: number
    y: number
  }
}

// 定义边类型接口
interface EdgeData {
  type: string
  sourceNodeId: number
  targetNodeId: number
}

// 定义图数据接口
interface GraphData {
  nodes: NodeData[]
  edges: EdgeData[]
}

// 定义事件数据接口
interface EdgeEventData {
  data: {
    id: string
    type: string
    sourceNodeId: number
    targetNodeId: number
  }
}

const data: GraphData = {
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

const selectEdge = ref<EdgeEventData | null>(null)

onMounted(() => {
  const clientWidth = window.document.body.clientWidth - 72
  const clientHeight = window.document.body.clientHeight - 12
  
  const lf = new LogicFlow({
    container: window.document.querySelector('#container') as HTMLElement,
    stopScrollGraph: true,
    stopZoomGraph: true,
    width: clientWidth,
    height: clientHeight
  })
  
  lf.register(cNode)
  
  lf.on('element:click', (data: any, e: MouseEvent, position: { x: number, y: number }) => {
  })
  
  lf.on('edge:click', (data: EdgeEventData, e: MouseEvent, position: { x: number, y: number }) => {
    selectEdge.value = data
  })

  lf.render(data);
  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 46) {  // 监听Del
      console.log(selectEdge)
      // 添加空值检查
      if (selectEdge.value) {
        lf.deleteEdge(selectEdge.value.data.id);
      }
    }
  });
})

</script>

<template>
  <div id="container"></div>
</template>

<style scoped>

</style>