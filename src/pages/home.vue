<template>
  <a-typography style="background: white;padding: 6px">
    <a-typography-title>网页工具</a-typography-title>
    <a-typography-title :level="3">在线工具</a-typography-title>
    <a-typography-paragraph>
      <a-space>
        <template #split>
          <a-divider type="vertical" />
        </template>
        <a-typography-link href="https://www.aigei.com/bgremover" target="_blank">
          在线图片去底工具
        </a-typography-link>
        <a-typography-link href="https://tool.lu/timestamp/" target="_blank">
          时间戳转换工具
        </a-typography-link>
        <a-typography-link href="https://datav.aliyun.com/portal/school/atlas/area_selector" target="_blank">
          数据可视化工具
        </a-typography-link>
        <a-typography-link href="https://astexplorer.net/" target="_blank">
          AST分析工具
        </a-typography-link>
        <a-typography-link href="https://unpkg.com/" target="_blank">
          UNPKG
        </a-typography-link>
        <a-typography-link href="http://www.codebaoku.com/" target="_blank">
          编程宝库
        </a-typography-link>
      </a-space>
    </a-typography-paragraph>
    <a-typography-title :level="3">在线工具合集</a-typography-title>
    <a-typography-paragraph>
      <a-space>
        <template #split>
          <a-divider type="vertical" />
        </template>
        <a-typography-link href="https://uutool.cn/type/new" target="_blank">
          UU在线工具
        </a-typography-link>
        <a-typography-link href="https://ss.netnr.com/" target="_blank">
          Netnr
        </a-typography-link>
      </a-space>
    </a-typography-paragraph>
  </a-typography>
</template>
<script lang="ts" setup>
</script>

