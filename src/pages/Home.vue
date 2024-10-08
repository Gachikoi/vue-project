<template>
  <div class="home-container">
    <Silder></Silder>
    <Search></Search>
  </div>
</template>

<script lang="ts" setup>
import Silder from '@/components/Silder.vue';
import Search from '@/components/Search.vue';
</script>

<style lang="scss" scoped>
.home-container {
  width: 1200px;
  height: 1200px;
  margin-top: 20px;
}
</style>
