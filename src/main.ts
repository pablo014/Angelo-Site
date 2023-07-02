import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAccordion } from "vue3-rich-accordion";
import VueProgressBar from "@aacassandra/vue3-progressbar";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

import './assets/main.css'

const options = {
    color: "#bffaf3",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "left",
    inverse: false,
};

const app = createApp(App)

app.use(VueProgressBar, options)
app.use(createPinia())
app.use(router)
app.use(useAccordion)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
