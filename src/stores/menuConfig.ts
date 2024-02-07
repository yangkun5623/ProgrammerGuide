import { ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * 菜单配置
 */
export const useMenuConfigStore = defineStore('menuConfig', () => {
    // 菜单是否折叠
    const collapsed = ref(true)
    // 主题色
    const theme = ref('light')

    const selectedKeys = ref(['home'])
    const openKeys = ref([])
    const preOpenKeys = ref([])

    // 切换菜单折叠
    const  toggleCollapsed = () => {
        collapsed.value = !collapsed.value
        if (collapsed.value) {
            preOpenKeys.value = openKeys.value;
        } else {
            openKeys.value = preOpenKeys.value;
        }
    }

    return {
        collapsed,
        toggleCollapsed,
        theme,
        selectedKeys,
        preOpenKeys,
        openKeys
    }
}, {persist: true})

