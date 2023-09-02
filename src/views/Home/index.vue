<template>
  <div class="home">
    <!--   横幅   -->
    <div class="pos-rel">
      <el-carousel class="home__banner"
                   height="680px"
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
    <div class="home__content w1160">
      <!--  橙品牌    -->
      <HomeBrand></HomeBrand>
      <!--   橙科技   -->
      <HomeEnable></HomeEnable>
    </div>
  </div>
</template>
<script>

import HomeSlider from "@/views/Home/components/HomeSlider.vue";
import HomeBrand from "@/views/Home/components/HomeBrand.vue";

export default {
  name: 'home-page',
  components: {HomeBrand, HomeSlider},
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
//.home-banner::before,
//.home-banner::after {
//  content: '';
//  position: absolute;
//  display: inline-block;
//  z-index: 2;
//  bottom: 0;
//  left: 0;
//  right: 0;
//  margin: 0 auto;
//  width: 49px;
//  height: 3px;
//  background-color: #838a94;
//  border-radius: 2px;
//}

// 轮播图
.el-carousel__item {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.home__brand {
  background-color: #fff;
}

.home__brand_cover {
  width: 391px;
  height: 86px;
  background-image: url('@/assets/img/home/brand-cover.png');
}

::v-deep .el-carousel__arrow {
  display: none;
}
</style>