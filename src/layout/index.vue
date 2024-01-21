<template>
  <div class="layout_container">
    <div class="layout_sidebar">
      <Sidebar />
    </div>
    <div class="layout_content">
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts" name="Layout">
import Sidebar from './sidebar/index.vue'
import Content from './content/index.vue'
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_sidebar {
    width: $base-sidebar-width;
    height: 100vh;
    background-color: $base-sidebar-background;
    overflow: hidden;
  }
  .layout_content {
    position: absolute;
    width: calc(100% - $base-sidebar-width);
    height: 100%;
    top: 0;
    left: $base-sidebar-width;
    overflow: auto;
  }
}
</style>
