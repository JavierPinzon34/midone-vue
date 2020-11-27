<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Listado de inmuebles
      </h2>
    </div>
    <div class="mt-8">
      <!-- BEGIN: Basic Accordion -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div id="basic-accordion" class="p-5">
            <div class="preview">
              <div class="accordion">
                <div
                  v-for="(item, index) in properties"
                  :key="index"
                  class="accordion__pane border-b border-gray-200 dark:border-dark-5 pb-4"
                >
                  <a
                    href="javascript:;"
                    class="accordion__pane__toggle font-medium block"
                    >{{ item.name }}</a
                  >
                  <div
                    class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                  >
                    <div
                      class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4"
                    >
                      <ItemProperty
                        v-for="(itemP, indexP) in item.dependence"
                        :key="indexP"
                        class="col-span-1"
                        :items="itemP"
                        :numero="item.id"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Basic Accordion -->
    </div>
  </div>
</template>
<script>
import ItemProperty from "../components/ItemProperty";
export default {
  components: {
    ItemProperty
  },
  data() {
    return {
      properties: [
        {
          id: "1",
          name: "Sótano 1",
          dependence: [
            {
              value: "1",
              text: "Parqueo apto 101",
              propietary: "Monica",
              type: 1
            },
            {
              value: "2",
              text: "Parqueo apto 102",
              propietary: "Sofia",
              type: 1
            },
            {
              value: "3",
              text: "Parqueo apto 103",
              propietary: "Ivan",
              type: 1
            },
            {
              value: "4",
              text: "Parqueo apto 201",
              propietary: "Jairo",
              type: 1
            },
            {
              value: "5",
              text: "Parqueo apto 202",
              propietary: "Juan",
              type: 1
            },
            {
              value: "6",
              text: "Parqueo apto 203",
              propietary: "German",
              type: 1
            },
            {
              value: "7",
              text: "Parqueo apto 204",
              propietary: "Amparo",
              type: 1
            },
            {
              value: "8",
              text: "Dep. apto 101",
              propietary: "Monica",
              type: 1
            },
            {
              value: "9",
              text: "Dep. apto 102",
              propietary: "Sofia",
              type: 1
            },
            {
              value: "10",
              text: "Dep. apto 103",
              propietary: "Ivan",
              type: 1
            },
            {
              value: "11",
              text: "Dep. apto 201",
              propietary: "Jairo",
              type: 1
            },
            {
              value: "12",
              text: "Dep. apto 202",
              propietary: "Juan",
              type: 1
            },
            {
              value: "13",
              text: "Dep. apto 203",
              propietary: "German",
              type: 1
            },
            {
              value: "14",
              text: "Dep. apto 204",
              propietary: "Amparo",
              type: 1
            }
          ]
        },
        {
          id: "2",
          name: "Piso 1",
          dependence: [
            { value: "1", text: "Apto 101", capacity: "6", type: 2 },
            { value: "2", text: "Apto 102", capacity: "6", type: 2 },
            { value: "3", text: "Apto 103", capacity: "6", type: 2 },
            { value: "4", text: "Area de juegos infantiles", type: 3 },
            { value: "5", text: "Area de juegos infantiles", type: 3 }
          ]
        },
        {
          id: "3",
          name: "Piso 2",
          dependence: [
            { value: "1", text: "Apto 201", capacity: "4", type: 2 },
            { value: "2", text: "Apto 202", capacity: "8", type: 2 },
            { value: "3", text: "Apto 203", capacity: "6", type: 2 },
            { value: "4", text: "Apto 204", capacity: "4", type: 2 }
          ]
        },
        {
          id: "3",
          name: "Azotea 1",
          dependence: [
            { value: "1", text: "Simulador de Golf", type: 3 },
            { value: "2", text: "BBQ", type: 3 },
            { value: "3", text: "Area 2 Piscina", type: 3 },
            { value: "4", text: "Area Juegos Infantiles", type: 3 },
            { value: "5", text: "Piscina", type: 3 }
          ]
        }
      ]
    };
  }
};
</script>
