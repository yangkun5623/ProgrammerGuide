# Node安装配置（win11）

## 下载Node

[官网下载Node](https://www.nodejs.com.cn/)

## 直接安装exe

一般默认直接下一步

## 配置环境变量

* 新增系统变量

    变量名：```NODE_PATH```
    
    变量值：```C:\Users\shieru\HOME\ENV\nodejs\node_global\node_modules```

* 在`Path`环境变量中添加
```C:\Users\shieru\HOME\ENV\nodejs```
* 在`Path`环境变量中添加
  ```C:\Users\shieru\HOME\ENV\nodejs\node_global```

## 配置包的全局的安装路径和缓存路径

配置全局的安装路径

```
npm config set prefix "C:\Users\shieru\HOME\ENV\nodejs\node_global"
```

配置包的全局缓存路径

```
npm config set cache "C:\Users\shieru\HOME\ENV\nodejs\node_cache"
```

## 测试安装

全局安装最常用的 express模块 进行测试

```npm install express -g```

## 全局配置淘宝镜像

```npm config set registry https://registry.npm.taobao.org```

> 切回默认库 
```npm config set registry https://registry.npmjs.org```
                    
