<template>
  <div class="enable">
    <div class="enable__cover"></div>
    <div class="enable__tabs">
      <HomeEnableTable :class="{active: activeTabIdx === idx}"
                       v-for="(item, idx) in tabs"
                       :key="idx"
                       :tab-text="item"
                       @changeTab="changeTab(idx)"></HomeEnableTable>
    </div>
    <div class="enable__cards">
      <b class="icon" @click="toPreCard">&#xe7a7;</b>
      <HomeEnableCard v-for="(item, idx) in cards"
                      :key="idx"
                      :card="item"
                      :order="getOrder(idx, activeCardIdx)"
                      :is-active="activeCardIdx === idx"></HomeEnableCard>
      <b class="icon or3" @click="toNextCard">&#xe716;</b>
    </div>
  </div>
</template>
<script>
import HomeEnableTable from "@/views/Home/components/HomeEnableTable.vue";
import HomeEnableCard from "@/views/Home/components/HomeEnableCard.vue";

export default {
  name: 'HomeEnable',
  components: {HomeEnableCard, HomeEnableTable},
  data() {
    return {
      tabs: ['金融行业', '互联网行业', '保险行业', '汽车行业', '传媒行业', '通信行业'],
      cards: [
        {
          cover: require('@/assets/img/home/unicom.png'),
          text: '中国联合网络通信集团有限公司，' +
              '简称中国联通集团、中国联通，' +
              '是中华人民共和国一家主要从事通信业的中央企业，' +
              '也是中国第三大电信运营商，' +
              '在中国内地三十一个省、市、自治区运营移动与固网通信业务。'
        },
        {
          cover: require('@/assets/img/home/unicom-pay.png'),
          text: '作为中国的银行卡联合组织，中国银联处于我国银行卡产业的核心和枢纽地位，' +
              '对我国银行卡产业发展发挥着基础性作用，各银行通过银联跨行交易清算系统。' +
              '实现了系统间的互联互通，进而使银行卡得以跨银行、跨地区和跨境使用。'
        },
        {
          cover: require('@/assets/img/home/tencent.png'),
          text: '腾讯控股有限公司，简称腾讯，是中国一家跨国企业控股公司，' +
              '为中国大陆规模最大的互联网公司，' +
              '1998年11月由马化腾、张志东、陈一丹、许晨晔、曾李青5位创始人共同创立，' +
              '总部位于深圳南山区腾讯滨海大厦。'
        }
      ],
      activeTabIdx: 0,
      activeCardIdx: 1,
      orderList: [
        {'0': 0, '1': 2, '2': 1},
        {'0': 1, '1': 0, '2': 2},
        {'0': 2, '1': 1, '2': 0}
      ]
    }
  },
  computed: {
    getOrder() {
      return (idx, activeCardIdx) => this.orderList[activeCardIdx][`${idx}`]
    }
  },
  methods: {
    changeTab(idx) {
      this.activeTabIdx = idx
    },
    toPreCard() {
      let cardsLen = this.cards.length
      let lastCardIdx = cardsLen - 1
      let subCardIdx = this.activeCardIdx - 1
      this.activeCardIdx = subCardIdx === -1 ? lastCardIdx : subCardIdx
    },
    toNextCard() {
      let cardsLen = this.cards.length
      this.activeCardIdx = (this.activeCardIdx + 1) % cardsLen
    }
  },
}
</script>
<style lang="scss" scoped>
.or3 {
  order: 3;
}

.enable {
  padding-top: 82px;
  padding-bottom: 144px;
  background-image: url('@/assets/img/home/enable-bgc.png');
  @include pad-bgi;
}

.enable__cover {
  @include hor-center;
  width: 302px;
  height: 78px;
  background-image: url('@/assets/img/home/enable-cover.png');
  @include pad-bgi;
}

.enable__tabs {
  @include flex-btw;
  @include w1160;
  margin-top: 68px;
  margin-bottom: 98px;
}

.enable__cards {
  @include flex;
  justify-content: space-between;
  align-items: center;
  @include pos-rel;
  @include w1200;
}

.icon {
  width: 53px;
  height: 53px;
  line-height: 53px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background-color: #cbccce;
  cursor: pointer;

}
</style>