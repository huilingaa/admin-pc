## 基础功能
### 跨域问题
首先前后端交互不可避免的就会遇到跨域问题，我司现在全是用 cors来解决的，如果你司后端嫌麻烦不肯配置的话，dev环境也可以通过
webpack-dev-server的proxy来解决，开发环境用nginx反代理一下就好了，具体配置这里就不展开了。
、、、
  |--module.exports = {
      |--//配置跨域请求
      |--devServer: {
          |--open: true,    //是否自动打开浏览器
          |--host: 'localhost',
          |--port: 8081,    //启动端口号
          |--https: false,    //是否开启https
          |--hotOnly: false,
          |--proxy: { // 配置跨域
              |--'/api': {
                  |--target: 'http://localhost:3000/api/',
                  |--ws: true,
                 |-- changOrigin: true,    //是否开启代理
                 |-- pathRewrite: {
                      |--'^/api': ''
                  |--}
              |--}
         |-- },
         |-- before: app => {}
     |-- },
  |--}
、、、

### 可视化分析工具
webpack-bundle-analyzer 

###  eslint
unit测试
npm run lint -- --fix

### mook数据

### 动态路由+权限管控

### 其他

* layout
* svg的封装 
* api接口独立 





