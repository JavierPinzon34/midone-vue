import Vue from "vue";
import Vuex from "vuex";
import main from "./main";
import sideMenu from "./side-menu";
import simpleMenu from "./simple-menu";
import topMenu from "./top-menu";
import administration from "./administration";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main: main,
    sideMenu: sideMenu,
    simpleMenu: simpleMenu,
    topMenu: topMenu,
    administration: administration
  }
});
