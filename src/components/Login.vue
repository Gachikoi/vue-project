<template>
  <div class="login">
    <el-dialog v-model="userStore.loginVisable" title="用户登录" width="500">
      <div class="content">
        <div class="left">
          <div class="number-login" v-if="!isWeChatLogin">
            <el-form>
              <el-form-item>
                <el-input placeholder="请输入手机号码" :prefix-icon="User"
                  v-model="loginParam.phoneNumber"></el-input></el-form-item>
              <el-form-item>
                <el-input placeholder="请输入手机验证码" :prefix-icon="Lock" v-model="userStore.code"></el-input></el-form-item>
              <el-form-item>
                <el-button :disabled="!isPhoneNumber || isCountingDown">
                  <span v-if="isCountingDown">获取验证码({{ count }})</span>
                  <span v-else @click="isCountingDown=isPhoneNumber, getCode()">获取验证码</span>
                </el-button>
              </el-form-item>
            </el-form>
            <div class="bottom">
              <el-button style="width: 90%;" size="default" type="primary" :disabled="!isPhoneNumber">用户登录</el-button>
              <p @click="changeLoginWay">微信扫码登录</p>
            </div>
          </div>
          <div class="wechat-login" v-else>

            <div class="bottom">
              <p @click="changeLoginWay">短信验证码登录</p>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="left-code">
              <img src="../assets/images/code_login_wechat.png" alt="">
              <p>微信扫一扫关注</p>
              <p>“快速预约挂号”</p>
            </div>
            <div class="right-code">
              <img src="../assets/images/code_app.png" alt="">
              <p>扫一扫下载</p>
              <p>“预约挂号”APP</p>
            </div>
          </div>
          <div class="bottom">
            <p>尚医通官方指定平台</p>
          </div>
        </div>
      </div>
      <template #footer><el-button type="primary" size="default"
          @click="userStore.loginVisable = false">关闭窗口</el-button></template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { User, Lock } from "@element-plus/icons-vue"
import { useUserStore } from '@/store/userStore'
import { ref, reactive, computed, watch } from 'vue'
import { ElMessage } from "element-plus";

const userStore = useUserStore()
const isWeChatLogin = ref<boolean>(false)
const loginParam = reactive<{ phoneNumber: string }>({
  phoneNumber: ''
})
const isCountingDown = ref<boolean>(false)
const count = ref<number>(5)
let timer: number

let isPhoneNumber = computed(() => {
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  return reg.test(loginParam.phoneNumber)
})

function changeLoginWay() {
  isWeChatLogin.value = !isWeChatLogin.value
}

async function getCode() {
  //解决在el-button disabled的时候仍可以发送请求的bug
  if (!isPhoneNumber.value) return
  timer = setInterval(() => {
    count.value--
  }, 1000)
  //getCode是一个async函数，一定会返回一个Promise对象
  try {
    await userStore.getCode(loginParam.phoneNumber)
  } catch (error) {
    ElMessage({
      type: 'error',
      message: `${error}`
    })
  }
}

watch(count, (value) => {
  if (value == 0) {
    count.value = 5
    isCountingDown.value = false
    clearInterval(timer)
  }
})
</script>

<style lang="scss" scoped>
.login {
  :deep(.el-dialog) {
    width: 600px;

    .el-dialog__body {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    .left {
      width: 48%;
      border: 1px solid #ccc;
      padding: 20px;

      .number-login {
        .bottom {
          padding-top: 20px;
          border-top: 1px solid #ccc;
          display: flex;
          flex-direction: column;
          align-items: center;

          p {
            margin-top: 10px;
          }
        }
      }

    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 48%;
      padding: 20px;

      .top {
        display: flex;
        justify-content: space-between;

        .left-code {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 48%;

          img {
            width: 100%;
          }
        }

        .right-code {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 48%;

          img {
            width: 100%;
          }
        }
      }

      .bottom {
        font-style: italic;
        font-weight: bolder;
        font-size: x-large;
      }
    }
  }
}
</style>
