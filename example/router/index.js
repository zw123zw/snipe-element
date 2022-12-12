import Vue from 'vue'
import Router from 'vue-router'
import permRouter from './asyncRoute'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/basic'
  }
]

export function resetRouter () {
  router.matcher = new Router({
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  }).matcher
}

export function updateRouter () {
  router.matcher = new Router({
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  }).matcher
  router.addRoutes([...permRouter])
  localStorage.setItem('routeList', JSON.stringify(permRouter))
}

const originPush = Router.prototype.push
Router.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // 如果成功 调用原来的push方法
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

const router = new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
