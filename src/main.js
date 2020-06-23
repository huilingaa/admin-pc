import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css' // 初始化css样式
import '@/assets/styles/index.scss' // global css

import locale from 'element-ui/lib/locale/lang/en' // 国际化语言
Vue.use(ElementUI, { locale })
import echarts from 'echarts' // echarts
Vue.prototype.$echarts = echarts

import '@/icons' // icon
import '@/permission' // 权限控制

// mock数据
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
