<template>
  <div class="card">
    <div class="logo">
      <Svg name="logo" width="100%" height="100%"></Svg>
    </div>
    <div class="form-content">
      <form action="#">
        <div class="form-item">
          <div class="row">
            <User
              :color="accountFocused ? '#4772fa' : '#C2C2C2'"
              height="24px"
              width="24px"
            />
            <input
              class="item-input"
              type="text"
              v-model="loginInfo.userName"
              placeholder="手机号或邮箱"
              v-on:focus="accountFocused = true"
              v-on:blur="accountFocused = false"
            />
          </div>
          <span
            class="bt-line"
            :class="{ 'focus-span': accountFocused }"
          ></span>
          <div class="error-msg">
            <p>{{ loginErrorInfo }}</p>
          </div>
        </div>

        <div class="form-item">
          <div class="row">
            <Lock
              :color="passwordFocused ? '#4772fa' : '#C2C2C2'"
              height="24px"
              width="24px"
            />
            <input
              class="item-input"
              type="password"
              v-model="loginInfo.password"
              placeholder="密码"
              v-on:focus="passwordFocused = true"
              v-on:blur="passwordFocused = false"
            />
          </div>
          <span
            class="bt-line"
            :class="{ 'focus-span': passwordFocused }"
          ></span>
          <div class="error-msg">
            <p></p>
          </div>
        </div>
        <button class="login-btn" @click.prevent="localLogin">登录</button>
        <div class="link">
          <a href="">忘记密码</a>
          <router-link to="/register">注册</router-link>
        </div>
        <button class="wx-btn">微信登录</button>
        <div class="other-container">
          <span class="other">其他方式登录</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts" name="Login">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
let $router = useRouter()

let accountFocused = ref<boolean>(false)
let passwordFocused = ref<boolean>(false)
let loginErrorInfo = ref<string>('')

let loginInfo = reactive({ userName: '', password: '' })
// 本地登录
let localLogin = async () => {
  try {
    loginErrorInfo.value = ''
    await userStore.userLogin(loginInfo)
    $router.push('/dashboard')
  } catch (error) {
    loginErrorInfo.value = (error as Error).message
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 400px;
  height: 516px;
  position: relative;
  top: 80px;
  left: calc(50% - 200px);
  .logo {
    height: 66px;
  }
  .form-content {
    padding: 40px 50px 32px;
    border: 1px solid #f0f0f0;
    margin-top: 30px;
    .form-item {
      position: relative;
      .row {
        display: flex;
        align-items: center;
        position: relative;
        .item-input {
          border: none;
          padding: 10px 10px 8px 10px;
        }
        .item-input::placeholder {
          color: #d1d1d1;
        }
      }
      .bt-line {
        display: block;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      }
      .bt-line::before {
        content: '';
        width: 0px;
        height: 1px;
        background-color: #4772fa;
        border-radius: 1px;
        position: absolute;
        left: 51%;
        transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .bt-line::after {
        content: '';
        width: 0px;
        height: 1px;
        background-color: #4772fa;
        border-radius: 1px;
        position: absolute;
        right: 50%;
        transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .focus-span::before {
        width: 51%;
        left: 0;
      }
      .focus-span::after {
        width: 50%;
        right: 0;
      }

      .error-msg {
        display: flex;
        justify-content: flex-end;
        color: #ff3180;
        font-size: 13px;
        margin-top: 6px;
        min-height: 24px;
        line-height: 1.3;
      }
    }
    .login-btn {
      width: 100%;
      padding: 11px 16px;
      color: white;
      background-color: #4772fa;
      border: none;
      font-size: 14px;
      border-radius: 2px;
    }
    .link {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
    }
    .link a {
      text-decoration: none;
      color: #4772fa;
      font-size: 13px;
    }
    .wx-btn {
      width: 100%;
      padding: 11px 16px;
      color: white;
      background-color: #52bc70;
      border: none;
      font-size: 14px;
      border-radius: 2px;
      margin-top: 30px;
    }
    .other-container {
      text-align: center;
      .other {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.24);
        display: inline-block;
        margin-top: 25px;
      }
    }
  }
}
</style>
