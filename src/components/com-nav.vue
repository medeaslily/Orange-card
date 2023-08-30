<template>
  <div :class="[nav, { special_a: isIndex }]">
    <ul class="flex-box">
      <li>
        <router-link to="/index">首页</router-link>
      </li>
      <li class="pull-list">
        <a class="icon icon-arrow-down ml6" to="/">橙品牌</a>
        <ul class="pull-list-item">
          <li>
            <a href="#">橙品牌</a>
          </li>
          <li>
            <a href="#">橙品牌</a>
          </li>
          <li>
            <a href="#">橙品牌</a>
          </li>
          <li>
            <a href="#">橙品牌</a>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/support">橙权益</router-link>
      </li>
      <li>
        <router-link to="/case">行业案例</router-link>
      </li>
      <li>
        <router-link to="/news">新闻动态</router-link>
      </li>
      <li>
        <router-link to="/about">关于我们</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'nav-page',
  props: {
    // 是否是主页路由
    isIndex: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      navIndex: 'nav-index',
      nav: 'nav'
    }
  },
}
</script>
<style lang="scss" scoped>
.nav {
  margin-right: 132px;
}

.nav li:not(:last-child,.pull-list li) {
  margin-right: 46px;
}

.nav a {
  font-size: 16px;
  line-height: 36px;
  color: #999;
}

.nav a:hover {
  color: $theme-color;
}

// 当路由定位为主页时，a标签的颜色

.nav,.special_a a {
  color: #c8c8c8;
}

.nav,.special_a a:hover:not(.router-link-active) {
  color: #fff;
}

.nav .router-link-active {
  color: $theme-color;
}

.pull-list {
  position: relative;
}

.icon-arrow-down::after {
  position: absolute;
  top: 0;
  right: -18px;
  transition: .3s;
}

.pull-list-item {
  // 高度回收时剪裁超出的元素高度
  overflow: hidden;
  position: absolute;
  visibility: hidden;
  top: 46px;
  left: -30px;
  width: 124px;
  max-height: 0;
  line-height: 44px;
  text-align: center;
  background-color: rgba(0, 0, 0, .3);
  border-radius: 4px;
  // 动画过渡
  transition: .5s;
}

.pull-list-item a {
  color: #fff;
}

.pull-list:hover .pull-list-item {
  visibility: visible;
  max-height: 500px;
}

.pull-list:hover .icon-arrow-down::after {
  display: inline-block;
  transform: rotate(180deg)
}
</style>