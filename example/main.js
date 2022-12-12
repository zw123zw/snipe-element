import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/components/requireContext'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.scss'

// 引入SDK
import init from 'yk-dcs-platform/lib/init'
import Router from 'vue-router'
init(
  {
    appkey: 'CDS',
    constantRoutes: [],
    baseURL: process.env.VUE_APP_URL,
    isProd: process.env.VUE_APP_PLATFORM === 'production', // 区分测试环境还是生产环境
    openMessage: true,
    sensors: {
      open: false,
      options: {
        show_log: true
      }
    }
  },
  Vue,
  Router
)

// 引入组件库
import dcsElement from '../lib/dcs-element'
import '../lib/css/dcs-element.css'
Vue.use(dcsElement, {
  class: ['demo'],
  sensors: Vue.prototype.$dcsPlatform.sensors
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
