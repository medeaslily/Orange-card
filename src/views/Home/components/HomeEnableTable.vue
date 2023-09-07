<template>
  <li class="table" @click="changeTab">
    <span class="f-18">{{ tabText }}</span>
  </li>
</template>
<script>
export default {
  name: 'HomeEnableTable',
  props: {
    tabText: {
      type: String,
      default: ''
    },
  },
  methods: {
    changeTab() {
      this.$emit('changeTab')
    }
  },
}
</script>
<style lang="scss" scoped>
.f-18 {
  font-size: 18px;
  line-height: 50px;
}

@mixin change-tab {
  color: #fff;
  background-color: $theme-color;
}

.table {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px -1px 23px rgba(192,192,192,0.35);

  &:hover {
    @include change-tab;
  }

  &.active {
    @include change-tab;
  }
}
</style>