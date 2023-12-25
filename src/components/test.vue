<script setup>
import axios from "axios";
console.log('试试')

const x = () => {
  axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ],
  }, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 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',
    },
    timeout: 5000
  })
      .then(response => {
        // 请求成功时的处理
        console.log(response.data);
      })
      .catch(error => {
        // 请求失败时的处理
        console.error(error);
      });
}
</script>

<template>
  <div>
    <a-button @click="x">发送消息</a-button>
    <a-space wrap>
      <a-button type="primary">Primary Button</a-button>
      <a-button>Default Button</a-button>
      <a-button type="dashed">Dashed Button</a-button>
      <a-button type="text">Text Button</a-button>
      <a-button type="link">Link Button</a-button>
    </a-space>
  </div>
</template>

<style scoped>

</style>