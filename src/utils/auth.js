/*
 * @Author: your name
 * @Date: 2022-04-07 21:54:19
 * @LastEditTime: 2022-04-13 15:28:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hrsaas\src\utils\auth.js
 */
import Cookies from 'js-cookie'

const TokenKey = 'hrsaas_ihrm_token'
const timerKey = 'hrsaas_ihrm_time'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getTimer() {
  return Cookies.get(timerKey)
}
export function setTimer() {
  return Cookies.set(timerKey, Date.now())
}
