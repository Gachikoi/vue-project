<template>
  <div class="app">
    <HospitalTop></HospitalTop>
    <div class="content">
      <RouterView to="/home"></RouterView>
    </div>
    <HospitalBottom ref="bottom"></HospitalBottom>
  </div>
</template>

<script lang="ts" setup name="App">
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    display: flex;
    width: 1200px;
    margin-top: 70px;
    margin-bottom: 100px;
  }

  .bottom{
    position: fixed;
    bottom: 0;
  }
}
</style>
