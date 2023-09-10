<template>
  <div class="home">
    <!--   顶部横幅   -->
    <div class="home__banner">
            <el-carousel height="680px">
              <el-carousel-item v-for="(src, idx) in bannerSrcList"
                                :key="idx"
                                :style="setBgiVar(src)">
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
  computed: {
    setBgiVar() {
      return (src) => {
        return {'--bgi': `url(${src})`}
      }
    }
  },
  mounted() {
    this.getBanners()
  },
  methods: {
    getBanners() {
      this.$req('/indexbanners', 'get').then((res) => {
        this.bannerSrcList = res.data.map((item) => item.carousel)
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

// 轮播的元素
.el-carousel__item {
  width: 100%;
  height: 100%;
  background-image: var(--bgi);
  @include pad-bgi;
}

::v-deep {
  // 左右箭头指示器
  .el-carousel__arrow {
    display: none;
  }

  // 底部横条指示器
  .el-carousel__indicators--horizontal {
    bottom: 84px;
  }
}
</style>