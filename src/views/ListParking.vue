<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Listado de parqueaderos
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
                  v-for="item in allParkings"
                  :key="item.id"
                  class="accordion__pane border-b border-gray-200 dark:border-dark-5 pb-4"
                  :class="{ active: item.id == $route.query.id }"
                >
                  <a
                    href="javascript:;"
                    class="accordion__pane__toggle font-medium block"
                    >{{ item.code }} ({{ item.parent.code }})
                  </a>
                  <div
                    class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                  >
                    <div
                      class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4"
                    >
                      <ItemParking
                        v-for="(itemP, indexP) in item.childrens"
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
import ItemParking from "../components/ItemParking";
export default {
  components: {
    ItemParking
  },
  data() {
    return {
      building: ""
    };
  },
  computed: {
    allParkings() {
      return this.$store.getters.allParkings;
    }
  },
  created() {
    this.axios({
      method: "get",
      url: "buildings"
    })
      .then(res => {
        //console.log(res.data.content);
        this.building = res.data.content;
        const params = {
          type: 4,
          buildings_id: this.building.id
        };
        this.$store.dispatch("getParkings", params);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
