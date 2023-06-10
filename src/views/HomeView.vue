<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
      <div>
          <div class="image">
              <div class="lg:ml-10">
                  <h1 class="lg:text-7xl text-3xl font-bold underline text-primary">
                      Hello, I'm Angelo!
                  </h1>
              </div>
              <img src="@/assets/angeloimg.png">
          </div>
      </div>
  </main>
</template>
<style scoped>
.image {
    @apply flex lg:flex-row flex-col-reverse items-center justify-end;
    border-radius: 0px 0px 0px 5000px;
    background: url(@/assets/80042.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
img {
    width: 50rem;
    -webkit-mask-image:-webkit-gradient(linear, left bottom, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
}
</style>
