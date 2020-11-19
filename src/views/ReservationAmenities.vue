<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-2xl font-medium mr-auto">Reserva Amenidades</h2>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div class="intro-y box p-5 mt-5">
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
      placeholder: "No matching records found",
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
          title: "PRODUCT NAME",
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
          title: "IMAGES",
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
          title: "REMAINING STOCK",
          minWidth: 200,
          field: "remaining_stock",
          hozAlign: "center",
          vertAlign: "middle",
          print: false,
          download: false
        },
        {
          title: "STATUS",
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
          title: "ACTIONS",
          minWidth: 200,
          field: "actions",
          responsive: 1,
          hozAlign: "center",
          vertAlign: "middle",
          print: false,
          download: false,
          formatter() {
            return `<div class="flex lg:justify-center items-center">
              <a class="flex items-center mr-3" href="">
                <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit
              </a>
              <a class="flex items-center text-theme-6" href="">
                <i data-feather="trash-2" class="w-4 h-4 mr-1"></i> Delete
              </a>
            </div>`;
          }
        },

        // For print format
        {
          title: "PRODUCT NAME",
          field: "name",
          visible: false,
          print: true,
          download: true
        },
        {
          title: "CATEGORY",
          field: "category",
          visible: false,
          print: true,
          download: true
        },
        {
          title: "REMAINING STOCK",
          field: "remaining_stock",
          visible: false,
          print: true,
          download: true
        },
        {
          title: "STATUS",
          field: "status",
          visible: false,
          print: true,
          download: true,
          formatterPrint(cell) {
            return cell.getValue() ? "Active" : "Inactive";
          }
        },
        {
          title: "IMAGE 1",
          field: "images",
          visible: false,
          print: true,
          download: true,
          formatterPrint(cell) {
            return cell.getValue()[0];
          }
        },
        {
          title: "IMAGE 2",
          field: "images",
          visible: false,
          print: true,
          download: true,
          formatterPrint(cell) {
            return cell.getValue()[1];
          }
        },
        {
          title: "IMAGE 3",
          field: "images",
          visible: false,
          print: true,
          download: true,
          formatterPrint(cell) {
            return cell.getValue()[2];
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
