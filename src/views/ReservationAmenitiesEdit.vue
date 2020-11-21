<template>
  <div>
    <!-- BEGIN: Document title -->
    <div class="intro-y flex flex-col sm:flex-row items-center mt-4 mb-5">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Reserva Amenidades<span class="font-normal text-lg"> (Edición)</span>
      </h2>
    </div>
    <!-- END: Document title -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
      <!-- BEGIN: Select date -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Fecha de inicio:</label>
        <LitePicker
          v-model="date"
          :options="{
            autoApply: false,
            lang: 'es-ES',
            showWeekNumbers: true,
            minDate: new Date(),
            dropdowns: {
              minYear: 1990,
              maxYear: null,
              months: true,
              years: true
            }
          }"
          class="input w-full border block mr-auto"
        />
        <!-- <input
          type="text"
          class="input w-full border mt-2"
          placeholder="Input text"
        /> -->
      </div>
      <!-- END: Select date -->
      <!-- BEGIN: Select time -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Hora:</label>
        <div>
          <TailSelect
            v-model="time"
            :options="{
              search: false,
              classNames: 'w-full'
            }"
          >
            <option value="null">Seleccione una opción</option>
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
            <option value="11">18:00</option>
          </TailSelect>
        </div>
      </div>
      <!-- END: Select time -->
      <!-- BEGIN: Select amenities -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Amenidad:</label>
        <div>
          <TailSelect
            v-model="amenity"
            :options="{
              search: false,
              classNames: 'w-full'
            }"
          >
            <option value="null">Seleccione una opción</option>
            <option value="1">Simulado de Golf</option>
            <option value="2">BBQ</option>
            <option value="3">Area 2 Piscina</option>
            <option value="4">Area Juegos Infantiles</option>
          </TailSelect>
        </div>
      </div>
      <!-- END: Select amenities -->
    </div>
    <div class="mt-4 mb-4">
      <label class="font-medium text-lg">Comentario:</label>
      <div class="preview">
        <CKEditor
          v-model="comment_text"
          :editor="classicEditor"
          :config="simpleEditorConfig"
          :options="{
            classNames: 'rounded-3xl'
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
      <!-- BEGIN: Select propietary -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Propietario:</label>
        <div>
          <TailSelect
            v-model="propietary"
            :options="{
              search: true,
              classNames: 'w-full'
            }"
          >
            <option value="null">Seleccione una opción</option>
            <option value="1">Propietario 1</option>
            <option value="2">Propietario 2</option>
          </TailSelect>
        </div>
      </div>
      <!-- END: Select propietary -->
      <!-- BEGIN: Select state -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Estado:</label>
        <div>
          <TailSelect
            v-model="state"
            :options="{
              search: true,
              classNames: 'w-full'
            }"
          >
            <option value="null">Seleccione una opción</option>
            <option value="1">Pendiente</option>
            <option value="2">Aprobado</option>
            <option value="3">No aprobado</option>
          </TailSelect>
        </div>
      </div>
      <!-- END: Select state -->
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
        to="/reservation-amenities"
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
export default {
  components: {
    CKEditor: CKEditor.component
  },
  data() {
    return {
      classicEditor: ClassicEditor,
      date: "",
      time: "null",
      propietary: "null",
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
          items: ["bold", "italic", "underline", "link"]
        }
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
