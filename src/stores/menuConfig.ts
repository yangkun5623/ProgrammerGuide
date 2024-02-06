import { ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * 菜单配置
 */
export const useMenuConfigStore = defineStore('menuConfig', () => {
    // 菜单是否折叠
    const collapsed = ref(false)
    // 主题色
    const theme = ref('light')

    // 切换菜单折叠
    const  toggleCollapsed = () => {
        collapsed.value = !collapsed.value
    }

    return {
        collapsed,
        toggleCollapsed,
        theme
    }
})