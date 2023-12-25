import Worktable from "@/work/worktable/worktable.vue";
import Gpt from "@/work/gpt/gpt.vue";

const routes = [
    {
        path: '/worktable',
        name: 'worktable',
        component: Worktable
    },
    {
        path: '/gpt',
        name: 'gpt',
        component: Gpt
    }
]

export default routes
