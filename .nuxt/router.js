import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7a67d8a5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _27cea49a = () => interopDefault(import('../pages/_category/index.vue' /* webpackChunkName: "pages/_category/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _7a67d8a5,
    name: "index"
  }, {
    path: "/:category",
    component: _27cea49a,
    name: "category"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
