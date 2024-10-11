import { defineStore } from "pinia";
import { ref } from "vue";
import { reqCode } from "@/api/login";

export const useUserStore = defineStore('user', () => {
  const loginVisable = ref<boolean>(true)
  const code=ref<string>('')
  
  async function getCode(phoneNumber: string) {
    let result: any =await reqCode(phoneNumber)
    if (result.code == 200) {
      code.value = result.data
      return 'ok'
    } else {
      return Promise.reject(new Error(result.message))
    }
  }

  return {loginVisable,getCode,code}
})