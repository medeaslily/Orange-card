<template>
  <div class="banner">
    <p class="banner__title">依托橙券，聚焦权益，全面合作</p>
    <p class="banner__phone">
      <span>全国服务热线：400-096-0828</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span>商务合作专线：156-6806-1789</span>
    </p>
    <HomeMoreButton class="banner__button" :color="'white'"></HomeMoreButton>
  </div>
</template>
<script>
import HomeMoreButton from "@/views/Home/components/HomeMoreButton.vue";

export default {
  name: 'HomeBottomBanner',
  components: {HomeMoreButton}
}
</script>
<style lang="scss" scoped>
.banner {
  padding-top: 102px;
  padding-bottom: 65px;
  text-align: center;
  background-image: url('@/assets/img/home/banner-bottom.png');
  @include pad-bgi;
}

.banner__title {
  font-size: 48px;
  line-height: 48px;
  color: #fff;
}

.banner__phone {
  margin-bottom: 7px;
  font-size: 20px;
  line-height: 68px;
  color: #fff;
}

.banner__button {
  @include hor-center;
}
</style>