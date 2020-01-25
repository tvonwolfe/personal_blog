import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a0bfea6 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _6f98f825 = () => interopDefault(import('..\\pages\\create\\index.vue' /* webpackChunkName: "pages_create_index" */))
const _089694b3 = () => interopDefault(import('..\\pages\\create\\new.vue' /* webpackChunkName: "pages_create_new" */))
const _18b19121 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _668a7556 = () => interopDefault(import('..\\pages\\_category\\index.vue' /* webpackChunkName: "pages__category_index" */))
const _551c3c36 = () => interopDefault(import('..\\pages\\_category\\post\\index.vue' /* webpackChunkName: "pages__category_post_index" */))

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
    component: _1a0bfea6,
    name: "about"
  }, {
    path: "/create",
    component: _6f98f825,
    name: "create"
  }, {
    path: "/create/new",
    component: _089694b3,
    name: "create-new"
  }, {
    path: "/",
    component: _18b19121,
    name: "index"
  }, {
    path: "/:category",
    component: _668a7556,
    name: "category"
  }, {
    path: "/:category/post",
    component: _551c3c36,
    name: "category-post"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
