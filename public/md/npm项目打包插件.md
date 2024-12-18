## 安装@vue/cli
```npm install -g @vue/cli```

## 构建项目
```vue create my-vue2-app ```

## 创建vue组件
在components目录下新建my-comp.vue组件
```
<script>
export default {
  name: "my-comp"
}
</script>

<template>
<div>
  我是一个测试组件
</div>
</template>

<style scoped>

</style>
```

## 创建index.js,导出组件
```aiignore
import myComp from "./my-comp.vue"; // 引入组件

const component = { // 挂载组件
    install(Vue){
        Vue.component(myComp.name, myComp);
    }
}

if (typeof window !== "undefined" && window.Vue) { // 判断环境
    window.Vue.use(component);
}

export default component;
```

## 修改package.json组件信息
```aiignore
{
    "name": "my-comp", // 组件名称
    "version":"0.1.0", // 版本
    "description": "my test comp", // 组件描述
    "license": "MIT", // 授权
    "private": false, // 是否公共组件
    "main": "src/components/index.js", // 入口js，配置上面的js
    "files": [ // 打包后保留的文件内容
        "dist",
        "src/components"
    ]
}
```

## 新增配置webpack.config.js文件
```aiignore
const path = require('path');

module.exports = {
    entry: './src/components/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出路径
        publicPath: '/dist/',
        filename: 'index.min.js',
        library: 'my-comp',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    }
};

```

## 执行打包命令
```
npm pack
```

## 使用包
将打包出来的.tgz文件放到项目根目录

然后 npm install ./xxx.tgz
