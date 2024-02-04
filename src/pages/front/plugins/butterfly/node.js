import {Node} from 'butterfly-dag';

import './node.less';
import {createCustomElement, parseDom} from "@/pages/front/plugins/butterfly/util.js";
class BaseNode extends Node {
    constructor(opts) {
        super(opts);
        this.options = opts;
        this._endpoint = [];
        this._isInNode = false;
        this._isInEndpoint = false;
    }

    draw = (opts) => {

        const container = createCustomElement('div', {
            class: 'flow-base-node',
            style: {
                top: opts.top + 'px',
                left: opts.left + 'px',
            },
            attrs: {
                id: opts.id,
            },
        })

        container.appendChild(createCustomElement('div', {
            class: 'logo-containe',
            children: [
                createCustomElement('i', {
                    class: `iconfont ${opts.options.iconType}`
                })
            ]
        }))
        container.appendChild(createCustomElement('div', {
            class: 'text',
            text: opts.options.label,
        }))

        this._createIcon(container);

        setTimeout(() => {
            this._addEndpoint();
        });

        return container;
    }
    focus = () => {
        this.dom.querySelector('.logo-toolbar').classList.add('show')
    }
    unFocus = () => {
        this.dom.querySelector('.logo-toolbar').classList.remove('show')
    }
    _createIcon(dom = this.dom) {
        let logoContainer = createCustomElement('div',{
            class: 'logo-toolbar',
        })
        const boxContainer = createCustomElement('div',{
            class: 'box-container',
        })
        boxContainer.appendChild(createCustomElement('div', {
            class: 'box',
            attrs: {
                name: 'toolmenu',
            },
            children: [
                createCustomElement('i', {
                    class: 'iconfont icon-yunfuwuqi'
                })
            ]
        })),
        boxContainer.appendChild(createCustomElement('div', {
                class: 'box',
                children: [
                    createCustomElement('i', {
                        class: 'iconfont icon-webicon310'
                    })
                ]
        }   )),
        boxContainer.appendChild(createCustomElement('div', {
                class: 'box',
                children: [
                    createCustomElement('i', {
                        class: 'iconfont icon-renyuanguanli'
                    })
                ]
        }))

        boxContainer.addEventListener('click', (res) => {
            console.log(111, this.options)
        })
        logoContainer.append(boxContainer);
        dom.appendChild(logoContainer)
    }
    _addEndpoint() {}
}

export default BaseNode;
