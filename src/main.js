import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App'
import store from './store'
import './plugins/vux'

require('es6-promise').polyfill()
FastClick.attach(document.body)

sync(store, router)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
