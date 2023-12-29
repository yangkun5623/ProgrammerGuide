import type { App  } from 'vue'

import VueMarkdownEditor from './mdEditor'

const pluginList = [
    VueMarkdownEditor
]

const plugins = {
    install (app: App<Element>) {
        Object.entries(pluginList).forEach(([key, value]) =>{
            app.use(value)
        })
    }
}

export default plugins