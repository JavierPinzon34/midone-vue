const state = () => {
  return {
    menu: [
      {
        icon: "HomeIcon",
        pageName: "side-menu-dashboard",
        title: "Dashboard"
      },
      "devider",
      {
        icon: "ZapIcon",
        pageName: "side-menu-acciones-rapidas",
        title: "Acciones Rapidas",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-bitacora-recepcion",
            title: "Bitacora Recepción"
          },
          {
            icon: "",
            pageName: "side-menu-calendario-reservas",
            title: "Calendario Reservas"
          },
          {
            icon: "",
            pageName: "side-menu-calendario-amenidades",
            title: "Calendario Amenidades"
          }
        ]
      },
      {
        icon: "ZapIcon",
        pageName: "side-menu-amenidades",
        title: "Amenidades",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-reserva-amenidades",
            title: "Reservas Amenidades"
          },
          {
            icon: "",
            pageName: "side-menu-calendario-amenidades",
            title: "Calendario Amenidades"
          },
          {
            icon: "",
            pageName: "side-menu-lista-amenidades",
            title: "Lista Amenidades"
          }
        ]
      },
      {
        icon: "ZapIcon",
        pageName: "side-menu-edificio",
        title: "Modulos Edificio",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-configuracion-edificio",
            title: "Configuración Edificio"
          },
          {
            icon: "",
            pageName: "side-menu-lista-inmuebles",
            title: "Lista Inmuebles"
          },
          {
            icon: "",
            pageName: "side-menu-lista-parqueaderos",
            title: "Lista Parqueaderos"
          },
          {
            icon: "",
            pageName: "side-menu-lista-depositos",
            title: "Lista Depositos"
          },
          {
            icon: "",
            pageName: "side-menu-lista-areas-comunes",
            title: "Lista Areas Comunes"
          }
        ]
      },
      {
        icon: "ZapIcon",
        pageName: "side-menu-informes",
        title: "Informes Administrador",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-informacion-propietarios",
            title: "Información Propietario"
          },
          {
            icon: "",
            pageName: "side-menu-staff-edificio",
            title: "Staff Edificio"
          },
          {
            icon: "",
            pageName: "side-menu-estadisticas-ocupacion",
            title: "Estadisticas Ocupación"
          },
          {
            icon: "",
            pageName: "side-menu-lista-migracion",
            title: "Lista Migración"
          },
          {
            icon: "",
            pageName: "side-menu-dinero-recepcion",
            title: "Dinero Recepción"
          }
        ]
      },
      {
        icon: "ZapIcon",
        pageName: "side-menu-noticias",
        title: "Noticias Edificio"
      }
      /* {
        icon: "HomeIcon",
        pageName: "side-menu-dashboard",
        title: "Dashboard"
      },
      {
        icon: "BoxIcon",
        pageName: "side-menu-menu-layout",
        title: "Menu Layout",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-dashboard",
            title: "Side Menu",
            ignore: true
          },
          {
            icon: "",
            pageName: "simple-menu-dashboard",
            title: "Simple Menu",
            ignore: true
          },
          {
            icon: "",
            pageName: "top-menu-dashboard",
            title: "Top Menu",
            ignore: true
          }
        ]
      },
      {
        icon: "InboxIcon",
        pageName: "side-menu-inbox",
        title: "Inbox"
      },
      {
        icon: "HardDriveIcon",
        pageName: "side-menu-file-manager",
        title: "File Manager"
      },
      {
        icon: "CreditCardIcon",
        pageName: "side-menu-point-of-sale",
        title: "Point of Sale"
      },
      {
        icon: "MessageSquareIcon",
        pageName: "side-menu-chat",
        title: "Chat"
      },
      {
        icon: "FileTextIcon",
        pageName: "side-menu-post",
        title: "Post"
      },
      "devider",
      {
        icon: "EditIcon",
        pageName: "side-menu-crud",
        title: "Crud",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-crud-data-list",
            title: "Data List"
          },
          {
            icon: "",
            pageName: "side-menu-crud-form",
            title: "Form"
          }
        ]
      },
      {
        icon: "UsersIcon",
        pageName: "side-menu-users",
        title: "Users",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-users-layout-1",
            title: "Layout 1"
          },
          {
            icon: "",
            pageName: "side-menu-users-layout-2",
            title: "Layout 2"
          },
          {
            icon: "",
            pageName: "side-menu-users-layout-3",
            title: "Layout 3"
          }
        ]
      },
      {
        icon: "TrelloIcon",
        pageName: "side-menu-profile",
        title: "Profile",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-profile-overview-1",
            title: "Overview 1"
          },
          {
            icon: "",
            pageName: "side-menu-profile-overview-2",
            title: "Overview 2"
          },
          {
            icon: "",
            pageName: "side-menu-profile-overview-3",
            title: "Overview 3"
          }
        ]
      },
      {
        icon: "LayoutIcon",
        pageName: "side-menu-layout",
        title: "Pages",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-wizards",
            title: "Wizards",
            subMenu: [
              {
                icon: "",
                pageName: "side-menu-wizard-layout-1",
                title: "Layout 1"
              },
              {
                icon: "",
                pageName: "side-menu-wizard-layout-2",
                title: "Layout 2"
              },
              {
                icon: "",
                pageName: "side-menu-wizard-layout-3",
                title: "Layout 3"
              }
            ]
          },
          {
            icon: "",
            pageName: "side-menu-blog",
            title: "Blog",
            subMenu: [
              {
                icon: "",
                pageName: "side-menu-blog-layout-1",
                title: "Layout 1"
              },
              {
                icon: "",
                pageName: "side-menu-blog-layout-2",
                title: "Layout 2"
              },
              {
                icon: "",
                pageName: "side-menu-blog-layout-3",
                title: "Layout 3"
              }
            ]
          },
          {
            icon: "",
            pageName: "side-menu-pricing",
            title: "Pricing",
            subMenu: [
              {
                icon: "",
                pageName: "side-menu-pricing-layout-1",
                title: "Layout 1"
              },
              {
                icon: "",
                pageName: "side-menu-pricing-layout-2",
                title: "Layout 2"
              }
            ]
          },
          {
            icon: "",
            pageName: "side-menu-invoice",
            title: "Invoice",
            subMenu: [
              {
                icon: "",
                pageName: "side-menu-invoice-layout-1",
                title: "Layout 1"
              },
              {
                icon: "",
                pageName: "side-menu-invoice-layout-2",
                title: "Layout 2"
              }
            ]
          },
          {
            icon: "",
            pageName: "side-menu-faq",
            title: "FAQ",
            subMenu: [
              {
                icon: "",
                pageName: "side-menu-faq-layout-1",
                title: "Layout 1"
              },
              {
                icon: "",
                pageName: "side-menu-faq-layout-2",
                title: "Layout 2"
              },
              {
                icon: "",
                pageName: "side-menu-faq-layout-3",
                title: "Layout 3"
              }
            ]
          },
          {
            icon: "",
            pageName: "login",
            title: "Login"
          },
          {
            icon: "",
            pageName: "register",
            title: "Register"
          },
          {
            icon: "",
            pageName: "error-page",
            title: "Error Page"
          },
          {
            icon: "",
            pageName: "side-menu-update-profile",
            title: "Update profile"
          },
          {
            icon: "",
            pageName: "side-menu-change-password",
            title: "Change Password"
          }
        ]
      },
      "devider",
      {
        icon: "InboxIcon",
        pageName: "side-menu-components",
        title: "Components",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-grid",
            title: "Grid",
            subMenu: [
              {
                icon: "",
                pageName: "side-menu-regular-table",
                title: "Regular Table"
              },
              {
                icon: "",
                pageName: "side-menu-tabulator",
                title: "Tabulator"
              }
            ]
          },
          {
            icon: "",
            pageName: "side-menu-accordion",
            title: "Accordion"
          },
          {
            icon: "",
            pageName: "side-menu-button",
            title: "Button"
          },
          {
            icon: "",
            pageName: "side-menu-modal",
            title: "Modal"
          },
          {
            icon: "",
            pageName: "side-menu-alert",
            title: "Alert"
          },
          {
            icon: "",
            pageName: "side-menu-progress-bar",
            title: "Progress Bar"
          },
          {
            icon: "",
            pageName: "side-menu-tooltip",
            title: "Tooltip"
          },
          {
            icon: "",
            pageName: "side-menu-dropdown",
            title: "Dropdown"
          },
          {
            icon: "",
            pageName: "side-menu-toast",
            title: "Toast"
          },
          {
            icon: "",
            pageName: "side-menu-typography",
            title: "Typography"
          },
          {
            icon: "",
            pageName: "side-menu-icon",
            title: "Icon"
          },
          {
            icon: "",
            pageName: "side-menu-loading-icon",
            title: "Loading Icon"
          }
        ]
      },
      {
        icon: "SidebarIcon",
        pageName: "side-menu-forms",
        title: "Forms",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-regular-form",
            title: "Regular Form"
          },
          {
            icon: "",
            pageName: "side-menu-datepicker",
            title: "Datepicker"
          },
          {
            icon: "",
            pageName: "side-menu-tail-select",
            title: "Tail Select"
          },
          {
            icon: "",
            pageName: "side-menu-file-upload",
            title: "File Upload"
          },
          {
            icon: "",
            pageName: "side-menu-wysiwyg-editor",
            title: "Wysiwyg Editor"
          },
          {
            icon: "",
            pageName: "side-menu-validation",
            title: "Validation"
          }
        ]
      },
      {
        icon: "HardDriveIcon",
        pageName: "side-menu-widgets",
        title: "Widgets",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-chart",
            title: "Chart"
          },
          {
            icon: "",
            pageName: "side-menu-slider",
            title: "Slider"
          },
          {
            icon: "",
            pageName: "side-menu-image-zoom",
            title: "Image Zoom"
          }
        ]
      } */
    ]
  };
};

// getters
const getters = {
  menu: state => state.menu
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
