<template>
  <el-card class="box-card" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="name">{{ hospitalInfo.hosname }}</div>
        <div class="tip">
          <div class="level">{{hospitalInfo.param.hostypeString}}</div>
          <div class="time">{{hospitalInfo.bookingRule.releaseTime}}</div>
        </div>
      </div>
      <div class="right"><img :src="`data:image/jpeg;base64,`+hospitalInfo.logoData" :alt="hospitalInfo.hosname"></div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
// defineProps(['hospitalInfo'])
import { type Hospital } from '@/api/home';
defineProps<{hospitalInfo:Hospital}>()
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left{
    width: 60%;
    .tip{
      display: flex;
      justify-content: space-between;
    }
  }

  .right {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>