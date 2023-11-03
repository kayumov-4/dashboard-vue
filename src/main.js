import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "ant-design-vue/dist/reset.css";
// import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-teal/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import router from "./router";

import antd from "ant-design-vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.use(antd);
app.mount("#app");

// {
//       path: '/:pathMatch(.*)*',
//       name: 'error',
//       component: () => import('../views/Error.vue')
//     },
