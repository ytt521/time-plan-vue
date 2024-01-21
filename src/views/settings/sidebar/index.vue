<template>
  <div class="system-menu">
    <div style="font-weight: 600; margin: 10px 12px; color: black">设置</div>
    <div class="top">
      <ul>
        <li style="margin-top: 10px" @click="menuClick(0)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>账户与安全</span>
          </div>
        </li>
        <li @click="menuClick(1)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>高级会员</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="setting">
      <ul>
        <li style="margin-top: 10px" @click="menuClick(2)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>功能模块</span>
          </div>
        </li>
        <li @click="menuClick(3)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>智能清单</span>
          </div>
        </li>
        <li @click="menuClick(4)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>提醒与通知</span>
          </div>
        </li>
        <li @click="menuClick(5)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>日期与时间</span>
          </div>
        </li>
        <li @click="menuClick(6)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>外观</span>
          </div>
        </li>
        <li @click="menuClick(7)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>更多设置</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="link">
      <ul>
        <li style="margin-top: 10px" @click="menuClick(8)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>关联与导入</span>
          </div>
        </li>
        <li @click="menuClick(9)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>共享协作</span>
          </div>
        </li>
        <li @click="menuClick(10)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>快捷键</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="about">
      <ul>
        <li style="margin-top: 10px" @click="menuClick(11)">
          <div class="item">
            <Setting color="#919191" height="15px" width="15px" />
            <span>关于</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['handleclick'])
let menuClick = (idx) => {
  emit('handleclick', idx)
}
</script>

<style scoped lang="scss">
.system-menu {
  width: 212px;
  height: 580px;
  color: #919191;
  border-right: 1px solid #e2e2e2;
  background-color: #f8f8f8;
}
li {
  padding: 2px 8px 5px 10px;
}

.item {
  display: flex;
  padding: 9px;
  font-size: 14px;
  border-radius: 5px;
  &:hover {
    background-color: #efefef;
  }
  span {
    margin-left: 8px;
  }
}
</style>
