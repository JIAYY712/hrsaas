/*
 * @Author: your name
 * @Date: 2022-04-07 21:54:19
 * @LastEditTime: 2022-04-13 16:44:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hrsaas\src\utils\request.js
 */
// import { config } from '@vue/test-utils'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'
import { getTimer } from './auth'

const Timeout = 3600
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    if (timerCheck()) {
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token超时了'))
    }
  }
  return config
},
(error) => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
  const { data, success, message } = response.data
  if (success) {
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, (error) => {
  Message.error(error.message)
  return Promise.reject(error)
})

function timerCheck() {
  const currentTime = Date.now()
  const timerStamp = getTimer()
  return (currentTime - timerStamp) / 1000 > Timeout
}
export default service
