import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import Component from '@/components'
import '@/assets/style/reset.css'
import '@/assets/style/public.scss'
import '@/assets/icons/iconfont.css'
import request from '@/utils/request'
import tool from '@/utils/tool'
import api from '@/api'
import store from './store'

Vue.config.productionTip = false
Vue.use(Component)
Vue.prototype.$req = request
Vue.prototype.$tool = tool
Vue.prototype.$api = api
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
