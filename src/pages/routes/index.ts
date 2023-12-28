import Worktable from "@/pages/worktable/worktable.vue";
import Gpt from "@/pages/gpt/gpt.vue";
import frontLayout from "@/pages/front/frontLayout.vue";
import Sakura from "@/pages/sakura/sakura.vue";
import frontRoutes from "@/pages/front/routes";


const routes = [
    {
        path: '/worktable',
        name: 'worktable',
        title: '工作台',
        component: Worktable
    },
    {
        path: '/sakura',
        name: 'sakura',
        title: '樱花',
        component: Sakura
    },
    {
        path: '/frontLayout',
        name: 'frontLayout',
        title: '前端',
        component: frontLayout,
        children: frontRoutes,
        redirect: 'vueDemo',
    },
    {
        path: '/gpt',
        name: 'gpt',
        title: 'GPT',
        component: Gpt
    },

]

export default routes
