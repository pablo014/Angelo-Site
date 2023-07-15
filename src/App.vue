<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView></RouterView>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
    @apply h-screen;
    max-width: none !important;
    padding: 0rem !important;
}
main {
    width: 98.7vw;
    background: url(@/assets/background.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>
