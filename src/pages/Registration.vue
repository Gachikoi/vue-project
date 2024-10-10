<template>
  <div class="registration">
    <div class="top">
      <div class="title">{{ hospitalDetailStore.hospitalInfo.hospital?.hosname }}</div>
      <div class="level">{{ hospitalDetailStore.hospitalInfo.hospital?.param.hostypeString }}</div>
    </div>
    <div class="content">
      <div class="left"><img :src="`data:image/jpeg;base64,` + hospitalDetailStore.hospitalInfo.hospital?.logoData"
          alt="医院图片"></div>
      <div class="right">
        <div>挂号规则</div>
        <div class="time">预约周期：{{ hospitalDetailStore.hospitalInfo.bookingRule?.cycle }} 放号时间：{{
          hospitalDetailStore.hospitalInfo.bookingRule?.releaseTime }} 停挂时间：{{
            hospitalDetailStore.hospitalInfo.bookingRule?.stopTime }}</div>
        <div class="address">具体地址：{{ hospitalDetailStore.hospitalInfo.hospital?.param.fullAddress }}</div>
        <div class="route">乘车路线:{{ hospitalDetailStore.hospitalInfo.hospital?.route }}</div>
        <div class="rule">预约挂号规则</div>
        <div class="rule-info" v-for="(item,index) in hospitalDetailStore.hospitalInfo.bookingRule?.rule" :key="index">{{ item }}</div>
      </div>
    </div>
    <div class="department" v-if="hospitalDetailStore.hospitalDepartment.length != 0">
      {{ hospitalDetailStore.hospitalDepartment[0] }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHospitalDetailStore } from '@/store/hospitalDetailStore';
const hospitalDetailStore = useHospitalDetailStore()

</script>

<style lang="scss" scoped>
.registration {
  .top {
    display: flex;
    align-items: center;

    .title {
      margin-right: 20px;
      font-size: 30px;
    }

    .level {
      color: #bbb;
    }
  }

  .content {
    display: flex;
    margin-top: 10px;

    .left {
      width: 100px;
      margin-right: 10px;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }

    .right {
      margin-top: 10px;
      margin-bottom: 10px;

      .time,.address,.route ,.rule-info{
        color: #bbb;
      }

      .rule{
        margin-top: 10px;
      }
    }
  }
}
</style>