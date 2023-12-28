<script lang="ts" setup >
import {ref} from "vue";

const value = ref('')
</script>

<template>
  <h1>nvm 配置</h1>

  <pre>
    <code>$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash</code>
  </pre>

  <pre>
    <code>$ source ~/.bashrc</code>
  </pre>

  <pre>
    <code>$ nvm --version</code>
  </pre>

  <pre>
    <code>$ nvm install stable</code>
  </pre>

  <pre>
    <code>$ node --version</code>
  </pre>

  <pre>
    <code>$ nvm use &lt;version&gt;</code>
  </pre>
</template>

<style scoped>
pre {
  background-color: #f4f4f4;
  padding: 10px;
  overflow: auto;
}

code {
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 14px;
  color: #333;
}

h1 {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
