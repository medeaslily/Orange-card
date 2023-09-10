import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout.vue'),
    children: [
      { path: '/', redirect: '/index' },
      // 主页
      { path: '/index', component: () => import('@/views/Home') },
      // 关于我们
      { path: '/about', component: () => import('@/views/About') },
      // 新闻主页
      { path: '/news', component: () => import('@/views/News') },
      // 新闻文章
      { path: '/article/:id', name: 'article', component: () => import('@/views/Article') },
      // 展示样品
      { path: '/case',component: () => import('@/views/Case') },
      // 支持
      { path: '/support', component: () => import('@/views/Support') }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/ErrorPage')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 动态设置导航栏active样式
  store.dispatch('CHANGE_INDEX', to.path)
  next()
})

export default router
