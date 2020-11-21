<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Listado Amenidades
      </h2>
    </div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8 mb-8">
      <div class="w-full sm:w-auto flex mt-3 sm:mt-0">
        <button
          class="button text-white bg-theme-9 shadow-md mr-2 flex items-center"
        >
          <PlusSquareIcon class="w-4 h-4 mr-2" />Nueva
        </button>
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
