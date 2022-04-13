/*
 * @Author: your name
 * @Date: 2022-04-07 21:54:19
 * @LastEditTime: 2022-04-11 11:46:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hrsaas\src\api\user.js
 */
import request from '@/utils/request'
/*
*封装登录接口
*返回的是promise值
**/
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return
}

export function logout() {
  return
}
