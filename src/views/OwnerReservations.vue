<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Propiedades
      </h2>
    </div>
    <div class="mt-8">
      <!-- BEGIN: Basic Accordion -->
      <!-- <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div id="basic-accordion" class="p-5">
            <div class="preview">
              <div class="accordion">
                
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- END: Basic Accordion -->
      <div
        v-for="(item, index) in properties"
        :key="index"
        class="border-b border-gray-200 dark:border-dark-5 pb-4"
      >
        <!-- <a href="javascript:;" class="font-medium block">
          {{ item.name }}
        </a> -->
        <div class="mt-3 text-gray-700 dark:text-gray-600 leading-relaxed">
          <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
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
              text: "apto 101",
              propietary: "Monica",
              type: 1,
              foot: 1
            },
            {
              value: "2",
              text: "Parqueo apto 101",
              propietary: "",
              type: 1
            },
            {
              value: "3",
              text: "Dep. 7 apto 101",
              propietary: "Ivan",
              type: 1
            }
          ]
        }
      ]
    };
  }
};
</script>
