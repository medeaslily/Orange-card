<template>
  <div class="brand">
    <div class="brand__cover"></div>
    <ul class="brand__cards">
      <HomeBrandCard v-for="(item, idx) in cardList"
                     :key="idx"
                     :card="item"></HomeBrandCard>
    </ul>
  </div>
</template>
<script>
import HomeBrandCard from "@/views/Home/components/HomeBrandCard.vue";

export default {
  name: 'HomeBrand',
  components: {HomeBrandCard},
  data() {
    return {
      cardList: [
        {
          iconSrc: require('@/assets/img/home/brand-card-icon/marketing.png'),
          coverSrc: require('@/assets/img/home/brand-card-cover/marketing.jpg'),
          title: '橙营销',
          des: '营销助力品牌升级',
        },
        {
          iconSrc: require('@/assets/img/home/brand-card-icon/integral.png'),
          coverSrc: require('@/assets/img/home/brand-card-cover/integral.jpg'),
          title: '橙积分',
          des: '让积分发挥更大价值',
        },
        {
          iconSrc: require('@/assets/img/home/brand-card-icon/financial.png'),
          coverSrc: require('@/assets/img/home/brand-card-cover/financial.jpg'),
          title: '橙金融',
          des: '智慧金融解决方案服务商',
        },
        {
          iconSrc: require('@/assets/img/home/brand-card-icon/welfare.png'),
          coverSrc: require('@/assets/img/home/brand-card-cover/welfare.png'),
          title: '橙福利',
          des: '开创员工福利新时代',
        },
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.brand {
  @include w1160;
  padding-top: 240px;
  padding-bottom: 148px;
}

.brand__cover {
  margin: 0 auto;
  width: 391px;
  height: 86px;
  background: url('@/assets/img/home/brand-cover.png') no-repeat center/cover;
}

.brand__cards {
  @include flex-btw;
  margin-top: 66px;
}
</style>