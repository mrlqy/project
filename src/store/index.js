import Vue from 'vue'
import Vuex from 'vuex'
import page from './modules/page'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    page
  },
  strict: debug,
  state: {
    isLoading: false,
    direction: 'forward'
  }
})
