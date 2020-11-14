/**
 * Created by Administrator on 2017/11/26 0026.
 */
import axios from 'axios'
import store from '../../vuex/store'
import Qs from 'qs'
import router from '../../router/index'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// NProgress.inc(0.2)
// NProgress.configure({easing: 'ease', speed: 500, showSpinner: false})

// http request 拦截器
axios.interceptors.request.use(
  config => {
    store.commit("getCookie")
    if (store.state.token) {
      config.headers.Authorization = `${store.state.token}`
      config.headers.ContentType = `application/x-www-form-urlencoded;charset=UTF-8`
      // config.transformRequest  = [obj => Qs.stringify(obj)]
      // config.headers.ContentType = `application/json;charset=UTF-8`
      // config.withCredentials = true   //支持跨域发送cookies
      config.headers.crossDomain = true
    }
    // NProgress.start()
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.code!=null&&response.data.code!='') {
    if (response.data.code === 301) {
      //清除token信息并跳转到登录页面
      // NProgress.done();
      store.commit("logOut")
      store.commit("delete_All_Tabs")
      window.location.href ='http://a.iyunxiao.com/quality?go=http://qa.aiyunxiao.com'
      // router.push({
      //   path: 'login',
      //   query: {redirect: router.currentRoute.fullPath}
      // })
    }
    // if (response.data.code !== 200 && response.data.code !== 202) {
    //   Message.error({
    //     message: response.data.message,
    //     type: "error"
    //   })
    // }
    }
    // NProgress.done();
    return response
  },
  error => {
    if (error.response.status === 504||error.response.status === 403||error.response.status === 503||error.response.status === 404) {
      store.commit("logOut")
      store.commit("delete_All_Tabs")
      // NProgress.done();
      window.location = 'http://a.iyunxiao.com/quality?go=http://qa.aiyunxiao.com'
      // router.push({
      //   path: 'login',
      //   query: {redirect: router.currentRoute.fullPath}
      // })
    }
    // NProgress.done();
    return Promise.reject(error.response.data)
  }
)

export default axios
