<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Listado Amenidades
      </h2>
    </div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8 mb-8">
      <div class="w-full sm:w-auto flex mt-3 sm:mt-0">
        <router-link
          class="button flex w-full sm:w-auto mt-2 sm:mt-0 sm:ml-1 bg-theme-9 text-white"
          to="/amenity-edit"
        >
          <PlusSquareIcon class="w-4 h-4 mr-2" />Nueva
        </router-link>
      </div>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <CardAmenity
        v-for="(faker, fakerKey) in $_.take($f(), 4)"
        :key="fakerKey"
        :number="fakerKey"
        :data-info="faker"
      />
    </div>
  </div>
</template>
<script>
import CardAmenity from "../components/CardAmenity";
export default {
  components: {
    CardAmenity
  }
};
</script>
