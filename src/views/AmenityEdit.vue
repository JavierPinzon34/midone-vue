<template>
  <div>
    <!-- BEGIN: Document title -->
    <div class="intro-y flex flex-col sm:flex-row items-center mt-4 mb-5">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Amenidades
        <span v-if="amenityId" class="font-normal text-lg"> (Edición)</span>
        <span v-else class="font-normal text-lg"> (Nuevo)</span>
      </h2>
    </div>
    <!-- END: Document title -->
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-2">
      <!-- BEGIN: name input -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Nombre:</label>
        <input
          v-model="form.code"
          type="text"
          class="input w-full border"
          :class="{ 'border-red-500': $v.form.code.$error }"
        />
        <template v-if="$v.form.code.$error">
          <div
            v-if="!$v.form.code.required"
            class="font-medium text-xs text-red-500 mt-1 ml-1"
          >
            Digite el Nombre
          </div>
          <div
            v-if="!$v.form.code.maxLength"
            class="font-medium text-xs text-red-500 mt-1 ml-1"
          >
            Exede los 100 Caracteres
          </div>
        </template>
      </div>
      <!-- END: name input -->
      <!-- BEGIN: capacity input -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Capacidad:</label>
        <input
          v-model="metas.capacity"
          type="number"
          min="0"
          class="input w-full border"
          :class="{ 'border-red-500': $v.metas.capacity.$error }"
        />
        <template v-if="$v.metas.capacity.$error">
          <div
            v-if="!$v.metas.capacity.required"
            class="font-medium text-xs text-red-500 mt-1 ml-1"
          >
            Digite la Capacidad
          </div>
        </template>
      </div>
      <!-- END: capacity input -->
      <!-- BEGIN: value input -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Valor:</label>
        <input
          v-model="metas.value"
          type="number"
          min="0"
          class="input w-full border"
          :class="{ 'border-red-500': $v.metas.value.$error }"
        />
        <template v-if="$v.metas.value.$error">
          <div
            v-if="!$v.metas.value.required"
            class="font-medium text-xs text-red-500 mt-1 ml-1"
          >
            Digite el Valor
          </div>
        </template>
      </div>
      <!-- END: value input -->
      <!-- BEGIN: Select floor -->
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Pisos:</label>
        <div>
          <select
            v-model="metas.floor"
            class="input w-full border flex-1"
            :class="{ 'border-red-500': $v.metas.floor.$error }"
          >
            <option value="0">Seleccione una opción</option>
            <option
              v-for="(floor, index) in allFloors"
              :key="index"
              :value="floor.id"
            >
              {{ floor.code }}
            </option>
          </select>
          <template v-if="$v.metas.floor.$error">
            <div
              v-if="!$v.metas.floor.required"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Seleccione el Piso
            </div>
          </template>
        </div>
      </div>
      <!-- END: Select floor -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Descripción:</label>
        <div class="preview">
          <CKEditor
            v-model="metas.description"
            :editor="classicEditor"
            :config="simpleEditorConfig"
            :options="{
              classNames: 'rounded-3xl'
            }"
          />
          <template v-if="$v.metas.description.$error">
            <div
              v-if="!$v.metas.description.required"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Digite la Descripción
            </div>
          </template>
        </div>
      </div>
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Reglas:</label>
        <div class="preview">
          <CKEditor
            v-model="metas.rules"
            :editor="classicEditor"
            :config="simpleEditorConfig"
            :options="{
              classNames: 'rounded-3xl'
            }"
          />
          <template v-if="$v.metas.rules.$error">
            <div
              v-if="!$v.metas.rules.required"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Digite las Reglas
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-2 mt-4">
      <!-- BEGIN: select time begin -->
      <div class="w-full md:col-span-1 lg:col-span-2 z-50">
        <label class="font-medium text-lg">Hora de apertura:</label>
        <div>
          <select
            v-model="metas.start"
            class="input w-full border flex-1"
            :class="{ 'border-red-500': $v.metas.start.$error }"
          >
            <option value="0">Seleccione una opción</option>
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
          </select>
          <template v-if="$v.metas.start.$error">
            <div
              v-if="!$v.metas.start.required"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Seleccione la Hora de Apertura
            </div>
          </template>
        </div>
      </div>
      <!-- END: select begin time -->
      <!-- BEGIN: select end time -->
      <div class="w-full md:col-span-1 lg:col-span-2 z-50">
        <label class="font-medium text-lg">Hora de cierre:</label>
        <div>
          <select
            v-model="metas.end"
            class="input w-full border flex-1"
            :class="{ 'border-red-500': $v.metas.end.$error }"
          >
            <option value="0">Seleccione una opción</option>
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
          </select>
          <template v-if="$v.metas.end.$error">
            <div
              v-if="!$v.metas.end.required"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Seleccione la Hora de Cierre
            </div>
          </template>
        </div>
      </div>
      <!-- END: select end time -->
      <!-- BEGIN: select state -->
      <div class="w-full col-span-1 z-50">
        <label class="font-medium text-lg">Estado:</label>
        <div>
          <select
            v-model="metas.status"
            class="input w-full border flex-1"
            :class="{ 'border-red-500': $v.metas.status.$error }"
          >
            <option value="0">Seleccione una opción</option>
            <option value="1">activo</option>
            <option value="2">inactivo</option>
          </select>
          <template v-if="$v.metas.status.$error">
            <div
              v-if="!$v.metas.status.required"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Seleccione el Estado
            </div>
          </template>
        </div>
      </div>
      <!-- END: select state -->
      <!-- BEGIN: select color -->
      <div class="w-full col-span-1 z-50">
        <label class="font-medium text-lg">Color:</label>
        <input
          v-model="metas.color"
          type="color"
          class="w-full color-custom border"
          :class="{ 'border-red-500': $v.metas.color.$error }"
        />
        <template v-if="$v.metas.color.$error">
          <div
            v-if="!$v.metas.color.required"
            class="font-medium text-xs text-red-500 mt-1 ml-1"
          >
            Seleccione el Color
          </div>
        </template>
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
      <button
        v-if="amenityId"
        class="button w-24 justify-center block bg-theme-9 text-white"
        @click="sendAmenity(2)"
      >
        Actualizar
      </button>
      <button
        v-else
        class="button w-24 justify-center block bg-theme-9 text-white"
        @click="sendAmenity(1)"
      >
        Guardar
      </button>
      <!-- <a type="button" class="button w-full sm:w-auto bg-theme-9 text-white">
        Actualizar
      </a> -->
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
import {
  required,
  maxLength
  /* sameAs */
} from "vuelidate/lib/validators"; /* importamos las propiedades de la validación */

export default {
  components: {
    CKEditor: CKEditor.component,
    VueDropzone: vue2Dropzone
  },
  data() {
    return {
      classicEditor: ClassicEditor,
      amenity: "",
      building: "",
      form: {
        code: "",
        division_types_id: 8,
        buildings_id: "",
        metas: []
      },
      metas: {
        capacity: "",
        value: "",
        floor: "0",
        description: "",
        rules: "",
        start: "0",
        end: "0",
        color: "#ffffff",
        status: "0"
      },
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
  validations() {
    let form = {
      form: {
        code: {
          required,
          maxLength: maxLength(100)
        }
      },
      metas: {
        capacity: {
          required
        },
        value: {
          required
        },
        floor: {
          required
        },
        description: {
          required
        },
        rules: {
          required
        },
        start: {
          required
        },
        end: {
          required
        },
        color: {
          required
        },
        status: {
          required
        }
      }
    };
    return form;
  },
  computed: {
    amenityId() {
      return this.$route.query.id;
    },
    allFloors() {
      return this.$store.getters.allFloors;
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
        this.form.buildings_id = res.data.content.id;
      })
      .catch(err => {
        console.error(err);
      });
    this.$store.dispatch("getFloors", 3);
  },
  mounted() {
    if (this.amenityId) {
      console.log(this.amenityId);
      this.axios
        .get(`divisions?id=${this.amenityId}`)
        .then(res => {
          this.amenity = res.data.content;
          console.log(this.amenity);
          this.form.code = this.amenity.code;
          this.metas.capacity = this.amenity.metas[0].value;
          this.metas.value = this.amenity.metas[1].value;
          this.metas.floor = this.amenity.metas[2].value;
          this.metas.description = this.amenity.metas[3].value;
          this.metas.rules = this.amenity.metas[4].value;
          this.metas.start = this.amenity.metas[5].value;
          this.metas.end = this.amenity.metas[6].value;
          this.metas.color = this.amenity.metas[7].value;
          this.metas.status = this.amenity.metas[8].value;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  methods: {
    sendAmenity(evento) {
      if (this.metas.floor == "0") {
        this.metas.floor = "";
      }
      if (this.metas.start == "0") {
        this.metas.start = "";
      }
      if (this.metas.end == "0") {
        this.metas.end = "";
      }
      if (this.metas.status == "0") {
        this.metas.status = "";
      }
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        if (evento == 1) {
          const result = Object.keys(this.metas).map(key => [
            key,
            this.metas[key]
          ]);
          result.forEach(element => {
            this.form.metas.push({
              key: element[0],
              value: element[1]
            });
          });
          //console.log(this.form.metas);
          this.axios
            .post("divisions", this.form)
            .then(res => {
              console.log(res);
              setTimeout(() => {
                this.$swal({
                  icon: "success",
                  title: res.data.message,
                  showConfirmButton: true,
                  timer: 2000
                });
                //this.getChildsBuilding(this.option);
              }, 1000);
            })
            .catch(err => {
              console.error(err);
            });
        } else {
          //editar
        }
      }
    }
  }
};
</script>
<style lang="scss">
.color-custom {
  height: 39px !important;
}
</style>
