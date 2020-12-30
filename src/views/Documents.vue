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
    <div class="grid grid-cols-1 md:grid-cols-1 gap-2 mt-5">
      <div class="intro-y col-span-1">
        <!-- BEGIN: Single File Upload -->
        <label class="font-medium text-lg">Portada:</label>
        <div class="intro-y box">
          <div id="single-file-upload" class="p-5 h-auto">
            <div class="preview">
              <VueDropzone
                id="dropzone-single"
                :use-custom-slot="true"
                :options="dropzoneSingleOptions"
                class="dropzone font-roboto border-gray-200 border-dashed text-gray-800 hover:bg-transparent"
              >
                <div>
                  <UploadCloudIcon class="w-8 h-8 inline mr-3" />
                  <span class="text-lg font-medium align-middle">
                    Suelte el archivo aquí o haga clic para cargar.
                  </span>
                </div>
              </VueDropzone>
            </div>
          </div>
        </div>
        <!-- END: Single File Upload -->
      </div>
    </div>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
export default {
  components: {
    VueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneSingleOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        maxFiles: 1,
        addRemoveLinks: true,
        clickable: false,
        autoQueue: false
      }
    };
  }
};
</script>
