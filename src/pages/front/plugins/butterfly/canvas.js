import {Canvas} from 'butterfly-dag';

const EVENTTYPE = {
    NODECLICK: 'node:click',
    CANVASCLICK: 'canvas:click'
};
class IndustryCanvas extends Canvas {
    constructor(...args) {
        super(...args);
        this.listenEventProxy();
        this.d = Object.getPrototypeOf(Object.getPrototypeOf(this))
    }
    listenEventProxy() {
        this.on('events', (data) => {
            if (data.type.indexOf(EVENTTYPE.NODECLICK) !== -1) {
                // 取消所有节点focus
                this._unFocusAllNode();
                let node = data.node;
                node.focus();
            } else if (data.type.indexOf(EVENTTYPE.CANVASCLICK) !== -1) {
                // 取消所有节点focus
                this._unFocusAllNode();
            }
        });
    }
    _unFocusAllNode() {
        this.nodes.forEach((node) => {
            node.unFocus();
        });
    }
    draw (...args) {
        this.d.draw(...args)
    }
    on(...args) {
        this.d.on(...args)
    }
}

export default IndustryCanvas;
