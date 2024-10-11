<template>
  <div class="home-container">
    <Carousel class="carousel"></Carousel>
    <Search class="search"></Search>
    <el-row :gutter="20">
      <el-col :span="20">
        <Level @getLevel="getLevel"></Level>
        <div class="card-container">
          <HospitalCard v-if="hospitalArr.length != 0" class="hosptial-card" v-for="(item, index) in hospitalArr"
            :key="index" :hospitalInfo="item">
          </HospitalCard>
          <div v-else class="empty">
            <el-empty description="暂无数据"></el-empty>
        </div>
  </div>
  <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
    :background="false" layout="prev, pager, next, jumper,->,total,sizes" :total="total"
    @current-change="paginationChange" @size-change="paginationChange" />
  </el-col>
  <el-col :span="4"><Tips></Tips></el-col>
  </el-row>
  </div>
</template>

<script lang="ts" setup>
import Carousel from '@/components/Carousel.vue';
import Search from '@/components/Search.vue';
import Level from '@/components/Level.vue';
import HospitalCard from '@/components/HospitalCard.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { reqHospital, type HospitalArr, type HospitalResponseData } from '@/api/home';
import Tips from '@/components/Tips.vue';
//分页器页码
const pageNo = ref<number>(1)
//分页可存储卡片的数量
const pageSize = ref<number>(10)
//每页的医院信息数组
const hospitalArr = ref<HospitalArr>([])
//医院总数
const total = ref<number>(0)

const hostype = ref<string>('')

onMounted(() => {
  getHospitalInfo()
})

const getHospitalInfo = async () => {
  const result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value, hostype.value)
  if (result.code == 200) {
    hospitalArr.value = result.data.content
    total.value = result.data.totalElements
  }
}

const paginationChange = async () => {
  getHospitalInfo()
  // emits('pagination-change',document.querySelector('.home-container')!.getBoundingClientRect)
}

//子组件自定义事件：获取子组件产地过来的等级参数
const getLevel = (level: string) => {
  hostype.value = level
  getHospitalInfo()
}

// const emits=defineEmits(['pagination-change'])
</script>

<style lang="scss" scoped>
.home-container {
  width: 1200px;
  margin-top: 20px;

  .carousel {
    margin-bottom: 20px;
  }

  .search {
    margin-bottom: 20px;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .empty {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .hosptial-card {
      width: 48%;
      margin: 10px 0;
    }
  }
}
</style>
