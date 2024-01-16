import {Canvas} from 'butterfly-dag';

const EVENTTYPE = {
    NODECLICK: 'node:click',
    CANVASCLICK: 'canvas:click'
};

class IndustryCanvas extends Canvas {
    constructor(...args:any[]) {
        super(...args);
        this.listenEventProxy();
    }
    listenEventProxy() {
        this.on('events', (data:any) => {
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
        this.nodes.forEach((node:any) => {
            node.unFocus();
        });
    }
}

export default IndustryCanvas;
