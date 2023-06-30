<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
interface Experience {
    name: string,
    image: string,
    description: Array<string>,
    position: string,
};
const experience: Array<Experience> = [{
    name: 'ArroyoDev',
    image: 'src/assets/arroyodevLogo.png',
    description: [
        'Collaborate with cross-functional teams including designers and backend developers to create visually appealing and user-friendly web applications.',
        'Develop and maintain responsive websites using HTML, CSS, and JavaScript, ensuring compatibility across various browsers and devices.',
        'Utilize modern frontend frameworks, such as React.js, Angular, or Vue.js, to streamline development processes and improve code maintainability.'
    ],
    position: 'Frontend Developer',
},
    {
        name: 'Ullrich Insurance',
        image: 'src/assets/ullrichLogo.jpg',
        description: [
            'Participated in team meetings and contributed ideas for improving frontend development processes and workflows.',
            'Improved the process of sending and receiving claims by creating software that is simple and friendly to use',
            'Stay up-to-date with the latest industry trends, best practices, and emerging technologies in frontend development, and actively share knowledge with the team.'
        ],
        position: 'Software Developer',
    },
    {
        name: 'WeCare Insurance',
        image: 'src/assets/weCareLogo.png',
        description: [
            'Implemented Scrum and Agile Methodologies to communicate project plans with teammates',
            'Automated user processes by creating efficient and well designed applications',
            'Assisted in the optimization of website performance through code refactoring and asset optimization techniques.'
        ],
        position: 'Project Manager'
    }
]
const headerList = [
    {
        name: 'Home',
        id: 'home',
    },
    {
        name: 'About Me',
        id: 'about_me',
    },
    {
        name: 'Experience',
        id: 'experience',
    }
]
const scrollIntoView = (id) => {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
    });
}
</script>

<template>
  <main>
      <div>
          <div class="header">
              <a v-for="header in headerList" @click="scrollIntoView(header.id)" class="text-lg px-6">
                  {{ header.name }}
              </a>
          </div>
          <div class="image" id="home">
              <div class="lg:ml-10">
                  <h1>
                      Hello, I'm Angelo!
                  </h1>
                  <a href="src/assets/Angelo_Resume.pdf" download="Angelo_Resume.pdf" class="download">Download CSV</a>
              </div>
              <img class="banner" src="@/assets/angeloimg.png">
          </div>
          <div class="grid sm:grid-cols-12 my-10" id="about_me">
              <div class="sm:col-span-4">
                  <div class="border">
                      <img class="about-me-image" src="@/assets/side-profile-removebg-preview.png"/>
                  </div>
              </div>
              <div class="sm:col-span-7 ml-4">
                  <h1 class="mb-5">About Me</h1>
                  <p class="text-lg">I am a passionate and dedicated Frontend Developer with a strong focus on creating seamless user experiences and visually appealing web applications. With a solid foundation in HTML, CSS, and JavaScript, I thrive on turning design concepts into functional and interactive interfaces.

                      Throughout my career, I have had the opportunity to collaborate with cross-functional teams, including designers and backend developers, to deliver high-quality projects that exceed client expectations. I take pride in my ability to understand user needs and translate them into intuitive and engaging frontend solutions.

                      Constantly seeking to expand my skill set, I stay updated with the latest trends and technologies in frontend development. I am proficient in working with modern frameworks such as React.js, Angular, or Vue.js, which allow me to streamline development processes and create scalable and maintainable code.

                      Attention to detail is one of my strengths, and I always strive for pixel-perfect implementations. I am experienced in working with responsive design principles, ensuring that websites and applications are visually consistent and accessible across various devices and screen sizes.

                      In addition to my technical expertise, I am a strong believer in teamwork and effective communication. I thrive in collaborative environments where I can contribute my ideas, learn from others, and collectively achieve project success.

                      As a frontend developer, I am driven by the desire to continuously learn, innovate, and push the boundaries of what is possible in the digital space. I am excited about the opportunity to contribute my skills and creativity to projects that make a meaningful impact and provide exceptional user experiences.

                      Let's connect and discuss how we can collaborate to create remarkable frontend solutions together.</p>
              </div>
          </div>
          <div class="sm:mx-10 mx-4" id="experience">
              <h1>Experience</h1>
              <carousel :items-to-show="1">
                  <slide v-for="(item, index) in experience" :key="index">
                      <div class="flex flex-col justify-center p-5">
                          <img :src="item.image" class="slideImg" />
                          <AccordionList class="bg-black">
                              <AccordionItem class="bg-black accordion-container" :id="index">
                                  <template #summary>
                                      <h1 class="py-4">{{ item.name }}</h1>
                                  </template>
                                  <h2>{{ item.position }}</h2>
                                  <li>
                                      <ul v-for="d in item.description">{{ d }}</ul>
                                  </li>
                              </AccordionItem>
                          </AccordionList>
                      </div>
                  </slide>

                  <template #addons>
                      <navigation />
                      <pagination />
                  </template>
              </carousel>
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
    @apply lg:text-7xl text-3xl font-bold text-primary mb-10;
}
.border {
    border-radius: 500px;
    background: linear-gradient(to bottom, #1F2833,#0B0C10, #66FCF1, #45A29E);
    padding: .25rem;
    margin: 5rem 1rem 1rem;
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
.slideImg {
    height: 40rem;
    @media only screen and (max-width: 600px) {
        height: 20rem;
    }
}
.accordion-container {
    width: 50rem;
    @media only screen and (max-width: 600px) {
        width: 20rem;
    }
}
.header {
    @apply bg-gradient-to-l from-primarydark to-secondary sticky top-0 z-10;
}
</style>
