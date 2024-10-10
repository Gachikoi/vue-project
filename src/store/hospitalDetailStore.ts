import { defineStore } from "pinia";
import { reqHospitalDepartment, reqHospitalDetail } from "@/api/hospital";
import { type HospitalDetailResponseData, type HospitalDetail,type HospitalDepartmentResponseData,type HospitalDepartmentArr } from "@/api/hospital";
import { ref } from "vue";

export const useHospitalDetailStore = defineStore('HospitalDetail', () => {
  let hospitalInfo = ref<HospitalDetail>({} as HospitalDetail) 
  let hospitalDepartment=ref<HospitalDepartmentArr>([{}] as HospitalDepartmentArr)

  async function getHospitalDetail(hoscode: string) {
    const result: HospitalDetailResponseData = await reqHospitalDetail(hoscode)
    if (result.code == 200) {
      hospitalInfo.value = result.data
    }
  }

  async function getHospitalDepartment(hoscode: string) {
    const result: HospitalDepartmentResponseData = await reqHospitalDepartment(hoscode)
    if (result.code == 200) {
      hospitalDepartment.value = result.data
    }
  }

  return { hospitalInfo, getHospitalDetail,getHospitalDepartment }
})


// export const useHospitalDetailStore = defineStore('HospitalDetail', {
//   state: () => {
//     return {
//       //医院详情的数据
//       hospitalInfo: {},
//     }
//   },
//   actions: {
//     //获取医院详情的方法
//     async getHospitalDetail(hoscode: string) {
//       let result = await reqHospitalDetail(hoscode);
//       if (result.code == 200) {
//         this.hospitalInfo = result.data;
//       }
//     }
//   }
// })