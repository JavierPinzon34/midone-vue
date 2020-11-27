<template>
  <div>
    <div class="intro-y news p-5 box mt-8">
      <!-- BEGIN: Blog Layout -->
      <div class="intro-y mb-6">
        <div class="news__preview image-fit">
          <img
            alt="Midone Tailwind HTML Admin Template"
            class="rounded-md"
            :src="require(`@/assets/images/${$f()[0].images[0]}`)"
          />
        </div>
      </div>
      <h2 class="intro-y font-medium text-xl sm:text-2xl">
        {{ $f()[0].news[0].title }}
      </h2>
      <div
        class="intro-y text-gray-700 dark:text-gray-600 mt-3 text-sm sm:text-lg"
      >
        <span
          class="text-xs px-2 pt-1 rounded-full bg-green-500 text-white mr-2 ml-2"
        />
        <span>Abierto 6:00 am - 8:00 pm</span>
      </div>
      <div class="intro-y text-justify leading-relaxed mt-8">
        <p class="mb-5">{{ $f()[1].news[0].content }}</p>
        <p class="mb-5">{{ $f()[2].news[0].content }}</p>
        <p>{{ $f()[3].news[0].content }}</p>
      </div>
      <!-- END: Blog Layout -->
      <div id="fade-animation-slider" class="p-5 mt-8">
        <div class="preview">
          <VueSlickCarousel
            ref="important-notes"
            :dots="true"
            :infinite="false"
            :speed="300"
            :fade="true"
            css-ease="linear"
            class="mx-6 mb-8"
          >
            <div class="h-64 px-2">
              <div class="h-full image-fit rounded-md overflow-hidden">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  :src="require(`@/assets/images/${$f()[0].images[0]}`)"
                  data-action="zoom"
                  class="w-full rounded-md"
                />
              </div>
            </div>
            <div class="h-64 px-2">
              <div class="h-full image-fit rounded-md overflow-hidden">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  :src="require(`@/assets/images/${$f()[1].images[1]}`)"
                  data-action="zoom"
                  class="w-full rounded-md"
                />
              </div>
            </div>
            <div class="h-64 px-2">
              <div class="h-full image-fit rounded-md overflow-hidden">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  :src="require(`@/assets/images/${$f()[2].images[2]}`)"
                  data-action="zoom"
                  class="w-full rounded-md"
                />
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <!-- BEGIN: Document button -->
    <div class="intro-y flex flex-col sm:flex-row mt-8">
      <router-link
        class="button w-full sm:w-auto mt-2 sm:mt-0 sm:ml-1 bg-theme-9 text-white"
        to="/new-amenity-reserve"
      >
        Reservar
      </router-link>
      <router-link
        class="button w-full sm:w-auto mt-2 sm:mt-0 sm:ml-1 bg-theme-6 text-white"
        to="/list-amenities"
      >
        Atras
      </router-link>
    </div>
    <!-- END: Document button -->
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    VueSlickCarousel
  }
};
</script>
