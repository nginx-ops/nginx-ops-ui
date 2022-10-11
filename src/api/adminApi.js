import request from '@/utils/request'


export default {

  // 登录
  login(params) {
    return request({
      url: '/login',
      method: 'post',
      data: params
    })
  },

  // 获取用户信息
  getInfo() {
    return request({
      url: 'user/info',
      method: 'get'
    })
  },

  // 获取路由列表
  getRouters() {
    return request({
      url: '/routers',
      method: 'get'
    })
  },

  // 退出
  logout() {
    return request({
      url: '/logout',
      method: 'post'
    })
  },

  // 获取验证码
  captcha() {
    return request({
      url: '/captcha',
      method: 'get'
    })
  }
}





