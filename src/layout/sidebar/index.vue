<template>
  <div class="sidebar-top" @click.stop="showUserMenu">
    <img
      class="avatar"
      src="data:image/png;base64,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"
    />
  </div>
  <div class="user-menu" v-if="showMenu">
    <ul>
      <li>
        <div class="menu-item" @click="setting">
          <Setting color="#191919" height="15px" width="15px" />
          <span style="margin-left: 8px">设置</span>
        </div>
      </li>
      <li>
        <div class="menu-item">
          <Setting color="#191919" height="15px" width="15px" />
          <span style="margin-left: 8px">统计</span>
        </div>
      </li>
      <li>
        <div class="menu-item">
          <Setting color="#191919" height="15px" width="15px" />
          <span style="margin-left: 8px">高级会员</span>
        </div>
      </li>
      <li>
        <div class="menu-item">
          <Setting color="#191919" height="15px" width="15px" />
          <span style="margin-left: 8px">退出登录</span>
        </div>
      </li>
    </ul>
  </div>
  <div class="menu">
    <div class="sidebar-middle">
      <CircleCheck
        class="sidebar-icon"
        :class="focusIndex == 1 ? 'active' : ''"
        color="#C2C2C2"
        height="24px"
        width="24px"
        @click="goTasks()"
      ></CircleCheck>
      <Calendar
        class="sidebar-icon"
        :class="focusIndex == 2 ? 'active' : ''"
        color="#C2C2C2"
        height="24px"
        width="24px"
        @click="goCalendar()"
      ></Calendar>
      <Search
        class="sidebar-icon"
        :class="focusIndex == 3 ? 'active' : ''"
        color="#C2C2C2"
        height="24px"
        width="24px"
        @click="search()"
      ></Search>
    </div>
    <div class="sidebar-bottom">
      <Refresh
        class="sidebar-icon"
        :class="focusIndex == 4 ? 'active' : ''"
        color="#C2C2C2"
        height="24px"
        width="24px"
        @click="refresh()"
      ></Refresh>
      <BellFilled
        class="sidebar-icon"
        :class="focusIndex == 5 ? 'active' : ''"
        color="#C2C2C2"
        height="24px"
        width="24px"
        @click="message()"
      ></BellFilled>
      <QuestionFilled
        class="sidebar-icon"
        :class="focusIndex == 6 ? 'active' : ''"
        color="#C2C2C2"
        height="24px"
        width="24px"
        @click.stop="more()"
      ></QuestionFilled>
      <div class="more-menu" v-if="showMoreMenu">
        <ul>
          <li>
            <div class="menu-item">
              <Setting color="#191919" height="15px" width="15px" />
              <span style="margin-left: 8px">首页</span>
            </div>
          </li>
          <li>
            <div class="menu-item">
              <Setting color="#191919" height="15px" width="15px" />
              <span style="margin-left: 8px">快捷键</span>
            </div>
          </li>
          <li>
            <div class="menu-item">
              <Setting color="#191919" height="15px" width="15px" />
              <span style="margin-left: 8px">帮助中心</span>
            </div>
          </li>
          <li>
            <div class="menu-item">
              <Setting color="#191919" height="15px" width="15px" />
              <span style="margin-left: 8px">反馈与建议</span>
            </div>
          </li>
          <li>
            <div class="menu-item">
              <Setting color="#191919" height="15px" width="15px" />
              <span style="margin-left: 8px">查看更新日志</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Settings v-if="showSetting" @closeSetting="closeSetting" />
</template>

<script setup lang="ts" name="SideBar">
import { ref, onMounted } from 'vue'
import Settings from '@/views/settings/index.vue'
let focusIndex = ref<number>(0)
let showMenu = ref(false)
let showMoreMenu = ref(false)
let showSetting = ref(false)

let goTasks = () => {
  focusIndex.value = 1
}
let goCalendar = () => {
  focusIndex.value = 2
}
let search = () => {
  focusIndex.value = 3
}
let refresh = () => {
  focusIndex.value = 4
}
let message = () => {
  focusIndex.value = 5
}
let more = () => {
  focusIndex.value = 6
  showMenu.value = false
  showMoreMenu.value = !showMoreMenu.value
}

let showUserMenu = () => {
  focusIndex.value = 0
  showMoreMenu.value = false
  showMenu.value = !showMenu.value
}
let closeUserMenu = () => {
  showMenu.value = false
}
let closeMoreMenu = () => {
  showMoreMenu.value = false
}

let setting = () => {
  showSetting.value = true
}

let closeSetting = () => {
  showSetting.value = false
}
onMounted(() => {
  window.addEventListener('click', closeUserMenu)
  window.addEventListener('click', closeMoreMenu)
})
</script>

<style scoped lang="scss">
.sidebar-top {
  position: relative;
}
.avatar {
  width: 32px;
  height: 32px;
  display: block;
  margin: 10px 8.5px;
  border-radius: 5px;
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
.active {
  color: #4772fa;
}
.user-menu {
  position: absolute;
  width: 164px;
  z-index: 1;
  left: 10px;
  top: 41px;
  font-size: 14px;
  color: #191919;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background-color: white;
  padding: 0px 5px;
  .menu-item {
    display: flex;
    margin: 5px 0px;
    padding: 8px;
    border-radius: 5px;
  }
  .menu-item:hover {
    background-color: #f1f1f1;
  }
}

.more-menu {
  position: absolute;
  width: 164px;
  z-index: 1;
  left: 42px;
  bottom: 5px;
  font-size: 14px;
  color: #191919;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background-color: white;
  padding: 0px 5px;
  .menu-item {
    display: flex;
    margin: 5px 0px;
    padding: 8px;
    border-radius: 5px;
  }
  .menu-item:hover {
    background-color: #f1f1f1;
  }
}
</style>
