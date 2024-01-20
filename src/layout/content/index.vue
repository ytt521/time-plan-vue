<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" v-if="flag" />
  </router-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let flag = ref(true)
</script>

<style scoped></style>
