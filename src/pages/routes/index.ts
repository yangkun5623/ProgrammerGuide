import Worktable from "@/pages/worktable/worktable.vue";
import frontLayout from "@/pages/front/frontLayout.vue";
import vueJs from "@/pages/front/part/vueJs.vue";
import nuxtJs from "@/pages/front/part/nuxtJs.vue";
import typeScript from "@/pages/front/part/typeScript.vue";
import piniaJs from "@/pages/front/part/piniaJs.vue";
import vMdEditor from "@/pages/front/part/plugins/vMdEditor.vue";

const routes = [
    {
        path: '/frontLayout',
        name: 'frontLayout',
        title: '前端',
        component: frontLayout,
        redirect: '/vueJs',
        children: [
            {
                path: '/vueJs',
                name: 'vueJs',
                title: "Vue.js示例",
                component: vueJs
            },
            {
                path: '/typeScript',
                name: 'typeScript',
                title: "typeScript示例",
                component: typeScript
            },
            {
                path: '/piniaJs',
                name: 'piniaJs',
                title: "piniaJs示例",
                component: piniaJs
            },
            {
                path: '/nuxt.js',
                name: 'nuxtJs',
                title: "Nuxt.js示例",
                component: nuxtJs
            },
            {
                path: '/vMdEditor',
                name: 'vMdEditor',
                title: "vMdEditor使用",
                component: vMdEditor
            }
        ],
    },
    {
        path: '/worktable',
        name: 'worktable',
        title: '工作台',
        component: Worktable
    },
]

export default routes
