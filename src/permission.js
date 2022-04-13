/*
 * @Author: your name
 * @Date: 2022-04-07 21:54:19
 * @LastEditTime: 2022-04-13 15:24:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hrsaas\src\permission.js
 */
import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'

const whileList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  nprogress.start()
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whileList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(function() {
  nprogress.done()
})
