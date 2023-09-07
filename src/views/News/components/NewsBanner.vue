<template>
  <div class="banner">
    <h2>橙券新闻动态</h2>
    <p class="fs20">新闻动态抢先看，从能力输出到技术赋能，橙券从未放缓脚步，只为与您见证橙券成长的每一步！</p>
  </div>
</template>
<script>
export default {
  name: 'NewsBanner'
}
</script>
<style lang="scss" scoped>
.banner {
  height: 200px;
  background: url(@/assets/img/news/banner.png) no-repeat center/cover;
  text-align: center;
  color: #fff;

  h2 {
    padding-top: 44px;
    font-size: 40px;
    line-height: 64px;
    font-weight: 400;
  }
}

.fs20 {
  font-size: 20px;
  line-height: 34px;
}
</style>