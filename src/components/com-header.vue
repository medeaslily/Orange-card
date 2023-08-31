<template>
  <header :class="[{header: true}, {bgc_init: isIndex}]">
    <div class="header__bar  flex-box flex-btw w1200">
      <h1>
        <span class="hidden">橙券</span>
        <a href="#" class="logo">
          <img :src="isIndex ? logoWhite : logo" alt="logo" width="92" height="36">
        </a>
      </h1>
      <com-nav :isIndex="isIndex"></com-nav>
    </div>
  </header>
</template>
<script>
export default {
  name: 'com-header',
  watch: {
    $route(to) {
      if(to.path !== '/index') {
        this.isIndex = false
      } else {
        this.isIndex = true
      }
    }
  },
  data() {
    return {
      isIndex: true,
      logo: require('../assets/img/header/logo.png'),
      logoWhite: require('../assets/img/header/logowhite.png')
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

.bgc_init {
  background-color: initial;
}

.header__bar {
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>