<template>
  <a class="button" :style="setCssVar">了解更多</a>
</template>
<script>
export default {
  name: 'HomeMoreButton',
  props: {
    color: {
      type: String,
      default: '#ff7200'
    }
  },
  computed: {
    setCssVar() {
      return { '--color': this.color }
    }
  },
}
</script>
<style lang="scss" scoped>
@mixin setButton($color: $theme-color) {
  display: block;
  width: 150px;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  border: 1px solid $color;
  border-radius: 20px;
  color: $color;
}

.button {
  @include setButton(var(--color))
}

.button::after {
  content: ">";
  display: inline-block;
  font-size: 20px;
  padding-left: 8px;
  transition: .2s;
}

.button:hover.button::after {
  transform: translateX(2px);
}
</style>