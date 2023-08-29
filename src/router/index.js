import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // 主页
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  // 关于我们
  {
    path: '/about',
    component: () => import('../views/AboutView.vue')
  },
  // 新闻
  {
    path: '/news',
    component: () => import('../views/NewsView.vue')
  },
  // 展示样品
  {
    path: '/demo',
    component: () => import('../views/DemoView.vue')
  },
  // 支持
  {
    path: '/support',
    component: () => import('../views/SupportView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
