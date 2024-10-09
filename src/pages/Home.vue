<template>
  <div class="home-container">
    <Silder></Silder>
    <Search></Search>
    <el-row :gutter="20">
      <el-col :span="20">
        <Level></Level>
        <div class="card-container">
          <HospitalCard class="hosptial-card" v-for="(item,index) in hasHospitalArr" :key="index" :hospitalInfo="item"></HospitalCard>
        </div>
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
          :background="false" layout="prev, pager, next, jumper,->,total,sizes" :total="total" @current-change="paginationChange" @size-change="paginationChange"/>
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import Silder from '@/components/Carousel.vue';
import Search from '@/components/Search.vue';
import Level from '@/components/Level.vue';
import HospitalCard from '@/components/HospitalCard.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { reqHospital,type Content,type HospitalResponseData } from '@/api/home';

//分页器页码
const pageNo = ref<number>(1)
//分页可存储卡片的数量
const pageSize = ref<number>(10)
//每页的医院信息数组
const hasHospitalArr = ref<Content>([])
//医院总数
const total=ref<number>(0)

onMounted(() => {
  getHospitalInfo()
})

const getHospitalInfo = async () => {
  const result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value)
  if (result.code == 200) {
    hasHospitalArr.value = result.data.content
    total.value = result.data.totalElements 
  }
}

const paginationChange = async () => {
  getHospitalInfo()
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 1200px;
  height: 1200px;
  margin-top: 20px;

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .hosptial-card {
      width: 48%;
      margin: 10px 0;
    }
  }
}
</style>
