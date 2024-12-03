import { RectNode, RectNodeModel, h } from '@logicflow/core'
import {cloneDeep} from "lodash";
import {getSvgAst} from "@/pages/front/plugins/logicFlow/svgIcon";

// 自定义节点的 model
class SquareModel extends RectNodeModel {
    setAttributes() {
        this.width = 157;
        this.height = 37;
        this.style.stroke = 'rgba(102,102,102,0.67)'
        this.style.strokeWidth = 0.5
        this.properties.textAlign = 'left'
    }

    getTextStyle() {
        // 透传 nodeText
        const { nodeText } = this.graphModel.theme
        const { textStyle = {} } = this.properties
        return {
            ...cloneDeep(nodeText),
            ...cloneDeep(textStyle),
            x: this.x + 12
        }
    }
}

class SquareView extends RectNode {
  getShape() {
    // 通过 getAttributes 获取 model 中的属性
    const { x, y, width, height, fill, stroke, strokeWidth, properties } = this.props.model;
    const attrs = {
      // rect 标签的 x，y 对应的是图形的左上角
      // 所以我们要将矩形的中心移动到 x，y
      x: x - width / 2,
      y: y - height / 2,
      width,
      height,
      stroke: 'rgba(189,189,189,0.46)',
      fill: 'white',
      strokeWidth: 0.5,
      properties: {
        textAlign: 'left',
      }
    }
    const _h = (d) => {
        console.log('d', d)
      const childs = []
      if (d.children) {
          d.children.forEach(e => {
              childs.push(_h(e))
          })
      }
      return h(d.name, {...d.attribs}, childs)
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
            _h(getSvgAst(properties.icon))
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
