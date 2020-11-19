<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-2xl font-medium mr-auto">Bitacora Recepción</h2>
    </div>
    <!-- BEGIN: HTML Date and buttons -->
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <!-- <h2 class="text-lg font-medium mr-auto">Fecha</h2> -->
      <label>Fecha</label>
      <LitePicker
        v-model="date"
        :options="{
          autoApply: false,
          lang: 'es-ES',
          showWeekNumbers: true,
          dropdowns: {
            minYear: 1990,
            maxYear: null,
            months: true,
            years: true
          }
        }"
        class="input w-56 border block ml-2 mr-auto"
      />
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="button text-white bg-theme-1 shadow-md mr-2">
          Staff Edificio
        </button>
        <button class="button text-white bg-teal-600 shadow-md mr-2">
          Staff Propietarios
        </button>
        <button class="button text-white bg-theme-9 shadow-md mr-2">
          Minuta
        </button>
        <!-- <div class="dropdown ml-auto sm:ml-0">
          <button
            class="dropdown-toggle button px-2 box text-gray-700 dark:text-gray-300"
          >
            <span class="w-5 h-5 flex items-center justify-center">
              <i class="w-4 h-4" data-feather="plus"></i>
            </span>
          </button>
          <div class="dropdown-box w-40">
            <div class="dropdown-box__content box dark:bg-dark-1 p-2">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="file-plus" class="w-4 h-4 mr-2"></i> New
                Category
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="users" class="w-4 h-4 mr-2"></i> New Group
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- END: HTML Date and buttons -->
    <!-- BEGIN: HTML Table Data -->
    <div class="intro-y box p-5 mt-5">
      <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
        <form class="xl:flex sm:mr-auto" @submit.prevent="onFilter">
          <!-- <div class="sm:flex items-center sm:mr-4">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Field</label
            >
            <select
              v-model="filter.field"
              class="input w-full sm:w-32 xxl:w-full mt-2 sm:mt-0 sm:w-auto border"
            >
              <option value="name">Name</option>
              <option value="category">Category</option>
              <option value="remaining_stock">Remaining Stock</option>
            </select>
          </div> -->
          <!-- <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Type</label
            >
            <select
              v-model="filter.type"
              class="input w-full mt-2 sm:mt-0 sm:w-auto border"
            >
              <option value="like" selected>like</option>
              <option value="=">=</option>
              <option value="<">&lt;</option>
              <option value="<=">&lt;=</option>
              <option value=">">></option>
              <option value=">=">>=</option>
              <option value="!=">!=</option>
            </select>
          </div> -->
          <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Buscar</label
            >
            <input
              v-model="filter.value"
              type="text"
              class="input w-full sm:w-40 xxl:w-full mt-2 sm:mt-0 border"
              placeholder="Buscar..."
            />
          </div>
          <div class="mt-2 xl:mt-0">
            <button
              type="button"
              class="button w-full sm:w-16 bg-theme-1 text-white"
              @click="onFilter"
            >
              Ir
            </button>
            <button
              type="button"
              class="button w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1 bg-gray-200 text-gray-600 dark:bg-dark-5 dark:text-gray-300"
              @click="onResetFilter"
            >
              Limpiar
            </button>
          </div>
        </form>
        <!-- BEGIN: Butons export and print -->
        <!-- <div class="flex mt-5 sm:mt-0">
          <button
            class="button w-1/2 sm:w-auto flex items-center border text-gray-700 mr-2 dark:bg-dark-5 dark:text-gray-300"
            @click="onPrint"
          >
            <i data-feather="printer" class="w-4 h-4 mr-2"></i> Print
          </button>
          <div class="dropdown w-1/2 sm:w-auto">
            <button
              class="dropdown-toggle button w-full sm:w-auto flex items-center border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
            >
              <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
              <i
                data-feather="chevron-down"
                class="w-4 h-4 ml-auto sm:ml-2"
              ></i>
            </button>
            <div class="dropdown-box w-40">
              <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportCsv"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                  CSV
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportJson"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                  JSON
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportXlsx"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                  XLSX
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportHtml"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                  HTML
                </a>
              </div>
            </div>
          </div>
        </div> -->
        <!-- END: Butons export and print -->
      </div>
      <div class="overflow-x-auto scrollbar-hidden">
        <div
          id="tabulator"
          ref="table"
          class="mt-5 table-report table-report--tabulator"
        ></div>
      </div>
    </div>
    <!-- END: HTML Table Data -->
  </div>
</template>

<script>
import xlsx from "xlsx";
import feather from "feather-icons";
import Tabulator from "tabulator-tables";

export default {
  data() {
    return {
      date: "",
      table: null,
      filter: {
        field: "name",
        type: "like",
        value: ""
      }
    };
  },
  mounted() {
    this.table = new Tabulator(this.$refs.table, {
      ajaxURL: "https://dummy-data.left4code.com",
      ajaxFiltering: true,
      ajaxSorting: true,
      printAsHtml: true,
      printStyled: true,
      pagination: "remote",
      paginationSize: 10,
      paginationSizeSelector: [10, 20, 30, 40],
      layout: "fitColumns",
      responsiveLayout: "collapse",
      placeholder: "Sin Resultados",
      columns: [
        {
          formatter: "responsiveCollapse",
          width: 40,
          minWidth: 30,
          align: "center",
          resizable: false,
          headerSort: false
        },

        // For HTML table
        {
          title: "Nombre",
          minWidth: 200,
          responsive: 0,
          field: "name",
          vertAlign: "middle",
          print: false,
          download: false,
          formatter(cell) {
            return `<div>
              <div class="font-medium whitespace-no-wrap">${
                cell.getData().name
              }</div>
              <div class="text-gray-600 text-xs whitespace-no-wrap">${
                cell.getData().category
              }</div>
            </div>`;
          }
        },
        {
          title: "Imagenes",
          minWidth: 200,
          field: "images",
          hozAlign: "center",
          vertAlign: "middle",
          print: false,
          download: false,
          formatter(cell) {
            return `<div class="flex lg:justify-center">
                <div class="intro-x w-10 h-10 image-fit">
                  <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="${require("@/assets/images/" +
                    cell.getData().images[0])}">
                </div>
                <div class="intro-x w-10 h-10 image-fit -ml-5">
                  <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="${require("@/assets/images/" +
                    cell.getData().images[1])}">
                </div>
                <div class="intro-x w-10 h-10 image-fit -ml-5">
                  <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="${require("@/assets/images/" +
                    cell.getData().images[2])}">
                </div>
            </div>`;
          }
        },
        {
          title: "Stock",
          minWidth: 200,
          field: "remaining_stock",
          hozAlign: "center",
          vertAlign: "middle",
          print: false,
          download: false
        },
        {
          title: "Estado",
          minWidth: 200,
          field: "status",
          hozAlign: "center",
          vertAlign: "middle",
          print: false,
          download: false,
          formatter(cell) {
            return `<div class="flex items-center lg:justify-center ${
              cell.getData().status ? "text-theme-9" : "text-theme-6"
            }">
              <i data-feather="check-square" class="w-4 h-4 mr-2"></i> ${
                cell.getData().status ? "Active" : "Inactive"
              }
            </div>`;
          }
        },
        {
          title: "Acciones",
          minWidth: 200,
          field: "actions",
          responsive: 1,
          hozAlign: "center",
          vertAlign: "middle",
          print: false,
          download: false,
          formatter() {
            return `<div class="flex lg:justify-center items-center">
              <a class="flex items-center mr-3" id="btnEditar">
                <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit
              </a>    
            </div>`;
          }
        }
      ],
      renderComplete() {
        feather.replace({
          "stroke-width": 1.5
        });
      }
    });

    // Redraw table onresize
    window.addEventListener("resize", () => {
      this.table.redraw();
      feather.replace({
        "stroke-width": 1.5
      });
    });

    document
      .getElementById("btnEditar")
      .addEventListener("click", this.onFilter());
  },
  methods: {
    // Filter function
    onFilter() {
      this.table.setFilter(
        this.filter.field,
        this.filter.type,
        this.filter.value
      );
    },

    // On reset filter
    onResetFilter() {
      this.filter.field = "name";
      this.filter.type = "like";
      this.filter.value = "";
      this.onFilter();
    },

    // Export
    onExportCsv() {
      this.table.download("csv", "data.csv");
    },
    onExportJson() {
      this.table.download("json", "data.json");
    },
    onExportXlsx() {
      window.XLSX = xlsx;
      this.table.download("xlsx", "data.xlsx", {
        sheetName: "Products"
      });
    },
    onExportHtml() {
      this.table.download("html", "data.html", {
        style: true
      });
    },

    // Print
    onPrint() {
      this.table.print();
    }
  }
};
</script>
