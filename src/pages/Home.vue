<template>
  <div class="home-container">
    <Silder></Silder>
    <Search></Search>
    <el-row :gutter="20">
      <el-col :span="20">123</el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import Silder from '@/components/Carousel.vue';
import Search from '@/components/Search.vue';
</script>

<style lang="scss" scoped>
.home-container {
  width: 1200px;
  height: 1200px;
  margin-top: 20px;
}
</style>
