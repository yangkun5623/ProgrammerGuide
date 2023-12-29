import Worktable from "@/pages/worktable/worktable.vue";
import Gpt from "@/pages/gpt/gpt.vue";
import frontLayout from "@/pages/front/frontLayout.vue";
import vueDemo from "@/pages/front/part/vueDemo.vue";

const routes = [
    {
        path: '/worktable',
        name: 'worktable',
        title: '工作台',
        component: Worktable
    },
    {
        path: '/frontLayout',
        name: 'frontLayout',
        title: '前端',
        component: frontLayout,
        children: [
            {
                path: '/vueDemo',
                name: 'vueDemo',
                title: "Vue.js示例",
                component: vueDemo
            }
        ],
        redirect: '/vueDemo',
    },
    {
        path: '/gpt',
        name: 'gpt',
        title: 'GPT',
        component: Gpt
    },

]

export default routes
