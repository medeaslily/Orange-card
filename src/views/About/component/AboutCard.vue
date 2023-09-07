<template>
  <li class="card">
    <img class="card__pic"
         :src="card.imgSrc" alt="!">
    <p class="card__text">{{ card.text }}</p>
  </li>
</template>
<script>
export default {
  name: 'AboutCard',
  props: {
    card: {
      type: Object
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  @include flex;
  flex-direction: column;
  align-items: center;
}

.card__text {
  padding-top: 50px;
  @include same-fs-lh(16px);
}
</style>