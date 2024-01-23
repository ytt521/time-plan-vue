<template>
  <div>
    <div class="title">提醒与通知</div>
    <div class="today">
      <div class="config">
        <span>每日提醒</span>
        <el-switch v-model="value1" size="5px" />
      </div>
      <p class="font-title">
        滴答清单可以在每天固定的时间提醒你今天的任务，你可以自定义在哪个时间提醒。
      </p>
      <div class="time-config">
        <span>每日提醒时间</span>
        <div class="right">
          <span class="time">09:00</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
    </div>
    <div class="web">
      <span>网页提醒</span>
      <el-switch v-model="value1" size="5px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(true)
</script>

<style scoped lang="scss">
.title {
  width: 451px;
  margin: 0 auto;
  font-size: 15px;
}
.today {
  width: 490px;
  margin: 15px auto;
  background-color: #fcfcfc;
  border-radius: 8px;
  font-size: 14px;
  padding: 5px 20px;
  .config {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .font-title {
    width: 380px;
    color: #a1a1a1;
    font-size: 13px;
    margin: 3px 0px;
    line-height: 1.5em;
  }
  .time-config {
    display: flex;
    margin: 20px 0px;
    justify-content: space-between;
    .right {
      display: flex;
      .time {
        color: #a7a7a7;
      }
    }
  }
}
.web {
  display: flex;
  width: 490px;
  margin: 15px auto;
  justify-content: space-between;
  align-items: center;
  background-color: #fcfcfc;
  border-radius: 8px;
  font-size: 14px;
  padding: 5px 20px;
}
</style>
