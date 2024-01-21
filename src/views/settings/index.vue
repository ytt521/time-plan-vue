<template>
  <div class="container">
    <div class="system-setting">
      <Sidebar @handleclick="changeComponent" />
      <div class="content">
        <div class="close-menu">
          <Close
            @click="emit('closeSetting')"
            color="#C2C2C2"
            height="20px"
            width="20px"
            style="cursor: pointer"
          />
        </div>
        <component class="component" :is="componentList[componentIdx]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Settings">
import { ref } from 'vue'
import Sidebar from './sidebar/index.vue'
import About from './content/about/index.vue'
import Account from './content/account/index.vue'
import Appearance from './content/appearance/index.vue'
import Function from './content/function/index.vue'
import Menu from './content/menu/index.vue'
import More from './content/more/index.vue'
import Notify from './content/notify/index.vue'
import Link from './content/link/index.vue'
import Share from './content/share/index.vue'
import Shortcut from './content/shortcut/index.vue'
import Time from './content/time/index.vue'
import Vip from './content/vip/index.vue'
let componentIdx = ref(0)
let componentList = ref([
  Account,
  Vip,
  Function,
  Menu,
  Notify,
  Time,
  Appearance,
  More,
  Link,
  Share,
  Shortcut,
  About,
])
let changeComponent = (idx) => {
  componentIdx.value = idx
}

const emit = defineEmits(['closeSetting'])
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background-color: rgba(87, 87, 87, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.system-setting {
  width: 724px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  z-index: 9999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.content {
  width: 512px;
  background-color: #ffffff;
}
.close-menu {
  display: flex;
  justify-content: flex-end;
  margin: 10px;
}
</style>
