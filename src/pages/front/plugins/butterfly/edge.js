import {Edge} from 'butterfly-dag';
import {createCustomElement} from "@/pages/front/plugins/butterfly/util.js";

class BaseEdge extends Edge {
    draw(obj) {
        let path = super.draw(obj);
        if (this.options.color) {
            path.classList.add(this.options.color)
        }
        return path;
    }

    drawArrow(isShow) {
        let dom = super.drawArrow(isShow);
        if (this.options.color) {
            dom.classList.add(this.options.color)
        }
        return dom;
    }

    drawLabel(text) {
        let dom = null;
        if (text) {
            dom = createCustomElement('i', {
                class: 'newIconfont iconjiandao-tianchong label ' + text
            })
        }
        return dom;
    }
}

export default BaseEdge;
