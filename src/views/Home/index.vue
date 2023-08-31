<template>
  <div class="home">
    <!--   横幅   -->
    <el-carousel class="home-banner"
                 height="680px"
                 :loop="true"
                 :interval="2000"
                 indicator-position="none">
      <el-carousel-item v-for="(src, idx) in bannerSrcList"
                        :key="idx">
        <div class="home-banner__cover"
             :style="{ 'background-image': `url(${src})` }"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'home-page',
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

.home-banner__cover {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

::v-deep .el-carousel__arrow {
  display: none;
}
</style>