import Worktable from "@/work/pages/worktable/worktable.vue";
import Gpt from "@/work/pages/gpt/gpt.vue";
import front from "@/work/pages/front/front.vue"

const routes = [
    {
        path: '/worktable',
        name: 'worktable',
        title: '工作台',
        component: Worktable
    },
    {
        path: '/front',
        name: 'front',
        title: '前端',
        component: front
    },
    {
        path: '/gpt',
        name: 'gpt',
        title: 'GPT',
        component: Gpt
    },

]

export default routes
