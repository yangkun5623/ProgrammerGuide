# Git安装配置（win11）



## 下载Git

[官网下载Git](https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe)



## 直接安装exe

一般默认直接下一步

## 配置邮箱和名称



打开命令行工具


配置邮箱email，执行

``` 
git config --global user.email 'xxx@xx.com'
```

配置名称name，执行

``` 
git config --global user.name 'xxxx'
```

查看是否配置成功

``` 
git config --global --list
```



## 生成SSH密钥
生成密钥命令
```
ssh-keygen -t rsa
```

密钥文件目录

```
C:\Users\xxxx\.ssh\id_rsa.pub
```



## 添加SSH密钥到GitHub

打开GitHub，点击头像，选择Settings，选择SSH and

GPG keys，点击New SSH key，将id_rsa.pub文件中的内容复制到Key中，Title中可以任意填写，点击Add SSH key



## 测试SSH连接

在命令行中输入

```
ssh -T git@github.com

```






