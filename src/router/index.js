import Vue from 'vue'
import Router from 'vue-router'
import menus from '../menu'

Vue.use(Router)

const routes = []
for (let i = 0; i < menus.length; i++) {
  let m = menus[i]
  routes.push({
    path: m.path,
    name: m.name,
    component: resolve => require([`@/page${m.src}`], resolve)
  })
}

export default new Router({
  mode: 'history',
  routes: routes
})
