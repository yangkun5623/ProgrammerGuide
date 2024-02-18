<script setup lang="ts">
import {computed} from "vue";
interface Props {
  modelValue: string
  height?: string // 编辑器的高度
  placeholder?: string
}
interface EmitEvent {
  (e: 'update:modelValue', params: string): void
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: '请输入内容'
})
const emit = defineEmits<EmitEvent>()
const newValue = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <v-md-editor
      :placeholder="placeholder"
      :disabled-menus="[]"
      v-model="newValue"
      :height="height"></v-md-editor>

</template>

<style scoped>

</style>