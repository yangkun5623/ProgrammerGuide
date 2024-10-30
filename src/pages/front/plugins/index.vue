<script lang="ts" setup>
import { ref, watch } from 'vue';

const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref(['1']);

watch(activeKey, val => {
  console.log(val);
});
</script>
<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel key="1" header="流程图插件">
      <a-space >
        <a-typography-link href="https://vue-diagrams.js.org" target="_blank">
          Vue-diagrams
        </a-typography-link>
        <a-typography-link href="https://oxoyo.co/X-Flowchart-Vue" target="_blank">
          X-Flowchart
        </a-typography-link>
        <a-typography-link href="https://github.com/alibaba/butterfly/tree/master?tab=readme-ov-file" target="_blank">
          Butterfly
        </a-typography-link>
        <a-typography-link href="https://g6.antv.vision/manual/introduction" target="_blank">
          Antv/G6
        </a-typography-link>
      </a-space>
    </a-collapse-panel>
  </a-collapse>
</template>


