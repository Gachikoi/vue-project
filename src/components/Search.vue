<template>
  <div class="search">
    <el-autocomplete clearable placeholder="请输入医院名称" v-model="hosname" :fetch-suggestions="fetchData" @select="goDetail"></el-autocomplete>
    <el-button type="primary" size="default">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { reqSearchHosptial,type SearchHosptial,type Hospital } from '@/api/home';
import { useRouter } from 'vue-router';

const router=useRouter()
//收集搜索的关键字（医院的名字）
const hosname = ref<string>('')
//输入时，查询相关数据
async function fetchData(keyword:string,callback:any){
  const result: SearchHosptial = await reqSearchHosptial(keyword)
  if (result.code == 200) {
    const showData = result.data.map(item => {
      return {
        value: item.hosname,
        hoscode:item.hoscode
      }
    })
    callback(showData)
  }
}
//点击suggestions时触发@select事件，跳转到详情页
function goDetail(item:Hospital) {
  router.push({path:'hospital/registration',query:{hoscode:item.hoscode}})
}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  justify-content: center;
  height: 40px;

  :deep(.el-autocomplete) {
    width: 800px;
    height: 100%;

    .el-input {
      height: 100%;
      .el-input__wrapper {
        height: 100%;
        background-color: white;
        padding-left: 15px;
        margin-right: 10px;
        border: 2px solid white;
        border-radius: 10px;
        font-size: 14px;
        box-shadow: 0px 0px 2px 2px rgba($color: #b2b2b247, $alpha: 0.3);

        &::placeholder {
          color: #bbb;
        }

        &:focus {
          outline: none;
          border: 2px solid #55a6fe;
        }
      }
    }
  }

  :deep(.el-button) {
    width: 100px;
    height: 100%;
    color: white;
    background-color: #55a6fe;
    border-radius: 10px;
    box-shadow: 0px 0px 2px 2px rgba($color: #b2b2b247, $alpha: 0.3);
  }
}
</style>