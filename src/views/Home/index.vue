<template>
  <div class="home">
    <!--   顶部横幅   -->
    <div class="home__banner">
      <el-carousel height="680px"
                   :loop="true"
                   :interval="2000"
                   indicator-position="none">
        <el-carousel-item v-for="(src, idx) in bannerSrcList"
                          :key="idx"
                          :style="{ 'background-image': `url(${src})` }">
        </el-carousel-item>
      </el-carousel>
      <HomeSlider></HomeSlider>
    </div>
    <!--  主页主体  -->
      <!--  橙品牌    -->
      <HomeBrand></HomeBrand>
      <!--   橙科技   -->
      <HomeEnable></HomeEnable>
      <!--   底部横幅   -->
      <HomeBottomBanner></HomeBottomBanner>
    </div>
</template>
<script>

import HomeSlider from "@/views/Home/components/HomeSlider.vue";
import HomeBrand from "@/views/Home/components/HomeBrand.vue";
import HomeEnable from "@/views/Home/components/HomeEnable.vue";
import HomeBottomBanner from "@/views/Home/components/HomeBottomBanner.vue";

export default {
  name: 'home-page',
  components: {HomeBottomBanner, HomeEnable, HomeBrand, HomeSlider},
  data() {
    return {
      bannerSrcList: []
    }
  },
  mounted() {
    this.getBanners()
  },
  methods: {
    getBanners() {
      this.$req('/indexbanners', 'get').then((res) => {
        this.bannerSrcList = res.data.map((item) => item.carousel)
        // 当banner数量为二，翻倍banner，使得组件el-carousel能够一直向右循环
        if (this.bannerSrcList.length === 2) {
          this.bannerSrcList = [...this.bannerSrcList, ...this.bannerSrcList]
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
// 轮播图
.home__banner {
  @include pos-rel;
}

.el-carousel__item {
  width: 100%;
  height: 100%;
  @include pad-bgi;
}

::v-deep .el-carousel__arrow {
  display: none;
}
</style>