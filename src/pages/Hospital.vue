<template>
  <div class="hospital">
    <div class="menu">
      <div class="top"><el-icon><home-filled /></el-icon><span>/医院信息</span></div>
      <el-menu :default-active="route.path" class="el-menu-vertical-demo" @open="" @close=""
        @select="changeActive($event)">
        <el-menu-item index="/hospital/registration">
          <el-icon>
            <document />
          </el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail">
          <el-icon>
            <icon-menu />
          </el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice">
          <el-icon>
            <setting />
          </el-icon>
          <span>预约须知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/closeinfo">
          <el-icon>
            <info-filled />
          </el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/searchandcancel">
          <el-icon>
            <search />
          </el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Setting, InfoFilled, Search, HomeFilled } from "@element-plus/icons-vue"
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
import { useHospitalStore } from "@/store/hospitalDetailStore";

const hospitalDetailStore = useHospitalStore()


const router = useRouter()
//在Hospital界面中，每次刷新，menu的default-active都会回归到registration界面。
//但我们希望网站在刷新时能恢复之前menu-item的active情况，
//所以我们引入useRoute，通过route.path查询网站当前的路由，将其赋值给default - active，
//就可以实现保存路由导航状态的效果。
const route = useRoute()

//组件挂载完毕：通知pinia仓库发送请求获取医院详情的数据，存储在仓库中
onMounted(() => {
  hospitalDetailStore.getHospitalDetail(route.query.hoscode as string)
  hospitalDetailStore.getHospitalDepartment(route.query.hoscode as string)
})

//改变当前active的菜单项
function changeActive(path: string) {
  //当我们点击HospitalCard或点击Search的推荐信息，第一次进入/hospital/registration时，会带有query参数。
  //但是当我们在/hospital的子路由中跳转时，如果下面这行代码不设置query参数，跳转后hoscode参数就会丢失。
  //这时，如果我们刷新页面，Hospital组件重新挂载，route.query.hoscode不存在，上文onMounted中的getHospitalDetail便无法获取医院详情将其存储到pinia中。
  //同时由于pinia并没有进行数据持久化，页面一刷新，pinia中的数据就会丢失，所以刷新后页面便无法显示数据了。
  //因此下面这行代码一定要带上query参数。
  router.push({ path: path, query: { hoscode: route.query.hoscode } })
}
</script>

<style lang="scss" scoped>
.hospital {
  display: flex;
  width: 100%;
  margin-top: 20px;


  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
      color: #bbb;
    }
  }

  .content {
    flex: 8;
  }
}
</style>