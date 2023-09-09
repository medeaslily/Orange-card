<template>
  <li class="card"
      @click="toArticle">
      <el-image class="card__img"
                :src="card.imgSrc"
                :fit="'fill'"></el-image>
      <div class="card__text-block">
        <p class="card__title">{{ card.title }}</p>
        <p class="card__time">{{ card.time }}</p>
      </div>
  </li>
</template>
<script>
export default {
  name: 'NewsCard',
  props: {
    card: {type: Object}
  },
  methods: {
    toArticle() {
      this.$emit('toArticle')
    }
  },
}
</script>
<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  width: 386px;
  height: 328px;
  background-color: #fff;
  box-shadow: 0 0 10px 0
  rgba(237, 237, 237, 0.7);
  cursor: pointer;
}

.card__img {
  display: block;
  width: 386px;
  height: 220px;
}

.card__text-block {
  padding: 20px;
}

.card__title {
  @include single-dots;
  @include same-fs-lh(16px)
}

.card__time {
  padding-top: 39px;
  @include same-fs-lh(14px);
  color: #666;
}
</style>