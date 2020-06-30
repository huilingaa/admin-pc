## 基础功能
### 跨域问题
首先前后端交互不可避免的就会遇到跨域问题，我司现在全是用 cors来解决的，如果你司后端嫌麻烦不肯配置的话，dev环境也可以通过
webpack-dev-server的proxy来解决，开发环境用nginx反代理一下就好了。
1：在项目根目录创建vue.config.js
2：配置如下
```
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

```
3：nginx反向代理
```
修改Nginx的配置文件 xxx.conf
原理：通过Nginx反向代理将对真实服务器的请求转移到本机服务器来避免浏览器的"同源策略限制"
```

### 可视化分析工具
webpack-bundle-analyzer 

###  eslint
#### 全局安装 ESLint
$ npm install -g eslint
#### 初始化 ESLint 配置
$ eslint --init
在生成的.eslintrc.js 文件的rules中配置
配置详情（https://blog.csdn.net/weixin_44198965/article/details/99839604）
#### 代码检测
在package.json的scripts下
"lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/ test/unit test/e2e/specs",
npm run lint-fix
<!-- unit测试
npm run lint -- --fix -->

### mook数据

### 动态路由+权限管控

### 其他

* layout
* svg的封装 
* api接口独立化





