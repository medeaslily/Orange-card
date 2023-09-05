<template>
  <div class="card"
       :style="{ 'background-image': `url(${ card.coverSrc })` }">
    <div class="card-mask">
      <div class="card__icon"
           :style="{ 'background-image': `url(${ card.iconSrc })` }"></div>
      <p class="card__title">{{ card.title }}</p>
      <p class="card__des">{{ card.des }}</p>
      <HomeMoreButton class="card__button"
                       :color="'white'"></HomeMoreButton>
    </div>
  </div>
</template>
<script>
import HomeMoreButton from "@/views/Home/components/HomeMoreButton.vue";

export default {
  name: 'HomeBrandCard',
  components: {HomeMoreButton},
  props: {
    card: {
      type: Object,
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  width: 280px;
  height: 400px;
  transition: .2s;

  &:hover {
    // *rel和定位层级放在hover里处理优化效果
    z-index: 1;
    position: relative;
    transform: scale(1.15, 1.13);
    background-color: rgb(255, 255, 255, 0);
    padding: 8px 7px;
    // *从容器边框向内展开模糊
    box-shadow: 8px 8px 8px #ccc inset;
  }

  &:hover .card-mask {
    background-color: transparent;
    border: 1px solid #fff;
  }

  &:hover .card__des {
    color: #fff;
  }

  &:hover .card__button {
    display: block;
  }
}

.card-mask {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, .5);
  transition: .3s;
}

.card__icon {
  margin-top: 108px;
  width: 90px;
  height: 90px;
}

.card__title {
  margin-top: 38px;
  font-size: 28px;
  line-height: 28px;
  color: #fff;
}

.card__des {
  margin-top: 13px;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 16px;
  color: #dadada;
}

.card__button {
  display: none;
}
</style>