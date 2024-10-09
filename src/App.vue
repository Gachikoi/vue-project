<template>
  <div class="container">
    <HospitalTop></HospitalTop>
    <div class="content">
      <RouterView to="/home"></RouterView>
    </div>
    <HospitalBottom></HospitalBottom>
  </div>
</template>

<script lang="ts" setup name="App">
import { useRoute } from 'vue-router';

const router = useRoute()
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    display: flex;
    width: 1200px;
    height: 2000px;
    margin-top: 70px;
  }
}
</style>
