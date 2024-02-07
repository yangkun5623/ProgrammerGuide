import pages from "@/pages/indexPages/pages.vue";
import git from "@/pages/envs/git.vue";
import nodejs from  "@/pages/envs/nodejs.vue";
import vueJs  from  "@/pages/front/technical/vueJs.vue";
import typeScript  from  "@/pages/front/technical/typeScript.vue";
import pinia  from  "@/pages/front/technical/pinia.vue";
import nuxtJs  from  "@/pages/front/technical/nuxtJs.vue";
import vMdEditor from "@/pages/front/plugins/vMdEditor/vMdEditor.vue";
import oneDrive from "@/pages/other/oneDrive.vue"
import butterfly from "@/pages/front/plugins/butterfly/butterfly.vue";
import home from "@/pages/home.vue";
import gpt from "@/pages/other/gpt.vue";


const routes = [
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        name: 'home',
        title: '主页',
        meta: {
            title: '主页',
            icon: 'HomeOutlined'
        },
        component: home,
    },
    {
        path: '/env',
        name: 'env',
        title: '环境',
        meta: {
            title: '环境',
        },
        component: pages,
        redirect: '/git',
        children: [
            {
                path: '/git',
                name: 'git',
                meta: {
                    title: 'Git'
                },
                title: "Git",
                component: git
            },
            {
                path: '/nodejs',
                name: 'nodejs',
                meta: {
                    title: 'NodeJs'
                },
                title: "NodeJs",
                component: nodejs
            },
        ]
    },
    {
        path: '/Layout',
        name: 'Layout',
        title: '前端',
        meta: {
            title: '前端'
        },
        component: pages,
        redirect: '/vueJs',
        children: [
            {
                path: '/technical',
                name: 'technical',
                meta: {
                    title: 'Technical'
                },
                title: "Technical",
                component: pages,
                children: [
                    {
                        path: '/pinia',
                        name: 'pinia',
                        meta: {
                            title: 'Pinia'
                        },
                        title: "Pinia",
                        component: pinia
                    },
                    {
                        path: '/vueJs',
                        name: 'vueJs',
                        meta: {
                            title: 'Vue.js示例'
                        },
                        title: "Vue.js示例",
                        component: vueJs
                    },
                    {
                        path: '/typeScript',
                        name: 'typeScript',
                        meta: {
                            title: 'typeScript示例'
                        },
                        title: "typeScript示例",
                        component: typeScript
                    },
                    {
                        path: '/nuxt.js',
                        name: 'nuxtJs',
                        title: "Nuxt.js示例",
                        component: nuxtJs
                    },
                ]
            },
            {
                path: '/plugins',
                name: 'plugins',
                meta: {
                    title: 'Plugins'
                },
                title: "plugins",
                component: pages,
                children: [
                    {
                        path: '/vMdEditor',
                        name: 'vMdEditor',
                        meta: {
                            title: 'vMdEditor使用'
                        },
                        title: "vMdEditor使用",
                        component: vMdEditor
                    },
                    {
                        path: '/butterfly',
                        name: 'butterfly',
                        meta: {
                            title: '流程编排'
                        },
                        title: "流程编排",
                        component: butterfly
                    },
                ]
            },
        ],
    },
    {
        path: '/other',
        name: 'other',
        title: '其他',
        meta: {
            title: '其他'
        },
        redirect: '/oneDrive',
        component: pages,
        children: [
            {
                path: '/onedrive',
                name: 'onedrive',
                meta: {
                    title: 'OneDrive同步自定义目录'
                },
                title: "OneDrive同步自定义目录",
                component: oneDrive
            },
        ]
    },
    {
        path: '/gpt',
        name: 'gpt',
        title: 'GPT',
        meta: {
            title: 'GPT',
            icon: 'BulbOutlined'
        },
        component: gpt,
    },
]

export default routes
