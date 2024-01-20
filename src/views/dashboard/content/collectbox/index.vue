<template>
  <div class="container">
    <ContextMenu
      class="block"
      :menu="[
        { label: '添加' },
        { label: '编辑' },
        { label: '删除' },
        { label: '查看' },
        { label: '复制' },
      ]"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  width: 200px;
  height: 200px;
  background-color: yellow;
}
.block {
  width: 100px;
  height: 100px;
}
</style>
