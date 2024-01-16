<template>
  <div class="card">
    <div class="logo">
      <Svg name="logo" width="100%" height="100%"></Svg>
    </div>
    <div class="form-content">
      <form action="#">
        <div class="form-item">
          <div class="row">
            <User color="#C2C2C2" height="24px" width="24px" />
            <input
              class="item-input"
              type="text"
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
            <p></p>
          </div>
        </div>
        <div class="form-item">
          <div class="row">
            <ScaleToOriginal color="#C2C2C2" height="24px" width="24px" />
            <input
              class="item-input"
              type="text"
              placeholder="图形验证码"
              v-on:focus="captchaFocused = true"
              v-on:blur="captchaFocused = false"
            />
            <img :src="img" class="captcha" />
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
            <Lock color="#C2C2C2" height="24px" width="24px" />
            <input
              class="item-input"
              type="password"
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
        <button class="login-btn">登录</button>
        <div class="link">
          <a href="">忘记密码</a>
          <a href="">注册</a>
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
import { ref } from 'vue'
let accountFocused = ref<boolean>(false)
let captchaFocused = ref<boolean>(false)
let passwordFocused = ref<boolean>(false)
let img = ref<string>(
  'data:image/png;base64,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',
)
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
    .login-btn {
      width: 100%;
      padding: 11px 16px;
      color: white;
      background-color: #4772fa;
      border: none;
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
