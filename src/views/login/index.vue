<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <Svg name="logo" width="100%" height="100%"></Svg>
      </div>
      <div class="form">
        <form action="#">
          <div class="form-item">
            <UserFilled color="#C2C2C2" height="24px" width="24px" />
            <input class="account" type="text" placeholder="手机号或邮箱" />
          </div>
          <div class="error"></div>
          <div class="form-item">
            <UserFilled color="#C2C2C2" height="24px" width="24px" />
            <input class="account" type="text" placeholder="图形验证码" />
          </div>
          <div class="error"></div>
          <div class="form-item">
            <UserFilled color="#C2C2C2" height="24px" width="24px" />
            <input class="account" type="text" placeholder="密码" />
          </div>
          <div class="error"></div>
          <button class="login-btn">登录</button>
        </form>
        <div class="link">
          <a href="">忘记密码</a>
          <a href="">注册</a>
        </div>
        <button class="wx-btn">微信登录</button>
        <div class="other-container">
          <span class="other">其他方式登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Login"></script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .content {
    width: 400px;
    height: 516px;
    margin: 80px auto;
    .logo {
      width: 100%;
      height: 66px;
    }
    .form {
      width: 100%;
      height: 450px;
      padding: 40px 50px 32px;
      border: 1px solid #f0f0f0;
      margin-top: 30px;

      .form-item {
        width: 246px;
        height: 36px;
        display: flex;
        align-items: center;
        .account {
          border: none;
          outline: none;
          padding: 5px 10px 5px 8px;
        }
        .account::placeholder {
          color: #d1d1d1;
        }
      }
      .error {
        height: 30px;
        width: 100%;
        border-top: 1px solid#d1d1d1;
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
}
</style>
