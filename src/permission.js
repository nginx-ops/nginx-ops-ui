import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/register'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()

  const hasToken = getToken()

  // 有token
  if (hasToken) {
    document.title = getPageTitle(to.meta.title)

    // 访问登陆页
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // 是否有用户信息
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否拉取完毕
        store.dispatch('user/getInfo').then(() => {
          // 拉取动态路由
          store.dispatch('permission/generateRoutes').then(accessRoutes => {
            router.options.routes = accessRoutes;
            router.addRoutes(accessRoutes) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
        }).catch((error) => {
          // 信息拉去失败
          store.dispatch('user/logout').then(() => {
            Message.error(error)
            next({ path: '/' })
          })
        })
      } else {
        // 用户信息已存在
        next()
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      // Message.error("当前登录已失效,请重新登陆")
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
