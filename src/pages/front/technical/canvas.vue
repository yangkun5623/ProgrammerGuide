<script setup lang="ts">
// https://zhuanlan.zhihu.com/p/649942949
import {onMounted, ref} from "vue";
import { SyncOutlined }  from '@ant-design/icons-vue';
const card = ref()
const draw = () => {
  const canvas =  document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas.getContext){
    return
  }
  const ctx = canvas.getContext('2d');
  ctx!.fillStyle = "red";
  ctx!.fillRect(10,10,55,50)
  ctx!.fillStyle = 'blue'
  ctx!.fillRect(100,100,55,50)

  ctx!.strokeRect(200,200,55,50)

  const img = new Image()
  img.src = '@/assets/avatar.jpg'
  ctx!.drawImage(img, 0, 0)
}
onMounted(() => {
  // draw()
})
</script>

<template>
  <a-card ref="card" class="fit center">
    <canvas id="canvas" width="1000" height="600" style="border: black 1px solid">
    </canvas>
  </a-card>
  <a-float-button shape="square" @click="draw" :style="{right: '25px', bottom: '100px'}">
    <template #icon>
      <SyncOutlined />
    </template>
  </a-float-button>
</template>

<style scoped>
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>