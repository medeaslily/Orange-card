<template>
  <li class="card">
    <div class="card__cover" :style="setBgiVar"></div>
    <div class="card__text-block">
      <h3>{{ card.textBlock.title }}</h3>
      <p class="card__subtitle">合作对象</p>
      <p class="card__des">{{ card.textBlock.concur }}</p>
      <p class="card__subtitle">品牌支持</p>
      <p class="card__des">{{ card.textBlock.support }}</p>
      <p class="card__subtitle">服务内容</p>
      <p class="card__des">{{ card.textBlock.serve }}</p>
    </div>
  </li>
</template>
<script>
export default {
  name: 'CaseCard',
  props: {
    card: {
      type: Object,
    },
  },
  computed: {
    setBgiVar() {
      return {
        '--bgi': `url(${require(`@/assets/img/case/cover/${ this.card.coverName }.png`)})`
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.card {
  @include flex-btw;
}

.card__cover {
  width: 427px;
  height: 540px;
  background-image: var(--bgi);
  @include pad-bgi;
}

.card__text-block {
  width: 696px;

  h3 {
    padding-left: 25px;
    font-size: 22px;
    font-weight: 400;
    line-height: 52px;
    color: $theme-color;
    background-color: #f8f8f8;
  }
}

.card__subtitle {
  margin-top: 56px;
  margin-bottom: 9px;
  @include same-fs-lh(20px);
  color: #666;

  &::before {
    content: "";
    display: inline-block;
    margin-right: 11px;
    width: 3px;
    height: 16px;
    background-color: $theme-color;
  }
}

.card__des {
  font-size: 14px;
  line-height: 24px;
  color: #666;
}
</style>