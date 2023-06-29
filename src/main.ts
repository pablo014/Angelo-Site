import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAccordion } from "vue3-rich-accordion";
// import "vue3-rich-accordion/accordion-library-styles.css";

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(useAccordion)

app.mount('#app')
