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
  ],
  edges: [
  ],
};

const selectEdge:any = ref(null)

const lf:any = ref(null)

onMounted(() => {
  const clientWidth = window.document.body.clientWidth - 472;
  const clientHeight = window.document.body.clientHeight - 62;
  lf.value = new LogicFlow({
    container: window.document.querySelector('#container'),
    stopScrollGraph: true,
    stopZoomGraph: true,
    width: clientWidth,
    height: clientHeight,
  });
  lf.value.register(cNode)
  lf.value.on('element:click', (data, e, position) => {
  })
  lf.value.on('edge:click', (data, e, position) => {
    selectEdge.value = data
  })
  lf.value.setTheme({
    // 设置连线polyline样式
    polyline: {
      stroke: '#00b899',
      strokeWidth: 1
    },
    // 设置节点内文字样式
    nodeText: {
      fontSize: 13,
      width: 120,
      textAlign: 'left',
      overflowMode: 'ellipsis',
    },
    // 调整选中边框样式
    outline: {
      stroke: '#2F7DEB',
      hover: {
        stroke: '#2F7DEB',
      },
    }
  })
  lf.value.render(data);
  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 46) {  // 监听Del
      console.log(selectEdge)
      // 执行相应的代码
      lf.value.deleteEdge(selectEdge.value.data.id);
    }
  });
})
const nodes: any[] = [
  {
    type: 'customNodeType',
    text: '输入',
    properties: {
      nodeType: 'input',
      icon: 'input',
    }
  },
  {
    type: 'customNodeType',
    text: '输出',
    properties: {
      nodeType: 'output',
      icon: 'input',
    }
  }
]
const mousedown = (event, node) => {
  lf.value.dnd.startDrag(node)
  event.preventDefault()
}

</script>

<template>
  <a-layout class="fit">
    <a-layout-header class="nav">Header</a-layout-header>
    <a-layout class="container">
      <a-layout-sider class="con-left">
        <a-tag class="tag"
               v-for="(node, index) in nodes"
               :key="index"
               @mousedown="mousedown($event, node)"
               draggable="true">
          <svg>
            <use xlink:href="#icon-input" />
          </svg>
          {{node.text}}
        </a-tag>
      </a-layout-sider>
      <a-layout-content class="content">
        <div id="container"></div>
      </a-layout-content>
      <a-layout-sider class="con-right">RSider</a-layout-sider>
    </a-layout>
  </a-layout>

</template>

<style scoped lang="less">
.nav{
  height: 50px;
  border-bottom: rgba(189, 189, 189, 0.46) 1px solid;
  background: white;
  line-height: 50px;
  padding: 0 10px;
}

.container{
  height: calc(100% - 50px);

  .con-left{
    background: white;
    border-right: rgba(189, 189, 189, 0.46) 1px solid;
    padding: 10px;
    display: flex;
    justify-content: center;

    .tag{
      width: 180px;
      height: 40px;
      display: flex;
      align-items: center;
      cursor: move;
      margin: 10px 0;

      svg{
        width: 20px;
        height: 20px;
        fill: currentColor;
        color: #BFBFBF;
        font-size: 20px;
        margin-right: 6px;
        border: 1px silver solid;
      }
    }
  }

  .con-right{
    background: white;
    border-left: rgba(189, 189, 189, 0.46) 1px solid;
    padding: 10px;
  }

  .content{
    background: whitesmoke;
  }
}

/deep/ .lf-graph{
  background: whitesmoke;
}
</style>
