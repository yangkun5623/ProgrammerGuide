import { RectNode, RectNodeModel, h } from '@logicflow/core'

// 自定义节点的 model
class SquareModel extends RectNodeModel {
  setAttributes() {
    this.width = 157;
    this.height = 37;
    this.style.stroke = 'rgba(102,102,102,0.67)'
    this.style.strokeWidth = 0.5
    this.properties.textAlign = 'left'
  }
}
class SquareView extends RectNode {
  getShape() {
    // 通过 getAttributes 获取 model 中的属性
    const { x, y, width, height, fill, stroke, strokeWidth } = this.props.model;
    const attrs = {
      // rect 标签的 x，y 对应的是图形的左上角
      // 所以我们要将矩形的中心移动到 x，y
      x: x - width / 2,
      y: y - height / 2,
      width,
      height,
      stroke: 'rgba(102,102,102,0.67)',
      fill: 'white',
      strokeWidth: 0.5,
      properties: {
        textAlign: 'left'
      }
    }
    // getShape 的返回值是一个通过 h 方法创建的 svg 元素
    return h("g", {}, [
        h("rect", { ...attrs }),
        h(
          'svg',
          {
            x: x - width / 2 + 5,
            y: y - height / 2 + 7,
            width: 25,
            height: 25,
            viewBox: "0 0 1274 1024",
          },
          h(
            'path',
            {
              fill: stroke,
              d:
                "M655.807326 287.35973m-223.989415 0a218.879 218.879 0 1 0 447.978829 0 218.879 218.879 0 1 0-447.978829 0ZM1039.955839 895.482975c-0.490184-212.177424-172.287821-384.030443-384.148513-384.030443-211.862739 0-383.660376 171.85302-384.15056 384.030443L1039.955839 895.482975z",
            }
          )
        )
      ]
    );
  }
}


export default {
  type: 'customNodeType',
  view: SquareView,
  model: SquareModel,
}