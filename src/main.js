import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import Component from '@/components'
import './assets/css/reset.css'
import './assets/css/public.scss'

Vue.config.productionTip = false
Vue.use(Component)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
