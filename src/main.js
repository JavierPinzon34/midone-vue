import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./global-components";
import "./utils";
import "./libs";
import axios from 'axios';
import VueAxios from 'vue-axios';
import VCalendar from "v-calendar";
Vue.use(VCalendar);
Vue.use(VueAxios, axios)
// Midone Theme
import "./assets/sass/app.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
