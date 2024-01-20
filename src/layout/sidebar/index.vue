<template>
  <div class="sidebar-top">
    <img
      class="avatar"
      src="data:image/png;base64,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"
    />
  </div>
  <div class="menu">
    <div class="sidebar-middle">
      <CircleCheck
        class="sidebar-icon"
        color="#C2C2C2"
        height="24px"
        width="24px"
      ></CircleCheck>
      <Calendar
        class="sidebar-icon"
        color="#C2C2C2"
        height="24px"
        width="24px"
      ></Calendar>
      <Search
        class="sidebar-icon"
        color="#C2C2C2"
        height="24px"
        width="24px"
      ></Search>
    </div>
    <div class="sidebar-bottom">
      <Refresh
        class="sidebar-icon"
        color="#C2C2C2"
        height="24px"
        width="24px"
      ></Refresh>
      <BellFilled
        class="sidebar-icon"
        color="#C2C2C2"
        height="24px"
        width="24px"
      ></BellFilled>
      <QuestionFilled
        class="sidebar-icon"
        color="#C2C2C2"
        height="24px"
        width="24px"
      ></QuestionFilled>
    </div>
  </div>
</template>

<script setup lang="ts" name="SideBar">
import { ref } from 'vue'
let taskFocused = ref<string>(false)
let calendarFocused = ref<string>(false)
let searchFocused = ref<string>(false)
let refreshFocused = ref<string>(false)
let messageFocused = ref<string>(false)
let moreFocused = ref<string>(false)
</script>

<style scoped lang="scss">
.avatar {
  width: 32px;
  height: 32px;
  display: block;
  margin: 10px 8.5px;
}
.sidebar-middle {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu {
  display: flex;
  height: calc(100vh - 42px);
  flex-direction: column;
  justify-content: space-between;
}
.sidebar-bottom {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.sidebar-icon {
  margin: 15px;
}
</style>
