import pages from "@/pages/indexPages/pages.vue";
import vMdEditor from "@/pages/front/plugins/vMdEditor.vue";
import Index from "@/pages/front/plugins/index.vue";
import butterfly from "@/pages/front/plugins/butterfly/butterfly.vue";
import piniaPersisted from "@/pages/front/plugins/piniaPersisted.vue";
import logicFlow from "@/pages/front/plugins/logicFlow/logic-flow.vue";


const routes = [
    {
        path: '/plugins',
        name: 'plugins',
        meta: {
            title: '插件'
        },
        title: "插件",
        component: pages,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                meta: {
                    title: '开源插件集合'
                },
                title: "index",
                component: Index
            },
            {
                path: '/logicFlow',
                name: 'logicFlow',
                meta: {
                    title: '工作流图'
                },
                title: "logicFlow",
                component: logicFlow
            },
            {
                path: '/vMdEditor',
                name: 'vMdEditor',
                meta: {
                    title: 'vMdEditor'
                },
                title: "vMdEditor",
                component: vMdEditor
            },
            {
                path: '/butterfly',
                name: 'butterfly',
                meta: {
                    title: 'Butterfly'
                },
                title: "Butterfly",
                component: butterfly
            },
            {
                path: '/piniaPersisted',
                name: 'piniaPersisted',
                meta: {
                    title: 'Pinia持久化存储'
                },
                title: "Pinia持久化存储",
                component: piniaPersisted
            },
        ]
    },
]

export default routes
