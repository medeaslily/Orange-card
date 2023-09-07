<template>
  <div class="connect">
    <div class="connect__cover"></div>
    <div class="connect__box">
      <div class="connect__title">联系我们</div>
      <div class="connect__box-item"
           v-for="(item, idx) in boxData"
           :key="idx">
        <div class="connect__icon" :style="{'background-image': `url(${ item.icon })`}"></div>
        <div class="connect__text-block">
          <p class="fs16">{{ item.title }}</p>
          <p class="fs18">{{ item.des }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutConnect',
  data() {
    return {
      boxData: [
        {
          icon: require('@/assets/img/about/icon/dz.png'),
          title: '地址',
          des: '山东省烟台市莱山区飞龙天润大厦14F'
        },
        {
          icon: require('@/assets/img/about/icon/kf.png'),
          title: '商务合作',
          des: '156-6806-1789范经理（微信同号）'
        },
        {
          icon: require('@/assets/img/about/icon/sw.png'),
          title: '客服电话（7*24小时）',
          des: '400-081-7007'
        },
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.fs16 {
  font-size: 16px;
}

.fs18 {
  font-size: 18px;
  color: #666;
}

.connect {
  box-sizing: border-box;
  @include flex;
  height: 500px;
}

.connect__cover {
  width: 853px;
  height: 100%;
  background-image: url('@/assets/img/about/map.jpg');
  @include pad-bgi;
}

.connect__box {
  flex: 1;
  padding-top: 76px;
  padding-left: 94px;
  background-color: #fbfbfb;
}

.connect__title {
  @include same-fs-lh(30px);
  padding-bottom: 56px;
}

.connect__box-item {
  @include flex;
  margin-bottom: 41px;
}

.connect__icon {
  width: 50px;
  height: 50px;
  @include pad-bgi;
}

.connect__text-block {
  margin-left: 29px;
}
</style>