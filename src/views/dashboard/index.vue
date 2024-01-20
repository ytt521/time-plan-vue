<template>
  <div class="layout_container">
    <div class="layout_sidebar">
      <Operation />
    </div>
    <div class="layout_content">
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import Operation from './operation/index.vue'
import Content from './content/index.vue'
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_sidebar {
    width: $base-sidebar-operation-width;
    height: 100vh;
    border-right: 1px solid #f3f3f3;
  }
  .layout_content {
    position: absolute;
    width: calc(100% - $base-sidebar-width - $base-sidebar-operation-width);
    height: 100%;
    top: 0;
    left: $base-sidebar-width + $base-sidebar-operation-width;
    overflow: auto;
  }
}
</style>
