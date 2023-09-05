<template>
  <a class="button">了解更多</a>
</template>
<script>
export default {
  name: 'HomeMoreButton',
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.switchStyle()
  },
  methods: {
    switchStyle () {
      // 支持修改的样式
      let supportColor = ['white']

      if (supportColor.includes(this.color)) {
        this.$el.classList.add(`button-${this.color}`)
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.button {
  display: block;
  width: 150px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  border: 1px solid $theme-color;
  border-radius: 20px;
  color: $theme-color;
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

// 修饰样式

.button-white {
  border: 1px solid #fff;
  color: #fff;
}
</style>