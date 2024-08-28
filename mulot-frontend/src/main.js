
import { createApp } from 'vue'

import App from './App.vue'
import router from "./router/index";
import MulotLayout from './layouts/MulotLayout.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {  Carousel3dPlugin } from '@nanoandrew4/vue3-carousel-3d'
library.add(faUser)

createApp(App)
  .use(router)
  .component('MulotLayout', MulotLayout)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(Carousel3dPlugin)

  .mount('#app')















// import './assets/main.css';

// // import Vue from "vue";
// import { createApp } from 'vue';
// import App from "./App.vue";
// import router from "./router/index";

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";;

// import Default from './layouts/MulotLayout.vue';
// import NoSidebar from './layouts/NoSidebar.vue';

// const app = createApp(App)

// app.component("default-layout", Default);
// app.component("no-sidebar-layout", NoSidebar);


// app.use(router)
// app.component("font-awesome-icon", FontAwesomeIcon)

// app.mount('#app')
