<template>
  <div class="brand">
    <div class="brand__cover"></div>
    <ul class="brand__cards  flex-box flex-btw">
      <li v-for="(item, idx) in cardList"
          :key="idx">
        <HomeBrandCard :card="item"></HomeBrandCard>
      </li>
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
          iconSrc: require('@/assets/img/home/marketing-icon.png'),
          coverSrc: require('@/assets/img/home/marketing.jpg'),
          title: '橙营销',
          des: '营销助力品牌升级',
        },
        {
          iconSrc: require('@/assets/img/home/integral-icon.png'),
          coverSrc: require('@/assets/img/home/integral.jpg'),
          title: '橙积分',
          des: '让积分发挥更大价值',
        },
        {
          iconSrc: require('@/assets/img/home/financial-icon.png'),
          coverSrc: require('@/assets/img/home/financial.jpg'),
          title: '橙金融',
          des: '智慧金融解决方案服务商',
        },
        {
          iconSrc: require('@/assets/img/home/welfare-icon.png'),
          coverSrc: require('@/assets/img/home/welfare.png'),
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
  margin-top: 66px;
}
</style>