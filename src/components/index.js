import ComHeader from './com-header.vue'
import ComFooter from './com-footer.vue'
import ComCard from './com-card.vue'
import ComNav from "@/components/com-nav.vue"

export default {
  // 通过install来拿到全局的Vue对象
  install(Vue) {
    //  注册全局的通用栏组件对象
    Vue.component('ComHeader', ComHeader)
    Vue.component('ComFooter', ComFooter)
    Vue.component('ComCard', ComCard)
    Vue.component('ComNav', ComNav)
  }
}
