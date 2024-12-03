import { RectNode, RectNodeModel, h } from '@logicflow/core'

// 自定义节点样式常量
const NODE_CONFIG = {
  width: 157,
  height: 37,
  stroke: 'rgba(102,102,102,0.67)',
  strokeWidth: 0.5,
  fill: 'white'
}

// 自定义图标配置
const ICON_CONFIG = {
  width: 25,
  height: 25,
  viewBox: "0 0 1274 1024",
  path: "M655.807326 287.35973m-223.989415 0a218.879 218.879 0 1 0 447.978829 0 218.879 218.879 0 1 0-447.978829 0ZM1039.955839 895.482975c-0.490184-212.177424-172.287821-384.030443-384.148513-384.030443-211.862739 0-383.660376 171.85302-384.15056 384.030443L1039.955839 895.482975z"
}

class SquareModel extends RectNodeModel {
  setAttributes() {
    const { width, height, stroke, strokeWidth } = NODE_CONFIG
    this.width = width
    this.height = height
    this.style.stroke = stroke
    this.style.strokeWidth = strokeWidth
    this.properties.textAlign = 'left'
  }
}

class SquareView extends RectNode {
  getShape() {
    const { x, y, width, height } = this.props.model
    const { stroke, fill, strokeWidth } = NODE_CONFIG
    
    // 计算矩形位置
    const rectAttrs = {
      x: x - width / 2,
      y: y - height / 2,
      width,
      height,
      stroke,
      fill,
      strokeWidth,
      properties: {
        textAlign: 'left'
      }
    }

    // 计算图标位置
    const iconPosition = {
      x: x - width / 2 + 5,
      y: y - height / 2 + 7
    }

    return h("g", {}, [
      h("rect", { ...rectAttrs }),
      h(
        'svg',
        {
          ...iconPosition,
          ...ICON_CONFIG
        },
        h('path', {
          fill: stroke,
          d: ICON_CONFIG.path
        })
      )
    ])
  }
}

export default {
  type: 'customNodeType',
  view: SquareView,
  model: SquareModel,
}