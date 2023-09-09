<template>
  <div class="case">
    <div class="case__banner">
      <h2>行业经典案例</h2>
      <p>橙券与企业深度融合，创造数字化未来</p>
    </div>
    <div class="case__content">
      <!--   案例卡片组   -->
      <ul class="case__cards">
        <CaseCard class="case__card"
                  v-for="(card, idx) in cards"
                  :key="idx"
                  :card="card"></CaseCard>
      </ul>
    </div>
  </div>
</template>
<script>
import CaseCard from "@/views/Case/components/CaseCard.vue";

export default {
  name: 'case-page',
  components: {CaseCard},
  data() {
    return {
      cards: [
        {
          coverName: 'finance',
          textBlock: {
            title: '金融行业',
            concur: '中国银联、中国农业银行、中国邮政储蓄银行、中国银行、中国工商银行、交通银行、浦发银行、哈银消费金融公司、51信用卡',
            support: '橙金融',
            serve: '橙券为客户搭建营销活动，银行的手机银行及网银用户可通过参与活动，获得不同频次抽奖礼券，凭抽奖礼券随机抽取话费、流量、星巴克等奖品，打造具有生动营销力的传播。'
          }
        },
        {
          coverName: 'network',
          textBlock: {
            title: '互联网行业',
            concur: '腾讯、京东PLUS、支付宝、搜狐邮箱、好时巧克力、乐麦',
            support: '橙营销',
            serve: '橙券为品牌线上商城旗舰店提供权益商品和技术支撑，多种选择，稳定货源支持，充分调动用户参与积极性，与用户形成良好互动，拉新促销，驱动企业业绩提升。'
          }
        },
        {
          coverName: 'insurance',
          textBlock: {
            title: '保险行业',
            concur: '中邮人寿、中德安联人寿、壹钱包',
            support: '橙营销、橙金融',
            serve: '橙券，为保险行业客户策划精准有冲击力的营销活动，同时兼顾品牌信息传递和用户习惯的完美平衡，创意提供多面值话费、卡券产品等，覆盖更广泛的目标人群，实现流量快速转换。'
          }
        },
        {
          coverName: 'communication',
          textBlock: {
            title: '通信行业',
            concur: '中国联通',
            support: '橙积分',
            serve: '橙券充分整合360°客户视图，为联通的积分商城提供网票网、货拉拉、e袋洗等优质权益商品，并保障源源不断上新。用户在线兑换心仪商品，丰富且实用，有效提升用户个性化体验，充分发挥积分的价值。'
          }
        },
        {
          coverName: 'cars',
          textBlock: {
            title: '汽车行业',
            concur: '重庆长安汽车卡',
            support: '橙积分',
            serve: '橙券，是长安商城积分兑换业务的提供商之一，为商城用户提供中石化加油卡充值与话费充值服务，让用户有了新的兑换选择，有助于用户留存，加强用户对品牌的友好度，快速提升品牌曝光度和流量。'
          }
        },
        {
          coverName: 'media',
          textBlock: {
            title: '传媒行业',
            concur: '华数传媒、中科数创、瑞安日报、山东广播电视台',
            support: '橙营销',
            serve: '橙券助力媒体行业深度营销，以数据产品的复合运用，实现程序化精准营销服务，根据品牌形象定制不同的视觉风格，形成具有互动性的曝光传播，帮助企业实现1+1>2的“品效合一”营销效果。'
          }
        }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.case {
  margin-top: $header-height;
}

.case__banner {
  box-sizing: border-box;
  height: 350px;
  text-align: center;
  background-image: url('@/assets/img/case/banner.jpg');
  @include pad-bgi;

  h2 {
    padding-top: 137px;
    padding-bottom: 20px;
    @include same-fs-lh(40px);
    color: #fff;
  }

  p {
    @include same-fs-lh(22px);
    color: #fff;
  }
}

.case__content {
  padding-top: 95px;
  padding-bottom: 132px;
  @include w1200;
}

.case__card:not(:last-child) {
  margin-bottom: 77px;
  border-bottom: 1px solid #f4f4f4;
}
</style>