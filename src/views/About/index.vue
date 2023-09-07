<template>
  <div class="about">
    <div class="about__banner"></div>
    <!--  关于我们详情   -->
    <AboutInfo></AboutInfo>
    <!--  荣誉奖章  -->
    <AboutArete></AboutArete>
    <!--  联系方式  -->
    <AboutConnect></AboutConnect>
  </div>
</template>
<script>
import AboutInfo from "@/views/About/component/AboutInfo.vue";
import AboutArete from "@/views/About/component/AboutArete.vue";
import AboutConnect from "@/views/About/component/AboutConnect.vue";

export default {
  name: 'about-page',
  components: {AboutConnect, AboutArete, AboutInfo},
}
</script>
<style lang="scss" scoped>
.about {
  margin-top: $header-height;
}

.about__banner {
  height: 250px;
  background-image: url('@/assets/img/about/banner.png');
  @include pad-bgi;
}
</style>