<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface Sakura {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
}
const canvas = ref<HTMLCanvasElement | null>(null);
const width = window.innerWidth;
const height = window.innerHeight;
const sakuras: Sakura[] = Array(100).fill(null).map(() => ({
  x: Math.random() * width,
  y: Math.random() * height,
  speedX: Math.random() * 2 - 1,
  speedY: Math.random() * 1 + 1,
}));
let animationId: number | null = null;

const drawSakura = (ctx: CanvasRenderingContext2D, sakura: Sakura) => {
  ctx.beginPath();
  ctx.arc(sakura.x, sakura.y, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'pink';
  ctx.fill();
};

const updateSakura = (sakura: Sakura) => {
  sakura.x += sakura.speedX;
  sakura.y += sakura.speedY;
  if (sakura.x < 0) sakura.x = width;
  if (sakura.x > width) sakura.x = 0;
  if (sakura.y > height) sakura.y = 0;
};

const render = () => {
  const ctx = canvas.value?.getContext('2d');
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  for (const sakura of sakuras) {
    drawSakura(ctx, sakura);
    updateSakura(sakura);
  }
  animationId = requestAnimationFrame(render);
};

const toggleAnimation = () => {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  } else {
    render();
  }
};

onMounted(() => {
  render();
});

onBeforeUnmount(() => {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
  }
});
</script>
<template>
  <div style="height: calc(100% - 80px);width: 100px">
    <canvas ref="canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
