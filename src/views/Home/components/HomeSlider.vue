<template>
  <div class="slider">
    <img src="@/assets/img/home/slider-icon.png" alt="icon" width="76" height="70">
    <h2>橙券，是权益营销方案提供商，为实现品牌-市场-用户的紧密互联提供强有力的智慧支持。</h2>
    <HomeMoreButton></HomeMoreButton>
  </div>
</template>
<script>

import HomeMoreButton from "@/views/Home/components/HomeMoreButton.vue";

export default {
  name: 'HomeSlider',
  components: {HomeMoreButton}
}
</script>
<style lang="scss" scoped>
h2 {
  font-size: 20px;
  color: #333;
}

.slider {
  @include flex;
  justify-content: space-around;
  align-items: center;
  @include pos-abs;
  bottom: -80px;
  left: 0;
  right: 0;
  z-index: 3;
  @include w1160;
  height: 118px;
  background-color: #fff;
  box-shadow: 0 8px 8px #ccc;
}
</style>