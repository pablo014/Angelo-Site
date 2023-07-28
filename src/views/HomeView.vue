<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import RadialProgress from "vue3-radial-progress";
import { useMediaQuery } from '@vueuse/core';
import { ref } from 'vue';

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
        name: "TypeScript",
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
    },
]
const backendSkills = [
    {
        name: 'NodeJS',
        knowledge: 8,
    },
    {
        name: 'MongoDB',
        knowledge: 7,
    },
    {
        name: 'Express',
        knowledge: 7,
    },
]
const toolSkills = [
    {
        name: 'Visual Studio Code',
        knowledge: 8,
    },
    {
        name: 'Netlify',
        knowledge: 8,
    },
    {
        name: 'Jest',
        knowledge: 8,
    },
    {
        name: 'ESLint',
        knowledge: 8,
    },
    {
        name: 'NPM',
        knowledge: 8,
    },
    {
        name: 'Yarn',
        knowledge: 6,
    },
    {
        name: 'Docker',
        knowledge: 4,
    },
    {
        name: 'Kubernetes',
        knowledge: 4,
    },
]
const showSkill = ref('skills');
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
              <div class="sm:flex hidden flex-row items-center cursor-pointer z-10">
                  <a v-for="header in headerList" @click="scrollIntoView(header.id)" class="text-2xl px-6 text-white">
                      {{ header.name }}
                  </a>
              </div>
              <div class="wave-dark">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                  </svg>
              </div>
          </div>
          <div class="image" id="home">
              <div class="lg:ml-10">
                  <h1>
                      Hello, I'm Angelo!
                  </h1>
              </div>
              <img class="banner" src="@/assets/angeloimg.png">
          </div>
          <div id="skills" class="py-40">
              <div class="sm:mx-10 mx-4">
                  <h1>Skills</h1>
                  <div>
                      <div class="flex items-center justify-center">
                          <button class="border-2 rounded-full border-white text-lg w-40 mx-4 hover:scale-125 transition-all duration-500" @click="showSkill = 'skills'">Frontend</button>
                          <button class="border-2 rounded-full border-white text-lg w-40 mx-4 hover:scale-125 transition-all duration-500" @click="showSkill = 'backend'">Backend</button>
                          <button class="border-2 rounded-full border-white text-lg w-40 mx-4 hover:scale-125 transition-all duration-500" @click="showSkill = 'tools'">Tools</button>
                      </div>
                      <div class="flex flex-wrap sm:text-xl" v-if="showSkill === 'skills'">
                          <RadialProgress
                              class="m-5 sm:m-10 hover:scale-125 transition-all duration-500 z-10"
                              v-for="skill in skills"
                              :diameter="isMobile ? 130 : 200"
                              :completed-steps="skill.knowledge"
                              :total-steps="10">
                              {{ skill.name }}
                          </RadialProgress>
                      </div>
                      <div class="flex flex-wrap sm:text-xl" v-if="showSkill === 'backend'">
                          <RadialProgress
                              class="m-5 sm:m-10 hover:scale-125 transition-all duration-500 z-10"
                              v-for="skill in backendSkills"
                              :diameter="isMobile ? 130 : 200"
                              :completed-steps="skill.knowledge"
                              :total-steps="10">
                              {{ skill.name }}
                          </RadialProgress>
                      </div>
                      <div class="flex flex-wrap sm:text-xl" v-if="showSkill === 'tools'">
                          <RadialProgress
                              class="m-5 sm:m-10 hover:scale-125 transition-all duration-500 z-10"
                              v-for="skill in toolSkills"
                              :diameter="isMobile ? 130 : 200"
                              :completed-steps="skill.knowledge"
                              :total-steps="10">
                              {{ skill.name }}
                          </RadialProgress>
                      </div>
                  </div>
              </div>
              <div class="wave-prim">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                  </svg>
              </div>
          </div>
          <div>
              <div class="grid sm:grid-cols-12 bg-primarydark" id="about_me">
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
          </div>
          <div class="pb-40" style="margin-bottom: -1px">
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
              <div class="wave-sec">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                  </svg>
              </div>
          </div>
          <div class="bg-primarydark mb-12">
              <div class="sm:mx-10 mx-4" id="projects">
                  <h1>Projects</h1>
                  <carousel :items-to-show="isMobile? 1 : 1.5" wrapAround>
                      <slide :index="1">
                          <div class="flex flex-col justify-center p-5">
                              <img src="../assets/Knuckle_Sandwich.png" class="slideImg" />
                              <div class="bg-black pb-5">
                                  <h1 class="py-4">Knuckle Sandwich</h1>
                                  <div class="px-10 pb-5">
                                      <div class="text-xl">
                                          A Vue project using external libraries to add wonderful animations and improved UI/UX.
                                      </div>
                                  </div>
                                  <div class="hover:scale-125 transition-all duration-500">
                                      <a href="https://github.com/pablo014/knuckle_sandwich" class="border-2 rounded-full border-white text-lg p-2">Source Code</a>
                                  </div>
                              </div>
                          </div>
                      </slide>
                      <slide :index="2">
                          <div class="flex flex-col justify-center p-5">
                              <img src="../assets/pokedex.png" class="slideImg" />
                              <div class="bg-black pb-5">
                                  <h1 class="py-4">Pokedex</h1>
                                  <div class="px-10 pb-5">
                                      <div class="text-xl">Pokedex Vite app using vue router and axios api calls</div>
                                  </div>
                                  <div class="hover:scale-125 transition-all duration-500">
                                      <a href="https://github.com/pablo014/pokedex-project" class="border-2 rounded-full border-white text-lg p-2">Source Code</a>
                                  </div>
                              </div>
                          </div>
                      </slide>
                      <slide :index="3">
                          <div class="flex flex-col justify-center p-5">
                              <img src="../assets/tictactoe.jpg" class="slideImg" />
                              <div class="bg-black pb-5">
                                  <h1 class="py-4">3D Tic-Tac-Toe</h1>
                                  <div class="px-10 pb-5">
                                      <div class="text-xl">Using Advanced Javascript Array Manipulation, this 3D Tic Tac Toe game puts a new twist to the classic game you know. Aim to get 3 in a row in 3 in a row. Your moves affect what your opponent can do and vice versa. All I can say is, this isn't your dad's tic tac toe</div>
                                  </div>
                                  <div class="hover:scale-125 transition-all duration-500 mb-5">
                                      <a href="https://main--radiant-jelly-373b25.netlify.app/" class="border-2 rounded-full border-white text-lg p-2">Live Site</a>
                                  </div>
                                  <div class="hover:scale-125 transition-all duration-500">
                                      <a href="https://github.com/pablo014/pokedex-project" class="border-2 rounded-full border-white text-lg p-2">Source Code</a>
                                  </div>
                              </div>
                          </div>
                      </slide>

                      <template #addons>
                          <navigation />
                          <pagination />
                      </template>
                  </carousel>
              </div>
          </div>
          <div id="footer">
              <div class="wave-prim">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                  </svg>
              </div>
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
#about_me {
    margin-top: -1px;
    border-radius: 0px 0px 0px 400px;
    padding-bottom: 10rem;
    padding-top: 5rem;
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
    @apply bg-gradient-to-l from-primarydark to-secondary sm:sticky top-0 z-20 flex sm:flex-row flex-col sm:justify-between;
}
#logo {
    @apply sm:rounded-full;
    height: 7rem;
    @media only screen and (max-width: 600px) {
        height: 20rem;
    }
}
#footer {
    @apply pb-20;
}
.wave-prim {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave-prim svg {
    position: relative;
    display: block;
    width: calc(226% + 1.3px);
    height: 200px;
    transform: rotateY(180deg);
}

.wave-prim .shape-fill {
    fill: #45A29E;
}
.wave-sec {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave-sec svg {
    position: relative;
    display: block;
    width: calc(150% + 1.3px);
    height: 150px;
}

.wave-sec .shape-fill {
    fill: #45A29E;
}
.wave-dark {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.wave-dark svg {
    position: relative;
    display: block;
    width: calc(177% + 1.3px);
    height: 100px;
    transform: rotateY(180deg);
}

.wave-dark .shape-fill {
    fill: #0B0C10;
}

</style>
