import Vue from "vue";
import VueRouter from "vue-router";
import SideMenu from "../layouts/SideMenu";
import Dashboard from "../views/Dashboard";
import Inbox from "../views/Inbox";
import ReceptionLog from "../views/ReceptionLog";
import ReservationAmenities from "../views/ReservationAmenities";
import Login from "../views/Login";
import Register from "../views/Register";
import ErrorPage from "../views/ErrorPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/",
        name: "side-menu-dashboard",
        component: Dashboard
      },
      {
        path: "reception-log",
        name: "side-menu-bitacora-recepcion",
        component: ReceptionLog
      },
      {
        path: "reservation-amenities",
        name: "side-menu-reserva-amenidades",
        component: ReservationAmenities
      },
      {
        path: "inbox",
        name: "side-menu-inbox",
        component: Inbox
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage
  },
  {
    path: "/*",
    component: ErrorPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
