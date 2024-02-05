import {Canvas} from 'butterfly-dag';

const EVENTTYPE = {
    NODECLICK: 'node:click',
    CANVASCLICK: 'canvas:click'
};
class IndustryCanvas extends Canvas {
    constructor(...args) {
        super(...args);
        this.listenEventProxy();
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
    on () {
        return super.on.apply(this, arguments);
    }
    draw() {
        return super.draw.apply(this, arguments);
    }
}

export default IndustryCanvas;
