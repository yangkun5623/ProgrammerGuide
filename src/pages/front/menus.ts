const menus = [
    {
        key: 'vueJs',
        label: "Vue.js示例",
    },
    {
        key: 'typeScript',
        label: "typeScript示例",
    },
    {
        key: 'nuxtJs',
        label: "Nuxt.js示例",
    },
    {
        key: 'piniaJs',
        label: "Pinia示例",
    },
    {
        key: 'plugins',
        label: "插件使用",
        children: [
            {
                key: 'vMdEditor',
                label: "Md编辑器(v-md-editor)",
            },
            {
                key: 'butterfly',
                label: "流程编排butterfly",
            },
        ]
    },
    // {
    //     key: 'envs',
    //     label: "开发工具/开发环境",
    //     children: [
    //         {
    //             key: 'vsCode',
    //             label: "vsCode",
    //         },
    //     ]
    // },

]

export default menus