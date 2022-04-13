/*
 * @Author: your name
 * @Date: 2022-04-07 21:54:19
 * @LastEditTime: 2022-04-13 16:49:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hrsaas\src\store\modules\user.js
 */
import { login } from '@/api/user'
import { getToken, removeToken, setTimer, setToken } from '@/utils/auth'

const actions = {
  async login(context, data) {
    const result = await login(data)
    context.commit('SETTOKEN', result)
    setTimer()
  },
  logout(comtext) {
    comtext.commit('REMOVETOKEN')
  }
}
const mutations = {
  SETTOKEN(state, token) {
    state.token = token
    setToken(token)
  },
  REMOVETOKEN(state) {
    state.token = null
    removeToken()
  }
}
const state = {
  token: getToken()
}

export default {
  namespaced: true,
  actions,
  mutations,
  state
}
