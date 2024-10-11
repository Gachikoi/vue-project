import { defineStore } from "pinia";
import { reqHospitalDepartment, reqHospitalDetail } from "@/api/hospital";
import { type HospitalDetailResponseData, type HospitalDetail, type HospitalDepartmentResponseData, type HospitalDepartmentArr } from "@/api/hospital";
import { ref } from "vue";

export const useHospitalStore = defineStore('HospitalDetail', () => {
  let hospitalInfo = ref<HospitalDetail>({} as HospitalDetail)
  let hospitalDepartment = ref<HospitalDepartmentArr>([{}] as HospitalDepartmentArr)

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

  return { hospitalInfo, hospitalDepartment, getHospitalDetail, getHospitalDepartment }
}) 