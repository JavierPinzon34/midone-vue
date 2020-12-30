import Vue from "vue";
import VueRouter from "vue-router";
import SideMenu from "../layouts/SideMenu";
import Dashboard from "../views/Dashboard";
import Inbox from "../views/Inbox";
import ReceptionLog from "../views/ReceptionLog";
import ReservationCalendar from "../views/ReservationCalendar";
import AmenityCalendar from "../views/AmenityCalendar";
import ReservationAmenities from "../views/ReservationAmenities";
import ReservationAmenitiesEdit from "../views/ReservationAmenitiesEdit";
import ListAmenities from "../views/ListAmenities";
import AmenityEdit from "../views/AmenityEdit";
import CardAmenityDetails from "../views/CardAmenityDetails";
import NewAmenityReserve from "../views/NewAmenityReserve";
import BuildingConfiguration from "../views/BuildingConfiguration";
import ListProperties from "../views/ListProperties";
import CommonAreas from "../views/CommonAreas";
import OwnerReservations from "../views/OwnerReservations";
import ReservoirGenerator from "../views/ReservoirGenerator";
import Documents from "../views/Documents";
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
        path: "reservation-calendar",
        name: "side-menu-calendario-reservas",
        component: ReservationCalendar
      },
      {
        path: "amenity-calendar",
        name: "side-menu-calendario-amenidades",
        component: AmenityCalendar
      },
      {
        path: "reservation-amenities",
        name: "side-menu-reserva-amenidades",
        component: ReservationAmenities
      },
      {
        path: "reservation-amenities-edit",
        name: "side-menu-reserva-amenidades-edicion",
        component: ReservationAmenitiesEdit
      },
      {
        path: "list-amenities",
        name: "side-menu-lista-amenidades",
        component: ListAmenities
      },
      {
        path: "amenity-edit",
        name: "side-menu-amenidades-edicion",
        component: AmenityEdit
      },
      {
        path: "amenity-details",
        name: "side-menu-amenidades-detalles",
        component: CardAmenityDetails
      },
      {
        path: "new-amenity-reserve",
        name: "side-menu-new-amenity-reserve",
        component: NewAmenityReserve
      },
      {
        path: "building-configuration",
        name: "side-menu-configuracion-edificio",
        component: BuildingConfiguration
      },
      {
        path: "list-properties",
        name: "side-menu-lista-inmuebles",
        component: ListProperties
      },
      {
        path: "common-areas",
        name: "side-menu-lista-areas-comunes",
        component: CommonAreas
      },
      {
        path: "owner-reservations",
        name: "side-menu-owner-reservations",
        component: OwnerReservations
      },
      {
        path: "reservoir-generator",
        name: "side-menu-reservoir-generator",
        component: ReservoirGenerator
      },
      {
        path: "documents",
        name: "side-menu-reservoir-documents",
        component: Documents
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
