<script setup lang="ts">
import 'vant/lib/index.css';
import { ref, reactive } from 'vue'
import { onMounted } from 'vue';

const top:any = reactive([])
const bottom:any = reactive([])

onMounted(() => {
    ['QQ20240406223246.jpg',
    'QQ20240406225738.jpg'].forEach((e) => {
        top.push(new URL('../../assets/yf/'+e, import.meta.url).href)
    });

    ['QQ20240406223241.jpg','QQ20240406225752.jpg'].forEach((e) => {
        bottom.push(new URL('../../assets/yf/'+e, import.meta.url).href)
    });


})

</script>

<template>
<van-swipe style="height: 50%;" lazy-render>
  <van-swipe-item v-for="image in top" :key="image"  style="text-align: center;">
    <img :src="image" height="100%"/>
  </van-swipe-item>
</van-swipe>
<van-swipe style="height: 50%;" lazy-render>
  <van-swipe-item v-for="image in bottom" :key="image" style="text-align: center;">
    <img :src="image" height="100%"/>
  </van-swipe-item>
</van-swipe>
</template>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 50%;
    text-align: center;
  }
</style>