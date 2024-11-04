import { ref } from 'vue'
import { defineStore } from 'pinia'

export const sysConfigStore = defineStore('sys', () => {
  // 菜单是否折叠
  const loginCode = ref('')

  return {
    loginCode
  }
}, {persist: true})

