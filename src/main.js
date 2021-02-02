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
import VueSweetalert2 from "vue-sweetalert2";
import Vuex from "vuex";

Vue.use(VueAxios, axios);
Vue.use(VCalendar);
Vue.use(Vuelidate);
Vue.use(VueSweetalert2);
Vue.use(Vuex);
// Midone Theme
import "./assets/sass/app.scss";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

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
