import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./global-components";
import "./utils";
import "./libs";
import axios from "axios";
import VueAxios from "vue-axios";
import VCalendar from "v-calendar";
import Vuelidate from "vuelidate";
Vue.use(VCalendar);
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
// Midone Theme
import "./assets/sass/app.scss";

Vue.config.productionTip = false;

const baseUrl = "http://127.0.0.1:8000/api/v1/";
//export const baseUrl = process.env.API_BASE_URL;
//const baseUrl = process.env.baseUrl;
if (typeof baseUrl !== "undefined") {
  Vue.axios.defaults.baseURL = baseUrl;
}
/* window.axios = axios;
axios.defaults.baseURL = process.env.API_BASE_URL; */
/* axios.create({
  baseURL: process.env.API_BASE_URL
}); */
//Vue.axios.defaults.baseURL = process.env.API_BASE_URL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
