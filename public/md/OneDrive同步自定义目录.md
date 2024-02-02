# OneDrive同步任意文件夹


## 已知本地需备份文件夹路径
```
C:\Users\shieru\AppData\Local\Pal\Saved\SaveGames\76561198972293616\827AEA284EC748E66227C3AC3773DA88
```

## Onedrive中同步的文件夹 
```
C:\Users\shieru\OneDrive\文档\game\pal\827AEA284EC748E66227C3AC3773DA88
```


## 管理员cmd执行
```
mklink/d C:\Users\shieru\OneDrive\文档\game\pal\827AEA284EC748E66227C3AC3773DA88 C:\Users\shieru\AppData\Local\Pal\Saved\SaveGames\76561198972293616\827AEA284EC748E66227C3AC3773DA88
```

>备注： 827AEA284EC748E66227C3AC3773DA88 OneDrive中最后一级文件夹自动生成。也就是执行命令前Onedrive中827AEA284EC748E66227C3AC3773DA88 目录是不存在的，只有上一级


## 成功提示
>为 C:\Users\shieru\OneDrive\文档\game\pal\827AEA284EC748E66227C3AC3773DA88 <<===>>C:\Users\shieru\AppData\Local\Pal\Saved\SaveGames\76561198972293616\827AEA284EC748E66227C3AC3773DA88 创建的符号链接 