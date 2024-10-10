import request from "@/utils/request";
import { extend } from "dayjs";

enum API {
  HOSPITAL_DETAIL_URL = '/hosp/hospital/',
  HOSPITAL_DEPARTMENT_URL = '/hosp/hospital/department/'
}

export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetailResponseData>(API.HOSPITAL_DETAIL_URL + hoscode)
export const reqHospitalDepartment=(hoscode:string)=>request.get<any,HospitalDepartmentResponseData>(API.HOSPITAL_DEPARTMENT_URL+hoscode)

export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

export interface HospitalDetail {
  "bookingRule": {
    "cycle": number,
    "releaseTime": string,
    "stopTime": string,
    "quitDay": number,
    "quitTime": string,
    "rule": string[]
  },
  "hospital": {
    "id": string,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
      "hostypeString": string,
      "fullAddress": string
    },
    "hoscode": string,
    "hosname": string,
    "hostype": string,
    "provinceCode": string,
    "cityCode": string,
    "districtCode": string,
    "address": string,
    "logoData": string,
    "intro": null,
    "route": string,
    "status": number,
  }
}

export interface HospitalDetailResponseData extends ResponseData {
  data: HospitalDetail
}


export interface HospitalDepartment{
  "depcode": string,
  "depname": string,
  "children"?:HospitalDepartment[]
}

export type HospitalDepartmentArr = HospitalDepartment[]

export interface HospitalDepartmentResponseData extends ResponseData {
  data:HospitalDepartmentArr
}