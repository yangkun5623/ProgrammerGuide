import $ from 'jquery';
import {Node} from 'butterfly-dag';

import './node.less';
class BaseNode extends Node {
    constructor(opts) {
        super(opts);
        this.options = opts;
        this._endpoint = [];
        this._isInNode = false;
        this._isInEndpoint = false;
    }

    draw = (opts) => {
        const container = $('<div class="flow-base-node"></div>')
            .css('top', opts.top)
            .css('left', opts.left)
            .attr('id', opts.id);

        const logoContainer = $(`<div class="logo-containe"><i class="iconfont ${opts.options.iconType}"><i/></div>`);

        const content = $('<div class="text"></div>').text(opts.options.label);

        container.append(logoContainer).append(content);

        container.on('click', (e) => {
            $(this.dom).find('.logo-toolbar').addClass('show');
        });
        container.on('blur', (e) => {
            $(this.dom).find('.logo-toolbar').removeClass('show');
        });

        this._createIcon(container[0]);

        setTimeout(() => {
            this._addEndpoint();
        });

        return container[0];
    }
    focus = () => {
        $(this.dom).find('.logo-toolbar').addClass('show');
    }
    unFocus = () => {
        $(this.dom).find('.logo-toolbar').removeClass('show');
    }
    _createIcon(dom = this.dom) {
        let logoContainer = $('<div class="logo-toolbar"></div>');
        const boxContainer = $('<div class="box-container"></div>');
        boxContainer.append($(`<div class="box" name="toolmenu"><i class="iconfont icon-yunfuwuqi"></i></div>`));
        boxContainer.append($('<div class="box"><i class="iconfont icon-webicon310"></i></div>'));
        boxContainer.append($('<div class="box"><i class="iconfont icon-renyuanguanli"></i></div>'));

        boxContainer.on('click', (res) => {
            console.log(111, this.options)
        })
        logoContainer.append(boxContainer);
        $(dom).append(logoContainer);
    }
    _addEndpoint() {}
}

export default BaseNode;
