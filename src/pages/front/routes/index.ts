import vueDemo from "@/pages/front/part/vueDemo.vue";

export default [
    {
        path: '/vueDemo',
        name: 'vueDemo',
        title: "Vue.js示例",
        component: vueDemo
    },
    {
        path: '/',
        redirect: 'vueDemo'
    }
]