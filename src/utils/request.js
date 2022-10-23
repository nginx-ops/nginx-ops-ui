import axios from 'axios'
import { MessageBox, Message, Notification } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { tansParams, blobValidate } from "@/utils/ruoyi";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 是否显示重新登录
export let isRelogin = { show: false };

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authentication'] = getToken()
    }
    // get请求映射params参数
    if (config.method === 'get' && config.data) {
      let url = config.url + '?' + tansParams(config.data);
      url = url.slice(0, -1);
      config.data = {};
      config.url = url;
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  response => {
    // 获取返回数据
    const res = response.data

    // 二进制数据则直接返回
    if (response.request.responseType === 'blob' || response.request.responseType === 'arraybuffer') {
      return response.data
    }

    // 鉴权异常
    if (res.code === "A0005" || res.code === "A0006" || res.code === "A0007") {
      if (!isRelogin.show) {
        isRelogin.show = true;
        MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
        ).then(() => {
          isRelogin.show = false;
          // 清除token 跳转登录页
          store.dispatch('user/resetToken').then(() => {
            location.href = "/"
          })
        }).catch(() => {
          isRelogin.show = false;
        });
      }
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } 
    // else if (res.code === "500") {
    //   // 通用错误
    //   Message({
    //     message: res.message,
    //     type: 'error'
    //   })
    //   return Promise.reject(new Error(res.message))
    // }
     else if (res.code !== "00000") {
      // 其他错误
      Notification.error({
        title: res.message
      })
      return Promise.reject('error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
