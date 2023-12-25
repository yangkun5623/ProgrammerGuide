<script lang="ts" setup >
import {ref} from "vue";
import router from "@/route/index";

const value = ref('')
const onSearch = () => {
  if (value.value === 'yk961102') {
    router.push({
      name: 'layout'
    })
  }
}
</script>

<template>
<div class="login-layout">
  <div class="login-model">
    <div class="login-title">Login Code</div>
    <div class="login-input">
      <a-input-search
          type="password"
          v-model:value="value"
          enter-button="Go"
          style="width: 200px"
          size="large"
          @search="onSearch"
      />
    </div>
  </div>
</div>
</template>

<style scoped>
.login-layout{
  background: linear-gradient(135deg,#17ead9,#6078ea);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-model{
  height: 230px;
  width: 340px;
  border-radius: 10px;
  background: rgba(242, 242, 242, 0.58);
}
.login-title{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  font-weight: bold;
  font-size: 24px;
}
.login-input{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
