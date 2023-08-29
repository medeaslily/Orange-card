<template>
  <div class="card">
    <img class="card__img" :src="imgSrc" alt="">
    <div class="card__text-block">
      <p class="card__title">{{ title }}</p>
      <p class="card__time">{{ time }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'com-card',
  props: {
    imgSrc: {type: String},
    title: {type: String},
    time: {type: String}
  }
}
</script>
<style scoped>
.card {
  width: 386px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px
  rgba(237, 237, 237, 0.7);
}

.card__text-block {
  height: 110px;
  margin-left: 20px;
}

.card__title {
  font-size: 16px;
  line-height: 40px;
  color: #333;
}

.card__time {
  padding-top: 26px;
  font-size: 14px;
  line-height: 14px;
  color: #666;
}
</style>