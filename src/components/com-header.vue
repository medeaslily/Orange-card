<template>
  <header class="header">
    <div class="header__bar  flex-box flex-btw w1200">
      <h1>
        <span class="hidden">橙券</span>
        <a href="#" class="logo">
          <img src="../assets/img/header/logo.png" alt="logo" width="92" height="36">
        </a>
      </h1>
      <com-nav></com-nav>
<!--      <el-menu :default-active="activeIndex"-->
<!--               class="menu"-->
<!--               text-color="#999"-->
<!--               active-text-color="#ff7e16"-->
<!--               mode="horizontal">-->
<!--        <el-menu-item index="1">-->
<!--          <router-link to="/">首页</router-link>-->
<!--        </el-menu-item>-->
<!--        <el-submenu class="submenu"-->
<!--                    index="2">-->
<!--          <template v-slot:title>橙品牌</template>-->
<!--          <el-menu-item index="2-1">橙品牌</el-menu-item>-->
<!--          <el-menu-item index="2-2">橙品牌</el-menu-item>-->
<!--          <el-menu-item index="2-3">橙品牌</el-menu-item>-->
<!--        </el-submenu>-->
<!--        <el-menu-item index="3">-->
<!--          <router-link to="/support">橙权益</router-link>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="4">-->
<!--          <router-link to="/case">行业案例</router-link>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="5">-->
<!--          <router-link to="/news">新闻动态</router-link>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="6">-->
<!--          <router-link to="/about">关于我们</router-link>-->
<!--        </el-menu-item>-->
<!--      </el-menu>-->
    </div>
  </header>
</template>
<script>
export default {
  name: 'com-header',
  data() {
    return {
      activeIndex: '1'
    }
  },
}
</script>
<style lang="scss" scoped>
.hidden {
  display: none;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
}

.header__bar {
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

// 导航

.el-menu {
  width: 664px;
  border-bottom: initial;
}

.el-menu--horizontal>.el-menu-item {
  border-bottom: initial;
  font-size: 16px;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: initial;
}

::v-deep .el-menu--horizontal>.el-submenu .el-submenu__title {
  font-size: 16px;
  border-bottom: initial;
}

::v-deep .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
  border: initial;
}
</style>