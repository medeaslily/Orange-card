<template>
  <div id="app">
    <BaseHeader></BaseHeader>
    <router-view></router-view>
    <BaseFooter></BaseFooter>
  </div>
</template>

<style>

</style>
<script setup>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
</script>