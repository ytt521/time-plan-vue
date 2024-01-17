<template>
  <div class="card">
    <div class="logo">
      <Svg name="logo" width="100%" height="100%" fill="yellow"></Svg>
    </div>
    <div class="form-content">
      <form action="#">
        <div class="form-item">
          <div class="row">
            <User
              :color="nickNameFocused ? '#4772fa' : '#C2C2C2'"
              height="24px"
              width="24px"
            />
            <input
              class="item-input"
              type="text"
              placeholder="昵称（可选）"
              v-on:focus="nickNameFocused = true"
              v-on:blur="nickNameFocused = false"
            />
          </div>
          <span
            class="bt-line"
            :class="{ 'focus-span': nickNameFocused }"
          ></span>
          <div class="error-msg">
            <p></p>
          </div>
        </div>
        <div class="form-item">
          <div class="row">
            <Phone
              :color="phoneFocused ? '#4772fa' : '#C2C2C2'"
              height="24px"
              width="24px"
            />
            <input
              class="item-input"
              type="text"
              placeholder="手机号"
              v-on:focus="phoneFocused = true"
              v-on:blur="phoneFocused = false"
            />
          </div>
          <span class="bt-line" :class="{ 'focus-span': phoneFocused }"></span>
          <div class="error-msg">
            <p></p>
          </div>
        </div>
        <div class="form-item">
          <div class="row">
            <ScaleToOriginal
              :color="captchaFocused ? '#4772fa' : '#C2C2C2'"
              height="24px"
              width="24px"
            />
            <input
              class="item-input"
              type="text"
              placeholder="图形验证码"
              v-on:focus="captchaFocused = true"
              v-on:blur="captchaFocused = false"
            />
            <img :src="codeImg" class="captcha" />
          </div>
          <span
            class="bt-line"
            :class="{ 'focus-span': captchaFocused }"
          ></span>
          <div class="error-msg">
            <p></p>
          </div>
        </div>
        <div class="form-item">
          <div class="row">
            <Svg
              name="code"
              width="24px"
              height="24px"
              :fill="codeFocused ? '#4772fa' : '#C2C2C2'"
            ></Svg>
            <input
              class="item-input"
              type="text"
              placeholder="手机验证码"
              v-on:focus="codeFocused = true"
              v-on:blur="codeFocused = false"
            />
          </div>
          <span class="bt-line" :class="{ 'focus-span': codeFocused }"></span>
          <div class="error-msg">
            <p></p>
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
              type="text"
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
        <button class="register-btn">注册</button>
        <div class="link">
          <a href="">邮箱注册</a>
          <a href="">已有账户?</a>
        </div>
        <button class="wx-btn">微信</button>
        <div class="guideline">
          <input type="checkbox" style="margin: 0 5px 0 0" />
          <p>
            同意
            <a href="#">使用条款</a>
            和
            <a href="#">隐私政策</a>
          </p>
        </div>
        <div class="other-container">
          <span class="other">其他方式登录</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts" name="Register">
import { ref, onMounted } from 'vue'
import { reqGenerateCaptcha } from '@/api/user'
import type { CaptchaResponse } from '@/api/user/type'
let nickNameFocused = ref<boolean>(false)
let phoneFocused = ref<boolean>(false)
let captchaFocused = ref<boolean>(false)
let codeFocused = ref<boolean>(false)
let passwordFocused = ref<boolean>(false)
let codeImg = ref<string>()
let uid = ref<string>()
let generateCaptcha = async () => {
  let result: CaptchaResponse = await reqGenerateCaptcha()
  if (result.code == 200) {
    codeImg.value = result.data.img
    uid.value = result.data.uid
  }
}
onMounted(() => {
  generateCaptcha()
})
</script>

<style scoped lang="scss">
.card {
  width: 400px;
  height: 737px;
  position: relative;
  top: 80px;
  left: calc(50% - 200px);
  .logo {
    height: 66px;
  }
  .form-content {
    border: 1px solid rgba(0, 0, 0, 0.06);
    padding: 40px 50px 32px;
    margin-top: 30px;
    .form-item {
      position: relative;
      .row {
        display: flex;
        align-items: center;
        .item-input {
          border: none;
          padding: 10px 10px 8px 10px;
        }
        .item-input::placeholder {
          color: #d1d1d1;
        }
        .captcha {
          position: absolute;
          right: 5px;
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
    .register-btn {
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
    .guideline {
      display: flex;
      margin-top: 20px;
      font-size: 14px;
    }
  }
}
a {
  text-decoration: none;
  color: #4772fa;
}
</style>
