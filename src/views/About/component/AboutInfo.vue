<template>
  <div class="info">
    <div class="info__content">
      <h2>{{ info.title }}</h2>
      <div class="info__cover">
        <div class="info__text-block">
          <p class="info__keyword">橙券</p>
          <p class="info__des" v-html="info.des"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutInfo',
  data() {
    return {
      info: {
        title: '关于我们',
        des: '山东鼎信网络科技有限公司(DECENT)成立于2010年，拥有近300人的专业团队，是国内领先的权益营销解决方案提供商之一，是山东省双软认证企业、国家级高新技术企业。<br>' +
            '公司自主研发的权益营销平台——橙券，运用互联网+精准营销理念，以积分和电子凭证为载体，通过金融权益、积分运营、营销支撑服务的商业模式，聚焦银行、保险、金融、传媒、互联网、通信等大型行业机构，集合生活服务类优质品牌资源，提供上下游一体的综合权益营销解决方案，提升用户体验，创造社会价值。构建“跨地域、跨品牌、多元化、融合性”的以“产业互联、创新融合” 的多方共赢的生态模式。'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.info {
  padding-top: 76px;
  padding-bottom: 176px;
  box-sizing: border-box;
  height: 730px;
  background-color: #f9f9fa;

  h2 {
    padding-bottom: 53px;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
  }
}

.info__content {
  @include w1200;
}

.info__cover {
  @include pos-rel;
  width: 614px;
  height: 385px;
  background-image: url('@/assets/img/about/info__cover.png');
  @include pad-bgi;
}

.info__text-block {
  @include pos-abs;
  top: 42px;
  left: 481px;
  padding: 48px 59px 50px 57px;
  box-sizing: border-box;
  width: 719px;
  height: 401px;
  text-align: justify;
  background-color: #fff;
  border-radius: 6px;
}

.info__keyword {
  padding-bottom: 21px;
  @include same-fs-lh(24px);
  color: $theme-color;

  &::after {
    content: "";
    display: block;
    margin-top: 16px;
    width: 36px;
    height: 3px;
    background-color: $theme-color;
  }
}

.info__des {
  width: 601px;
  font-size: 16px;
  line-height: 30px;
  color: #666;
}
</style>