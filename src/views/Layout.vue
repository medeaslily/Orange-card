<template>
  <div class="page">
    <!-- 头部 -->
    <com-header></com-header>
      <router-view />
    <!-- 尾部 -->
    <com-footer></com-footer>
  </div>
</template>
<script>


export default {
  name: 'layout-page',
}
</script>
<style>
</style>