import request from "@/utils/request";

enum API {
  HOSPITAL_DETAIL_URL = '/hosp/hospital/'
}

export const reqHospitalDetail = (hoscode: string) =>  request.get<any,HospitalDetailResponseData>(API.HOSPITAL_DETAIL_URL + hoscode) 

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
    "rule":string[]
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
  data:HospitalDetail
}