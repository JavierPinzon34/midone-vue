<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Noticias
      </h2>
    </div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8 mb-8">
      <div class="w-full sm:w-auto flex mt-3 sm:mt-0">
        <router-link
          class="button flex w-full sm:w-auto mt-2 sm:mt-0 sm:ml-1 bg-theme-9 text-white"
          :to="{
            name: 'side-menu-nueva-noticia'
          }"
        >
          <PlusSquareIcon class="w-4 h-4 mr-2" />Nueva
        </router-link>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-2">
      <div class="w-full col-span-1 md:col-span-8 pr-3">
        <CardBlog
          v-for="(item, index) in blogs"
          :key="index"
          :number="index"
          :data-info="item"
        />
      </div>
      <div class="w-full col-span-1 md:col-span-4 pl-3">
        <div
          v-for="(item, index) in blogTypes"
          :key="index"
          :number="index"
          :data-info="item"
        >
          <div class="mb-5 bg-white p-3 rounded-3xl border">
            <a href="#" class="text-2xl text-blue-600 hover:text-indigo-700">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardBlog from "../components/CardBlog";
export default {
  components: {
    CardBlog
  },
  computed: {
    blogs() {
      return this.$store.getters.blogs;
    },
    blogTypes() {
      return this.$store.getters.blogTypes;
    }
  },
  created() {
    this.$store.dispatch("getBlogs");
    this.$store.dispatch("getBlogTypes");
  }
};
</script>
