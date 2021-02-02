<template>
  <div>
    <!-- BEGIN: Document title -->
    <div class="intro-y flex flex-col sm:flex-row items-center mt-4 mb-5">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Amenidades<span class="font-normal text-lg"> (Nueva)</span>
      </h2>
    </div>
    <!-- END: Document title -->
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-2">
      <!-- BEGIN: name input -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Nombre:</label>
        <input v-model="name" type="text" class="input w-full border" />
      </div>
      <!-- END: name input -->
      <!-- BEGIN: capacity input -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Capacidad:</label>
        <input
          v-model="capacity"
          type="number"
          min="0"
          class="input w-full border"
        />
      </div>
      <!-- END: capacity input -->
      <!-- BEGIN: value input -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Valor:</label>
        <input
          v-model="value"
          type="number"
          min="0"
          class="input w-full border"
        />
      </div>
      <!-- END: value input -->
      <!-- BEGIN: Select floor -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Pisos:</label>
        <div>
          <TailSelect
            v-model="floor"
            :options="{
              search: false,
              classNames: 'w-full'
            }"
          >
            <option value="null">Seleccione</option>
            <option value="1">Sótano 1</option>
            <option value="2">Piso 1</option>
            <option value="3">Piso 2</option>
            <option value="4">Azotea 1</option>
          </TailSelect>
        </div>
      </div>
      <!-- END: Select floor -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Descripción:</label>
        <div class="preview">
          <CKEditor
            v-model="description"
            :editor="classicEditor"
            :config="simpleEditorConfig"
            :options="{
              classNames: 'rounded-3xl'
            }"
          />
        </div>
      </div>
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Reglas:</label>
        <div class="preview">
          <CKEditor
            v-model="rules"
            :editor="classicEditor"
            :config="simpleEditorConfig"
            :options="{
              classNames: 'rounded-3xl'
            }"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-2 mt-4">
      <!-- BEGIN: select time begin -->
      <div class="w-full md:col-span-1 lg:col-span-2 z-50">
        <label class="font-medium text-lg">Hora de apertura:</label>
        <div>
          <TailSelect
            v-model="begin_time"
            :options="{
              search: false,
              classNames: 'w-full'
            }"
          >
            <option value="null">Seleccione</option>
            <option value="1">08:00</option>
            <option value="2">09:00</option>
            <option value="3">10:00</option>
            <option value="4">11:00</option>
            <option value="5">18:00</option>
            <option value="6">13:00</option>
            <option value="7">14:00</option>
            <option value="8">15:00</option>
            <option value="9">16:00</option>
            <option value="10">17:00</option>
            <option value="12">18:00</option>
            <option value="13">19:00</option>
            <option value="14">20:00</option>
            <option value="15">21:00</option>
            <option value="16">22:00</option>
            <option value="17">23:00</option>
            <option value="18">00:00</option>
            <option value="19">01:00</option>
            <option value="20">02:00</option>
            <option value="21">03:00</option>
            <option value="22">04:00</option>
            <option value="23">05:00</option>
            <option value="24">06:00</option>
            <option value="25">07:00</option>
          </TailSelect>
        </div>
      </div>
      <!-- END: select begin time -->
      <!-- BEGIN: select end time -->
      <div class="w-full md:col-span-1 lg:col-span-2 z-50">
        <label class="font-medium text-lg">Hora de cierre:</label>
        <div>
          <TailSelect
            v-model="end_time"
            :options="{
              search: false,
              classNames: 'w-full'
            }"
          >
            <option value="null">Seleccione</option>
            <option value="1">08:00</option>
            <option value="2">09:00</option>
            <option value="3">10:00</option>
            <option value="4">11:00</option>
            <option value="5">18:00</option>
            <option value="6">13:00</option>
            <option value="7">14:00</option>
            <option value="8">15:00</option>
            <option value="9">16:00</option>
            <option value="10">17:00</option>
            <option value="12">18:00</option>
            <option value="13">19:00</option>
            <option value="14">20:00</option>
            <option value="15">21:00</option>
            <option value="16">22:00</option>
            <option value="17">23:00</option>
            <option value="18">00:00</option>
            <option value="19">01:00</option>
            <option value="20">02:00</option>
            <option value="21">03:00</option>
            <option value="22">04:00</option>
            <option value="23">05:00</option>
            <option value="24">06:00</option>
            <option value="25">07:00</option>
          </TailSelect>
        </div>
      </div>
      <!-- END: select end time -->
      <!-- BEGIN: select state -->
      <div class="w-full col-span-1 z-50">
        <label class="font-medium text-lg">Estado:</label>
        <div>
          <TailSelect
            v-model="state"
            :options="{
              search: false,
              classNames: 'w-full'
            }"
          >
            <option value="null">Seleccione</option>
            <option value="1">Activo</option>
            <option value="0">Inactivo</option>
          </TailSelect>
        </div>
      </div>
      <!-- END: select state -->
      <!-- BEGIN: select color -->
      <div class="w-full col-span-1 z-50">
        <label class="font-medium text-lg">Color:</label>
        <input
          v-model="color.navigation.background"
          type="color"
          class="w-full color-custom border"
        />
      </div>
      <!-- END: select color -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
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
      <div class="intro-y col-span-1">
        <!-- BEGIN: Multiple File Upload -->
        <label class="font-medium text-lg">Media:</label>
        <div class="intro-y box">
          <div id="multiple-file-upload" class="p-5 h-auto">
            <div class="preview h-auto">
              <VueDropzone
                id="dropzone-multiple"
                :use-custom-slot="true"
                :options="dropzoneMultipleOptions"
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
        <!-- END: Multiple File Upload -->
      </div>
    </div>
    <!-- BEGIN: Document title -->
    <div class="intro-y flex flex-col sm:flex-row mt-8">
      <a type="button" class="button w-full sm:w-auto bg-theme-9 text-white">
        Actualizar
      </a>
      <!-- <a
        type="button"
        class="button w-full sm:w-auto mt-2 sm:mt-0 sm:ml-1 bg-theme-6 text-white"
        href="/reservation-amenities"
      >
        Cancelar
      </a> -->
      <router-link
        class="button w-full sm:w-auto mt-2 sm:mt-0 sm:ml-1 bg-theme-6 text-white"
        to="/list-amenities"
      >
        cancelar
      </router-link>
    </div>
    <!-- END: Document title -->
  </div>
</template>
<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import vue2Dropzone from "vue2-dropzone";
export default {
  components: {
    CKEditor: CKEditor.component,
    VueDropzone: vue2Dropzone
  },
  data() {
    return {
      classicEditor: ClassicEditor,
      name: "",
      capacity: "",
      value: "",
      floor: "",
      description: "",
      rules: "",
      begin_time: "null",
      end_time: "null",
      color: {
        // Navigation
        navigation: {
          background: "#ffffff"
        }
      },
      state: "null",
      amenity: "null",
      comment_text: "<p>Contenido del editor.</p>",
      simpleEditorConfig: {
        language: "es",
        plugins: [
          ParagraphPlugin,
          BoldPlugin,
          UnderlinePlugin,
          ItalicPlugin,
          LinkPlugin
        ],
        toolbar: {
          items: ["bold", "italic", "underline"]
        }
      },
      dropzoneMultipleOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        addRemoveLinks: true
      },
      dropzoneSingleOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        maxFiles: 1,
        addRemoveLinks: true
      }
    };
  },
  methods: {
    sendData() {
      console.log("Editando");
    }
  }
};
</script>
<style lang="scss">
.color-custom {
  height: 39px !important;
}
</style>
