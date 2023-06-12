<script setup lang="ts">
</script>

<template>
  <main>
      <div>
          <div class="image">
              <div class="lg:ml-10">
                  <h1 class="mb-10">
                      Hello, I'm Angelo!
                  </h1>
                  <a href="src/assets/Angelo_Resume.pdf" download="Angelo_Resume.pdf" class="download">Download CSV</a>
              </div>
              <img class="banner" src="@/assets/angeloimg.png">
          </div>
          <div class="grid grid-cols-12">
              <div class="col-span-4">
                  <div class="border">
                      <img class="about-me-image" src="@/assets/side-profile-removebg-preview.png"/>
                  </div>
              </div>
              <div class="col-span-8">
                  <h1>About Me</h1>
              </div>
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
.banner {
    width: 50rem;
    -webkit-mask-image:-webkit-gradient(linear, left bottom, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
}
h1 {
    @apply lg:text-7xl text-3xl font-bold text-primary;
}
.border {
    border-radius: 500px;
    background: linear-gradient(to bottom, #1F2833,#0B0C10, #66FCF1, #45A29E);
    padding: .25rem;
    margin: 1rem;
}
.about-me-image {
    @apply bg-secondary rounded;
    border-radius: 500px;
}
.download {
    @apply text-neutral text-lg;
    border: #66FCF1 1px solid;
    border-radius: 100px;
    padding: 1rem;
}
</style>
