<template>
  <div class="card"
       :class="{active: isActive}"
       :style="{'order': order}">
    <div class="card__cover"
         :style="setBgiVar"></div>
    <p class="card__text">{{ card.text }}</p>
  </div>
</template>
<script>
export default {
  name: 'HomeEnableCard',
  props: {
    card: {
      type: Object,
    },
    isActive: {
      type: Boolean,
      default: false
    },
    order: {
      type: Number
    }
  },
  computed: {
    setBgiVar() {
      return { '--bgi': `url(${ this.card.cover })` }
    }
  },
}
</script>
<style lang="scss" scoped>
.card {
  padding-top: 85px;
  padding-bottom: 85px;
  width: 500px;
  background-color: #fff;
  box-shadow: 0px -1px 21px 0px
  rgba(114, 113, 113, 0.3);

  &.active {
    @include pos-abs;
    top: -23px;
    left: 0;
    right: 0;
    @extend %hor-center;
    padding-top: 86px;
    padding-bottom: 130px;
    width: 500px;

    &::after {
      content: "";
      display: block;
      @include pos-abs-cent;
      bottom: 0;
      width: 80px;
      height: 2px;
      text-align: center;
      background-color: $theme-color;
    }

    & .card__cover {
      @extend %hor-center;
    }
  }
}

.card__cover {
  @extend %hor-center;
  background-image: var(--bgi);
  @include pad-bgi;
  width: 218px;
  height: 55px;
}

.card__text {
  @extend %hor-center;
  margin-top: 58px;
  width: 422px;
  line-height: 30px;
  text-indent: 2em;
}
</style>