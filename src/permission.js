import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式

NProgress.configure({ showSpinner: false }) // 进度条配置
const whiteList = ['/login'] // 无重定向白名单
router.beforeEach(async(to, from, next) => {
  NProgress.start() // 进度条开始
  document.title = getPageTitle(to.meta.title) // 得到title
  const hasToken = getToken() // 得到token
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' }) // 有token，跳home页面
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          await store.dispatch('user/getInfo') // 得到用户信息
          next()
        } catch (error) {
          // 移除token，并转到登录页以重新登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
