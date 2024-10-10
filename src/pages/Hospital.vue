<template>
  <div class="hospital">
    <div class="menu">
      <div class="top"><el-icon><home-filled /></el-icon><span>/医院信息</span></div>
      <el-menu :default-active="route.path" class="el-menu-vertical-demo" @open="" @close=""  @select="changeActive($event)">
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
import { useRouter,useRoute } from "vue-router";
import { ref } from "vue";
import { onMounted } from "vue";
import { useHospitalDetailStore} from "@/store/hospitalDetailStore";

const hospitalDetailStore = useHospitalDetailStore()


const router = useRouter()
//在Hospital界面中，每次刷新，menu的default-active都会回归到registration界面。
//但我们希望网站在刷新时能恢复之前menu-item的active情况，
//所以我们引入useRoute，通过route.path查询网站当前的路由，将其赋值给default - active，
//就可以实现保存路由导航状态的效果。
const route = useRoute()

//组件挂载完毕：通知pinia仓库发送请求获取医院详情的数据，存储在仓库中
onMounted(() => {
  hospitalDetailStore.getHospitalDetail(route.query.hoscode as string)
})

//改变当前active的菜单项
function changeActive(path: string) {
  router.push({ path: path })
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