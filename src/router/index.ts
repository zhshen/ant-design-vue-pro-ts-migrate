import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

// hack router push callback
// 沈峥注释，改为兼容Typescript模式
/*
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
*/

const originalPush = Router.prototype.push
Router.prototype.push = function push (location: string, onComplete?: Function, onError?: any) {
  return (originalPush.call(this, location, onComplete, onError) as any).catch((err: any) => err)
}

Vue.use(Router)

// 初始化router对象，对外导出，供main.ts使用
const router = new Router({
  mode: 'history',
  routes: constantRouterMap
})

export default router
