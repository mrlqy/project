import Vue from 'vue'
import store from '../store'
import router from '../router'
import {
  TransferDom,
  DatetimePlugin,
  DevicePlugin,
  CloseDialogsPlugin,
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin,
  LoadingPlugin,
  BusPlugin,
  AppPlugin,
  Group,
  Cell
} from 'vux'

//指令
Vue.directive('transfer-dom', TransferDom)
// 插件
Vue.use(DatetimePlugin)
Vue.use(CloseDialogsPlugin, router)
Vue.use(LocalePlugin)
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(BusPlugin)
if (process.env.platform === 'app') {
  Vue.use(AppPlugin, store)
}
// 通用组件
Vue.component('group', Group)
Vue.component('cell', Cell)
