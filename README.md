# im-vue

## 安装项目依赖
```
npm install
```

### 如果后端程序不是运行在本地且SpringBoot的端口不是8088以及Netty没有绑定8087端口则需要更改
```
src/views/Login.vue 中第28行
src/utils/request.js 中第7行
src/utils/Socket.js 中第3行
src/components/Left.vue 中第32行
```

### 启动
```
npm run serve
```
