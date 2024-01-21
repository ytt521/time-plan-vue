<template>
  <div ref="containerRef">
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
            v-for="item in menu"
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
import { onMounted, onUnmounted, ref } from 'vue'
const containerRef = ref(null)
interface Menu {
  label: string
}
defineProps({
  menu: {
    type: Array<Menu>,
    default: () => [],
  },
})

let useContextMenu = (containerRef: any) => {
  const showMenu = ref(false)
  const x = ref(0)
  const y = ref(0)
  const handleContextMenu = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    showMenu.value = true
    x.value = e.clientX
    y.value = e.clientY
  }
  function closeMenu() {
    showMenu.value = false
  }
  onMounted(() => {
    const div = containerRef.value
    div.addEventListener('contextmenu', handleContextMenu)
    window.addEventListener('click', closeMenu, true)
    window.addEventListener('contextmenu', closeMenu, true)
  })
  onUnmounted(() => {
    const div = containerRef.value
    div.removeEventListener('contextmenu', handleContextMenu)
    window.removeEventListener('click', closeMenu, true)
    window.removeEventListener('contextmenu', closeMenu, true)
  })
  return {
    showMenu,
    x,
    y,
  }
}

const { x, y, showMenu } = useContextMenu(containerRef)
let handleClick = (item: any) => {
  console.log(item)
}
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
    padding: 4px 5px;
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
./UseContextMenu
