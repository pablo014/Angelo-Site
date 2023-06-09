<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
      <div>
          <div class="image">
          <img src="@/assets/angeloimg.png" class="static">
          </div>
          <h1 class="text-3xl font-bold underline text-primary">
              Hello world!
          </h1>
          <h2 class="text-neutral">subtext</h2>
      </div>
  </main>
</template>
<style scoped>
.image {
    @apply bg-gradient-to-tl from-secondary to-primarydark;
    border-radius: 0px 0px 0px 500px;
}
</style>
