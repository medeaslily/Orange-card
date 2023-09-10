<template>
  <header class="header"
          :class="{ bgc_init: isIndex }">
    <div class="header__bar">
      <h1>
        <span>橙券</span>
        <a href="#" class="logo">
          <img :src="isIndex ? logoWhite : logo" alt="logo" width="92" height="36">
        </a>
      </h1>
      <com-nav :isIndex="isIndex"></com-nav>
    </div>
  </header>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: 'com-header',
  computed: {
    ...mapState(['isIndex'])
  },
  data() {
    return {
      logo: require('@/assets/img/header/logo.png'),
      logoWhite: require('@/assets/img/header/logowhite.png')
    }
  },
}
</script>
<style lang="scss" scoped>
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
  @include flex-btw;
  @include w1160;
  align-items: center;
  padding-top: 22px;
  padding-bottom: 22px;

  & h1>span {
    display: none;
  }
}
</style>