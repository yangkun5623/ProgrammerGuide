## 下载
> https://www.sonatype.com/thanks/repo-oss

## 解压，切换到解压后的bin目录
> D:\HOME\env\nexus-3.75.1-01-win64\nexus-3.75.1-01\bin

## 执行
> .\nexus.exe /run

## 访问主页
> http://localhost:8081/

## 更改运行的IP或者端口
修改```D:\HOME\env\nexus-3.75.1-01-win64\nexus-3.75.1-01\etc\nexus-default.properties```文件
> application-port=8081(新端口)  
> application-host=0.0.0.0

## 安装为window服务
执行管理员cmd
打开路径```D:\HOME\env\nexus-3.75.1-01-win64\nexus-3.75.1-01\bin```
执行命令```nexus.exe /install nexus3```
执行成功后可在window服务中找到nexus3

## 更改密码
初始密码在文件```"D:\HOME\env\nexus-3.75.1-01-win64\sonatype-work\nexus3\admin.password"```中  
在主页右上角点击Sign In，弹出的对话框中输入admin，密码输入上图所示的密码，点Sign In即可完成登录，然后根据提示重置密码。重置密码后，该admin.password就会被删除。  

日志，都记录在D:\nexus-3.36.0-01-win64\nexus3\sonatype-work\nexus3\log文件夹下。启动日志，记录在nexus.log中。

## 创建仓库
创建一个仓库

仓库介绍 访问的仓库类型：  
hosted 宿主仓库：主要用于部署无法从公共仓库获取的构件以及自己或第三方的项目构件；  
proxy 代理仓库：代理公共的远程仓库；    
group 仓库组：Nexus 通过仓库组统一管理多个仓库，这样我们在项目中直接请求仓库组即可请求到仓库组管理的多个仓库。  

就是你可以上传私有的项目到hosted，以及配置proxy以获取第三方的依赖（比如可以配置中央仓库的地址）。前面两个都弄好了之后，在通过group聚合给客户提供统一的访问地址。

