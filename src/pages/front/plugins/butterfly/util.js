const createCustomElement = function (tag, opts) {
    const el = document.createElement(tag);
    if (opts.class) {
        opts.class.split(' ').forEach(e => {
            el.classList.add(e);
        })
    }
    if (opts.style) {
        Object.keys(opts.style).forEach(s => {
            el.style.setProperty(s, opts.style[s]); // 设置css变量
        })
    }
    if (opts.attrs) {
        Object.keys(opts.attrs).forEach(attr => {
            el.setAttribute(attr, opts.attrs[attr]);
        })
    }
    if (opts.children) {
        opts.children.forEach((child) => {
            el.appendChild(child);
        });
    }
    if (opts.text) {
        el.textContent = opts.text;
    }
    if (opts.name) {
        el.setAttribute('name', opts.name);
    }
    return el
}

function parseDom(arg) {
    let objE = document.createElement("div");
    objE.innerHTML = arg;
    return  objE.childNodes;
}

export {
    createCustomElement,
    parseDom
}