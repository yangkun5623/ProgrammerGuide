import pages from "@/pages/indexPages/pages.vue";
import commonRouter from "@/pages/indexPages/commonRouter.vue";
import git from "@/pages/envs/git.vue";
import nodejs from  "@/pages/envs/nodejs.vue";
import vueJs  from  "@/pages/front/technical/vueJs.vue";
import typeScript  from  "@/pages/front/technical/typeScript.vue";
import pinia  from  "@/pages/front/technical/pinia.vue";
import nuxtJs  from  "@/pages/front/technical/nuxtJs.vue";
import oneDrive from "@/pages/other/oneDrive.vue"
import home from "@/pages/home.vue";
import gpt from "@/pages/other/gpt.vue";
import pal from "@/pages/other/games/pal.vue";
import canvas from "@/pages/front/technical/canvas.vue";
import yfVue from "./other/yf.vue";
import plugins from './front/plugins/routes'


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
                    title: 'Node'
                },
                title: "Node",
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
        component: commonRouter,
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
                        path: '/canvas',
                        name: 'canvas',
                        meta: {
                            title: 'Canvas'
                        },
                        title: "Canvas",
                        component: canvas
                    },
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
                        title: "Vue.js",
                        component: vueJs
                    },
                    {
                        path: '/typeScript',
                        name: 'typeScript',
                        title: "TypeScript",
                        component: typeScript
                    },
                    {
                        path: '/nuxt.js',
                        name: 'nuxtJs',
                        title: "Nuxt.js",
                        component: nuxtJs
                    },
                ]
            },
            ...plugins,
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
        component: commonRouter,
        children: [
            {
                path: '/games',
                name: 'games',
                title: '游戏',
                meta: {
                    title: '游戏',
                },
                component: pages,
                redirect: '/git',
                children: [
                    {
                        path: '/pal',
                        name: 'pal',
                        meta: {
                            title: '幻兽帕鲁'
                        },
                        title: "幻兽帕鲁",
                        component: pal
                    },
                ]
            },
            {
                path: '/onedrive',
                name: 'onedrive',
                meta: {
                    title: 'OneDrive同步自定义目录'
                },
                title: "OneDrive同步自定义目录",
                component: oneDrive
            }
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
