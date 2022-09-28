import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _77d6a985 = () => interopDefault(import('../pages/course/index.vue' /* webpackChunkName: "pages/course/index" */))
const _f465bf5c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _58153f4a = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _051bba4e = () => interopDefault(import('../pages/teacher/index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _419b492d = () => interopDefault(import('../pages/course/_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _ba4687c4 = () => interopDefault(import('../pages/orders/_oid.vue' /* webpackChunkName: "pages/orders/_oid" */))
const _c0b4bb0c = () => interopDefault(import('../pages/pay/_pid.vue' /* webpackChunkName: "pages/pay/_pid" */))
const _6e425e69 = () => interopDefault(import('../pages/player/_vid.vue' /* webpackChunkName: "pages/player/_vid" */))
const _2d600f94 = () => interopDefault(import('../pages/teacher/_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _87b5058a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _77d6a985,
    name: "course"
  }, {
    path: "/login",
    component: _f465bf5c,
    name: "login"
  }, {
    path: "/register",
    component: _58153f4a,
    name: "register"
  }, {
    path: "/teacher",
    component: _051bba4e,
    name: "teacher"
  }, {
    path: "/course/:id",
    component: _419b492d,
    name: "course-id"
  }, {
    path: "/orders/:oid?",
    component: _ba4687c4,
    name: "orders-oid"
  }, {
    path: "/pay/:pid?",
    component: _c0b4bb0c,
    name: "pay-pid"
  }, {
    path: "/player/:vid?",
    component: _6e425e69,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _2d600f94,
    name: "teacher-id"
  }, {
    path: "/",
    component: _87b5058a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
