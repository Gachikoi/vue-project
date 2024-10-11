import request from "@/utils/request"
import type { ResponseData } from "./home";
enum API{
  GET_USER_CODE_URL = '/sms/send/',
  USER_LOGIN_URL ='/user/login'
}

export const reqCode = (phoneNumber: string) => request.get(API.GET_USER_CODE_URL + phoneNumber)
export const reqLogin = (data: LoginData) => request.post<any,UserLoginResponseData>(API.USER_LOGIN_URL, data)

//用户登录接口需要携带参数类型
export interface LoginData{
  phone: string;
  code: string;
}

//登录接口返回用户信息数据
export interface UserInfo{
  name: string,
  token:string
}

export interface UserLoginResponseData extends ResponseData{
  data:UserInfo
}