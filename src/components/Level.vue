<template>
  <div class="level-container">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul>
        <li :class="{ active: activeFlag ==''}" @click="changeLevel('')">全部</li>
        <li v-for="level in levelArr" :key="level.value" :class="{ active: activeFlag == level.value }" @click="changeLevel(level.value)">{{ level.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type HospitalLevelAndRegionArr, reqHospitalLevelAndRegion, type HospitalLevelAndRegionResponseData } from '@/api/home';
import { onMounted, ref } from 'vue';

const levelArr = ref<HospitalLevelAndRegionArr>([])
const activeFlag =ref<string>('')

onMounted(() => {
  getLevel()
})

const getLevel = async () => {
  let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion("HosType")
  if (result.code == 200) {
    levelArr.value = result.data
  }
}

const changeLevel = (val:string) => {
  activeFlag.value = val
  emit('getLevel',val)
}

const emit=defineEmits(['getLevel'])
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  h1{
    margin-bottom: 5px;
  }

  ul {
    display: flex;

    .active{
      color: #55a6fe;
    }

    li {
      margin-left: 10px;
      &:hover {
        color: #55a6fe;
      }
    }
  }
}
</style>