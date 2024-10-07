<template>
  <div class="bottom">
    <div class="content">
      <div class="left">
        <a href="https://beian.miit.gov.cn/" target="_blank">陕ICP备2024049615号</a>
      </div>
      <div class="right">
        <p>联系我们</p>
        <p>合作伙伴</p>
        <p>用户协议</p>
        <p>隐私协议</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.bottom {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #f0f2f5;

  .content {
    display: flex;
    width: 1200px;
    justify-content: space-between;
    font-size: 14px;
    color: #aaa;

    .left {
      display: flex;
      align-items: center;
    }

    .right {
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
      }
    }
  }
}
</style>
