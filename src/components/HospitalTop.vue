<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="goHome">
        <img src="../assets/images/logo.png" alt="logo">
        <p></p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login" @click="showLogin">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';
const useStore=useUserStore()
const router = useRouter()
function goHome() {
  router.push({ path: '/home' })
}

function showLogin() {
  useStore.loginVisable=true
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 1px 1px 1px rgba($color: #000000, $alpha: 0.1);

  .content {
    width: 1200px;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 50px;
        margin-right: 10px;
      }

      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #bbb;

      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>
