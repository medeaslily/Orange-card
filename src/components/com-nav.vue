<template>
  <ul class="nav" :class="{ special_a: isIndex }">
    <li>
      <router-link to="/index">首页</router-link>
    </li>
    <li class="pull-list">
      <a class="icon icon-arrow-down" href="/">橙品牌</a>
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
  display: flex;
  margin-right: 132px;

  // 设置导航一级元素右边距，不包括最后一个一级元素和所有二级元素
  li:not(:last-child,.pull-list li) {
    margin-right: 46px;
  }

  a {
    font-size: 16px;
    line-height: 36px;
    color: #999;

    &:hover {
      color: $theme-color;
    }
  }

  .router-link-active {
    color: $theme-color;
  }
}

// route为主页时nav的样式

.special_a {
  a {
    color: #c8c8c8;

    &:hover:not(.router-link-active,.pull-list a) {
      color: #fff;
    }
  }
}

.pull-list {
  position: relative;

  &:hover .pull-list-item {
    visibility: visible;
    max-height: 500px;
  }

  &:hover .icon-arrow-down::after {
    display: inline-block;
    transform: rotate(180deg);
  }
}

.icon-arrow-down::after {
  position: absolute;
  top: 0;
  right: -22px;
  transition: .3s;
}

.pull-list-item {
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
  transition: .5s;

  a {
    color: #fff;
  }
}

</style>