import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _413e9c63 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _8b8f4308 = () => interopDefault(import('../pages/create/index.vue' /* webpackChunkName: "pages/create/index" */))
const _e08cb66c = () => interopDefault(import('../pages/create/new.vue' /* webpackChunkName: "pages/create/new" */))
const _7a67d8a5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _27cea49a = () => interopDefault(import('../pages/_category/index.vue' /* webpackChunkName: "pages/_category/index" */))
const _5a545212 = () => interopDefault(import('../pages/_category/post/index.vue' /* webpackChunkName: "pages/_category/post/index" */))

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
    path: "/about",
    component: _413e9c63,
    name: "about"
  }, {
    path: "/create",
    component: _8b8f4308,
    name: "create"
  }, {
    path: "/create/new",
    component: _e08cb66c,
    name: "create-new"
  }, {
    path: "/",
    component: _7a67d8a5,
    name: "index"
  }, {
    path: "/:category",
    component: _27cea49a,
    name: "category"
  }, {
    path: "/:category/post",
    component: _5a545212,
    name: "category-post"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
