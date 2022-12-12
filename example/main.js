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

// 引入组件库
import dcsElement from '../lib/dcs-element'
import '../lib/css/dcs-element.css'
Vue.use(dcsElement, {
  class: ['demo'],
  sensors: '',
  configs: {
    size: 'small'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
