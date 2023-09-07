<template>
  <div class="arete">
    <p class="arete__title">荣誉资质</p>
    <ul class="arete__cards">
      <AboutCard v-for="(item, idx) in cards"
                 :key="idx"
                 :card="item"></AboutCard>
    </ul>
  </div>
</template>
<script>
import AboutCard from "@/views/About/component/AboutCard.vue";

export default {
  name: 'AboutArete',
  components: {AboutCard},
  data() {
    return {
      cards: [
        {
          imgSrc: require('@/assets/img/about/card-pic/1.png'),
          text: '中国银联A类优秀供应商'
        },
        {
          imgSrc: require('@/assets/img/about/card-pic/2.png'),
          text: '2018年号卡新零售创新奖'
        },
        {
          imgSrc: require('@/assets/img/about/card-pic/3.png'),
          text: '虚拟运营商计费业务最佳服务奖'
        },
        {
          imgSrc: require('@/assets/img/about/card-pic/4.png'),
          text: '阿里汽车优秀服务商'
        },

        {
          imgSrc: require('@/assets/img/about/card-pic/5.png'),
          text: '“国家级高新技术企业”证书'
        },
        {
          imgSrc: require('@/assets/img/about/card-pic/6.png'),
          text: '“软件企业认定证书”证书'
        },
        {
          imgSrc: require('@/assets/img/about/card-pic/7.png'),
          text: '软件企业'
        },
        {
          imgSrc: require('@/assets/img/about/card-pic/8.png'),
          text: '国家信息安全等保三级认证'
        },

        {
          imgSrc: require('@/assets/img/about/card-pic/8.png'),
          text: '质量管理体系认证证书'
        },
        {
          imgSrc: require('@/assets/img/about/card-pic/10.png'),
          text: '山东省软件和信息服务业协会会员单位'
        },
        {
          imgSrc: require('@/assets/img/about/card-pic/11.png'),
          text: '增值电信业务经营许可证'
        },
        {
          imgSrc: require('@/assets/img/about/card-pic/12.png'),
          text: '跨地区增值电信业务经营许可证'
        },
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.arete {
  padding-top: 106px;
  padding-bottom: 161px;
  @include w1200;
}

.arete__title {
  font-size: 30px;
  text-align: center;
}

.arete__cards {
  @include flex-btw;
}
</style>