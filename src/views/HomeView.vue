<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import RadialProgress from "vue3-radial-progress";
import { useMediaQuery } from '@vueuse/core';

interface Skill {
    name: string,
    knowledge: number
}
interface Contact {
    name: string,
    icon: string,
    url: string
}
const contactList: Array<Contact> = [
    {
        name: "google",
        icon: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
        url: "mailto:angelopablo014@gmail.com"
    },
    {
        name: "linkedin",
        icon: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        url: "http://www.linkedin.com/in/angelopablo014"
    },
    {
        name: 'github',
        icon: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
        url: 'http://github.com/pablo014'
    }
];
const isMobile = useMediaQuery('(max-width: 600px)')
const skills: Array<Skill> = [
    {
        name: "Vue",
        knowledge: 9,
    },
    {
        name: "HTML",
        knowledge: 9,
    },
    {
        name: "JavaScript",
        knowledge: 9,
    },
    {
        name: "CSS",
        knowledge: 9,
    },
    {
        name: "UI/UX Design",
        knowledge: 8,
    },
    {
        name: "Angular",
        knowledge: 6,
    },
    {
        name: "React",
        knowledge: 6,
    }
]
const headerList = [
    {
        name: 'Home',
        id: 'home',
    },
    {
        name: 'Skills',
        id: 'skills',

    },
    {
        name: 'About Me',
        id: 'about_me',
    },
    {
        name: 'Experience',
        id: 'experience',
    },
    {
        name: 'Connect',
        id: 'footer',
    }
]
const scrollIntoView = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
    });
}
</script>

<template>
  <main>
      <div class="text-neutral">
          <div class="header">
              <img src="../assets/AngeloPabloLogo.png" id="logo" />
              <div class="sm:flex hidden flex-row items-center cursor-pointer">
                  <a v-for="header in headerList" @click="scrollIntoView(header.id)" class="text-2xl px-6 text-secondary">
                      {{ header.name }}
                  </a>
              </div>
          </div>
          <div class="image" id="home">
              <div class="lg:ml-10">
                  <h1>
                      Hello, I'm Angelo!
                  </h1>
                  <a href="../assets/Angelo_Resume.pdf" download="Angelo_Resume.pdf" class="download">Download CSV</a>
              </div>
              <img class="banner" src="@/assets/angeloimg.png">
          </div>
          <div id="skills">
              <div class="sm:mx-10 mx-4">
                  <h1>Skills</h1>
                  <div class="flex flex-wrap sm:text-xl">
                      <RadialProgress
                          class="m-5 sm:m-10 hover:scale-125 transition-all duration-500"
                          v-for="skill in skills"
                          :diameter="isMobile ? 130 : 200"
                          :completed-steps="skill.knowledge"
                          :total-steps="10">
                          {{ skill.name }}
                      </RadialProgress>
                  </div>
              </div>
          </div>
          <div class="grid sm:grid-cols-12 my-10" id="about_me">
              <div class="sm:col-span-4">
                  <div class="border">
                      <img class="about-me-image" src="@/assets/headshot.png"/>
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
              <carousel :items-to-show="isMobile? 1 : 1.5" wrapAround>
                  <slide :index="1">
                      <div class="flex flex-col justify-center p-5">
                          <img src="../assets/arroyodevLogo.png" class="slideImg" />
                          <AccordionList class="bg-black">
                              <AccordionItem class="bg-black accordion-container" id="1">
                                  <template #summary>
                                      <h1 class="py-4">ArroyoDev</h1>
                                  </template>
                                  <div class="px-10 pb-5">
                                      <div class="text-2xl text-primarydark">Frontend Developer</div>
                                      <div class="text-xl">Expertly develop and meticulously maintain highly responsive websites, harnessing the power of HTML, advanced CSS preprocessors, and cutting-edge JavaScript frameworks. Seamlessly ensure compatibility across a wide array of browsers and devices, guaranteeing an optimal user experience and maximizing reach.</div>
                                  </div>
                              </AccordionItem>
                          </AccordionList>
                      </div>
                  </slide>
                  <slide :index="2">
                      <div class="flex flex-col justify-center p-5">
                          <img src="../assets/ullrichLogo.jpg" class="slideImg" />
                          <AccordionList class="bg-black">
                              <AccordionItem class="bg-black accordion-container" id="2">
                                  <template #summary>
                                      <h1 class="py-4">Ullrich Insurance</h1>
                                  </template>
                                  <div class="px-10 pb-5">
                                      <div class="text-2xl text-primarydark">Software Developer Intern</div>
                                      <div class="text-xl">Drove the software development team in successfully building cutting-edge CMS automation tools, revolutionizing the company\'s workflow. Implemented streamlined processes that led to a 40% reduction in manual tasks, boosting team efficiency and saving countless hours of work.</div>
                                  </div>
                              </AccordionItem>
                          </AccordionList>
                      </div>
                  </slide>
                  <slide :index="3">
                      <div class="flex flex-col justify-center p-5">
                          <img src="../assets/weCareLogo.png" class="slideImg" />
                          <AccordionList class="bg-black">
                              <AccordionItem class="bg-black accordion-container" id="3">
                                  <template #summary>
                                      <h1 class="py-4">WeCare Insurance</h1>
                                  </template>
                                  <div class="px-10 pb-5">
                                      <div class="text-2xl text-primarydark">Project Manager/Software Engineer Intern</div>
                                      <div class="text-xl">Revolutionized user processes through the creation of meticulously engineered and elegantly designed applications, leveraging automation to enhance efficiency and productivity. Developed intuitive and streamlined interfaces, prompting a significant upturn in a 50% reduction in manual tasks and enabling users to accomplish their goals swiftly and effortlessly.</div>
                                  </div>
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
          <div id="footer">
              <div class="flex flex-wrap items-center justify-center">
                  <div v-for="contact in contactList">
                      <a :href="contact.url">
                          <svg class="rounded-full border-2 border-primary p-2 m-1.5 hover:scale-125 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 488 512">
                              <path :d="contact.icon"/>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>
<style scoped>
.image {
    @apply flex lg:flex-row flex-col-reverse items-center justify-end sm:mb-0 mb-10;
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
    width: 60rem;
    @media only screen and (max-width: 600px) {
        width: 20rem;
    }
}
.header {
    @apply bg-gradient-to-l from-primarydark to-secondary sm:sticky top-0 z-10 flex sm:flex-row flex-col sm:justify-between;
}
#logo {
    @apply sm:rounded-full;
    height: 7rem;
    @media only screen and (max-width: 600px) {
        height: 20rem;
    }
}
#footer {
    @apply bg-secondarydark py-10;
}
</style>
