import pages from "@/pages/indexPages/pages.vue";
import vMdEditor from "@/pages/front/plugins/vMdEditor.vue";
import Index from "@/pages/front/plugins/index.vue";
import butterfly from "@/pages/front/plugins/butterfly/butterfly.vue";
import piniaPersisted from "@/pages/front/plugins/piniaPersisted.vue";


const routes = [
    {
        path: '/plugins',
        name: 'plugins',
        meta: {
            title: 'Plugins'
        },
        title: "plugins",
        component: pages,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                meta: {
                    title: 'index'
                },
                title: "index",
                component: Index
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
