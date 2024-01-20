<template>
  <div ref="containerRef">
    <slot></slot>
    <Teleport to="body">
      <div
        v-if="showMenu"
        class="context-menu"
        :style="{
          left: x + 'px',
          top: y + 'px',
        }"
      >
        <div class="menu-list">
          <div
            @click="handleClick(item)"
            class="menu-item"
            v-for="(item, i) in menu"
            :key="item.label"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useContextMenu from './useContextMenu'
const containerRef = ref(null)
const { x, y, showMenu } = useContextMenu(containerRef)
const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
})
let handleClick = (item) => {
  console.log(item)
}
//声明一个事件，选中菜单项的时候返回数据
const emit = defineEmits(['select'])
</script>
<style lang="scss" scoped>
.context-menu {
  position: fixed;
  background-color: #eee;
  box-shadow:
    1px 1px 2px rgba(0, 0, 0, 0.2),
    1px 1px 5px rgba(0, 0, 0, 0.2);
  min-width: 100px;
  border-radius: 5px;
  font-size: 12px;
  color: #1d1d1f;
  line-height: 1.8;
  white-space: nowrap;
  overflow: hidden;
  .menu-list {
    padding: 0 5px;
    background: #fff;
    .menu-item {
      padding: 2px 8px;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        color: white;
        background-color: #0073e5;
      }
    }
  }
}
</style>
