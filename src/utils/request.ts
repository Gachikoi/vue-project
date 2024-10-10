import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: '/api', //请求的基础路径的设置
  timeout:5000 //超时的事件
})

request.interceptors.request.use((config) => {
   return config
})

request.interceptors.response.use((response) => {
  return response.data
}, (error => {
  let status = error.response.status
  switch (status) {
    case 404:
      ElMessage({
        type: 'error',
        message:'请求路径出现问题'
      })
      break
    case 500 | 501 | 502 | 503 | 504 | 505:
      ElMessage({
        type: 'error',
        message:'服务器出现问题'
      })
      break
    default:
      ElMessage({
        type: 'error',
        message:'其他问题'
      })
  }
}))

export default request