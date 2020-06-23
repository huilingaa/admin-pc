import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: { title: '主页', icon: 'home' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '案列', icon: 'example' },
    children: [
      {
        path: 'richText',
        name: 'richText',
        component: () => import('@/views/template/richText'),
        meta: { title: '富文本', icon: 'table' }
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/template/table'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/template/tree'),
        meta: { title: '树状图', icon: 'tree' }
      },
      {
        path: 'echart',
        name: 'echart',
        component: () => import('@/views/template/echart'),
        meta: { title: '图表', icon: 'tree' }
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/template/form'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },



  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '外链', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),  // 每次切换组件的时候让页面回到顶部
  routes: constantRoutes
})

const router = createRouter()

// 这个是重置路由用的，很有用，别看这么几行代码，在用户退出时调用
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
