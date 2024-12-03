import { RectNode, RectNodeModel, h } from '@logicflow/core'
import {cloneDeep} from "lodash";
import {getSvgAst} from "@/pages/front/plugins/logicFlow/svgIcon";

// 定义属性接口
interface NodeAttributes {
  x: number;
  y: number;
  width: number;
  height: number;
  stroke: string;
  fill: string;
  strokeWidth: number;
  properties: {
    textAlign: string;
  };
}

// 自定义节点的 model
class SquareModel extends RectNodeModel {
    setAttributes(): void {
        const STROKE_COLOR = 'rgba(102,102,102,0.67)';
        this.width = 157;
        this.height = 37;
        this.style.stroke = STROKE_COLOR;
        this.style.strokeWidth = 0.5;
        this.properties.textAlign = 'left';
    }

    getTextStyle(): Record<string, any> {
        const { nodeText } = this.graphModel.theme;
        const { textStyle = {} } = this.properties;
        return {
            ...cloneDeep(nodeText),
            ...cloneDeep(textStyle),
            x: this.x + 12,
        };
    }
}

class SquareView extends RectNode {
    getShape(): any {
        const { x, y, width, height, properties } = this.props.model;
        const attrs: NodeAttributes = {
            x: x - width / 2,
            y: y - height / 2,
            width,
            height,
            stroke: 'rgba(189,189,189,0.46)',
            fill: 'white',
            strokeWidth: 0.5,
            properties: {
                textAlign: 'left',
            },
        };

        const createSvgElement = (d: any): any => {
            const children = d.children ? d.children.map(createSvgElement) : [];
            return h(d.name, { ...d.attribs }, children);
        };

        return h('g', {}, [
            h('rect', { ...attrs }),
            h(
                'svg',
                {
                    x: x - width / 2 + 5,
                    y: y - height / 2 + 7,
                    width: 25,
                    height: 25,
                    viewBox: '0 0 1274 1024',
                },
                createSvgElement(getSvgAst(properties.icon))
            ),
        ]);
    }
}

export default {
  type: 'customNodeType',
  view: SquareView,
  model: SquareModel,
}
