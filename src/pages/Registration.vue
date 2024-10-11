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
        <div class="rule-info" v-for="(item, index) in hospitalDetailStore.hospitalInfo.bookingRule?.rule" :key="index">
          {{ item }}</div>
      </div>
    </div>
    <div class="department" v-if="hospitalDetailStore.hospitalDepartment.length != 0">
      <ul class="nav">
        <li :class="{ active: index == currentIndex }"
          v-for="(department, index) in hospitalDetailStore.hospitalDepartment" :key="department.depcode"
          @click="changeIndex(index)">{{ department.depname
          }}</li>
      </ul>
      <ul class="info">
        <li v-for="department in hospitalDetailStore.hospitalDepartment" :key="department.depcode">
          <h1 class="current">{{ department.depname }}</h1>
          <ul>
            <li @click="showLogin" v-for="item in department.children" :key="item.depcode">{{ item.depname }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHospitalStore } from '@/store/hospitalDetailStore';
import { ref } from 'vue';
import { useUserStore } from '@/store/userStore';
const userStore=useUserStore()
const hospitalDetailStore = useHospitalStore()
const currentIndex = ref<number>(0)

function changeIndex(index:number) {
  currentIndex.value = index
  document.querySelectorAll('.current')[currentIndex.value].scrollIntoView({
    behavior:'smooth'
  })
}

function showLogin() {
  userStore.loginVisable=true
}
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

      .time,
      .address,
      .route,
      .rule-info {
        color: #bbb;
      }

      .rule {
        margin-top: 10px;
      }
    }
  }

  .department {
    display: flex;
    width: 100%;
    height: 500px;
    margin-top: 20px;

    .nav {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 80px;
      background: rgb(248, 248, 248);

      li {
        display: flex;
        justify-content: center;
        color: #7f7f7f;
        font-size: 14px;
        line-height: 40px;
        transition: all 0.3s ease-in-out;

        &.active {
          border-left: 1px solid red;
          background-color: white;
          color: red;
        }
      }
    }

    .info {
      flex: 1;
      overflow: scroll;

      &::-webkit-scrollbar{
        display: none;
      }

      li {
        h1 {
          margin-bottom: 20px;
          background-color: rgb(248, 248, 248);
          color: #7f7f7f;
          text-indent: 2em;
          line-height: 30px;
        }
        ul{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          li{
            width: 33%;
            padding-left: 2em;
            margin-bottom: 20px;
            color:#7f7f7f
          }
        }
      }
    }
  }
}
</style>