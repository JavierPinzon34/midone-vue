<template>
  <!-- BEGIN: Blog Layout -->
  <div class="intro-y col-span-12 mb-5 md:col-span-6 xl:col-span-4 box">
    <router-link
      :to="{
        path: '/amenity-edit',
        query: { id: dataInfo.id }
      }"
    >
      <!-- BEGIN: content -->
      <div class="p-5">
        <div class="h-40 xxl:h-56 image-fit">
          <img
            alt="Midone Tailwind HTML Admin Template"
            class="rounded-md"
            :src="require(`@/assets/images/preview-6.jpg`)"
          />
        </div>
        <a href="" class="block font-medium text-base mt-5">{{
          dataInfo.title
        }}</a>
        <div class="text-gray-700 dark:text-gray-600 mt-2">
          <!-- eslint-disable-next-line -->
          <p v-if="dataInfo.content" v-html="dataInfo.content"></p>
        </div>
      </div>
      <!-- END: content -->
      <!-- BEGIN: state -->
      <!-- <div class="px-5 pt-3 pb-3 border-t border-gray-200 dark:border-dark-5">
        <div class="w-full flex items-center">
          <div class="items-center">
            <span class="px-3 py-1 rounded-full bg-theme-9 text-white mr-2" />
            <span class="text-lg">Abierto</span>
          </div>
        </div>
      </div> -->
      <!-- END: state -->
      <!-- BEGIN: buttons -->
      <div
        class="flex items-center px-5 py-3 border-t border-gray-200 dark:border-dark-5"
      >
        <router-link
          class="intro-x w-8 h-8 flex items-center ml-auto justify-center rounded-full bg-theme-3 text-white ml-2"
          :to="{
            path: '/amenity-edit',
            query: { id: dataInfo.id }
          }"
        >
          <EditIcon class="w-3 h-3" />
        </router-link>
        <router-link
          to="/new-amenity-reserve"
          class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-12 text-white ml-2"
        >
          <CalendarIcon class="w-3 h-3" />
        </router-link>
      </div>
      <!-- END: buttons -->
    </router-link>
  </div>
  <!-- END: Blog Layout -->
</template>
<script>
export default {
  props: {
    number: {
      type: Number,
      default: () => 0
    },
    dataInfo: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
