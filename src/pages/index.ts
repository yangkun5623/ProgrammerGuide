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
import plugins from './front/plugins/routes'
import nexusBuildWin from '@/pages/envs/npm/nexus-build-win.vue'
import npmPack from '@/pages/envs/npm/npm-pack.vue'
import npmPublish from '@/pages/envs/npm/npm-publish.vue'
import npmInstall from '@/pages/envs/npm/npm-install.vue'


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
            permission: 'admin',
            title: '环境',
        },
        component: pages,
        redirect: '/git',
        children: [
            {
                path: '/npm',
                name: 'npm',
                meta: {
                    title: 'Npm包制作流程'
                },
                title: "npm",
                component: pages,
                children: [
                    {
                        path: '/nexus-build-win',
                        name: 'nexus-build-win',
                        meta: {
                            title: 'nexus环境搭建win'
                        },
                        title: "nexus环境搭建win",
                        component: nexusBuildWin
                    },
                    {
                        path: '/npm-pack',
                        name: 'npm-pack',
                        meta: {
                            title: 'npm打包流程'
                        },
                        title: "npm打包流程",
                        component: npmPack
                    },
                    {
                        path: '/npm-publish',
                        name: 'npm-publish',
                        meta: {
                            title: 'npm包推送到库'
                        },
                        title: "npm包推送到库",
                        component: npmPublish
                    },                    {
                        path: '/npm-install',
                        name: 'npm-install',
                        meta: {
                            title: 'npm下载包'
                        },
                        title: "npm下载包",
                        component: npmInstall
                    }
                ]
            },
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
            permission: 'admin',
            title: '前端'
        },
        component: commonRouter,
        redirect: '/vueJs',
        children: [
            {
                path: '/technical',
                name: 'technical',
                meta: {
                    title: '技术'
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
            permission: 'admin',
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
