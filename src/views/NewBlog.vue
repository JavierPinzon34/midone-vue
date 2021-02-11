<template>
  <div>
    <!-- BEGIN: Document title -->
    <div class="intro-y flex flex-col sm:flex-row items-center mt-4 mb-5">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Nueva Noticia
      </h2>
    </div>
    <!-- END: Document title -->
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-2">
      <!-- BEGIN: title input -->
      <div class="w-full col-span-1 md:col-span-2">
        <label class="font-medium text-lg">Titulo:</label>
        <input v-model="form.title" type="text" class="input w-full border" />
        <!-- :class="{ 'border-red-500': $v.form.code.$error }"
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
        </template> -->
      </div>
      <!-- END: title input -->
      <!-- BEGIN: Select type -->
      <div class="w-full col-span-1 md:col-span-2">
        <label class="font-medium text-lg">Categoria:</label>
        <div>
          <select v-model="form.type" class="input w-full border flex-1">
            <option value="0">Seleccione una opción</option>
            <option
              v-for="(types, index) in allBlogTypes"
              :key="index"
              :value="types.id"
            >
              {{ types.name }}
            </option>
          </select>
          <!-- :class="{ 'border-red-500': $v.form.parent_id.$error }"
          <template v-if="$v.form.parent_id.$error">
            <div
              v-if="!$v.form.parent_id.required"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Seleccione el Piso
            </div>
          </template> -->
        </div>
      </div>
      <!-- END: Select type -->
    </div>
    <div class="grid grid-cols-1 gap-2 mt-4">
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Descripción:</label>
        <div class="preview">
          <CKEditor
            v-model="form.content"
            :editor="classicEditor"
            :config="simpleEditorConfig"
            :options="{
              classNames: 'rounded-3xl'
            }"
          />
          <!-- <template v-if="$v.metas.description.$error">
            <div
              v-if="!$v.metas.description.required"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Digite la Descripción
            </div>
          </template> -->
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-2 mt-5">
      <div class="intro-y col-span-1">
        <!-- BEGIN: Single File Upload -->
        <label class="font-medium text-lg">Imagen:</label>
        <div class="intro-y box">
          <div id="single-file-upload" class="p-5 h-auto">
            <div class="preview">
              <VueDropzone
                id="dropzone-single"
                :use-custom-slot="true"
                :vdropzone-success="uploadSuccess"
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
        class="button w-24 sm:w-auto mt-2 sm:mt-0 sm:ml-1 bg-theme-6 text-white"
        :to="{
          name: 'side-menu-noticias'
        }"
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
/* import {
  required,
  maxLength
  sameAs
} from "vuelidate/lib/validators"; 
*/
/* importamos las propiedades de la validación */

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
        title: "",
        division_types_id: 8,
        buildings_id: "",
        parent_id: "",
        type: "",
        content: ""
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
      dropzoneSingleOptions: {
        url: "http://127.0.0.1:8000/api/v1/files",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        maxFiles: 1,
        addRemoveLinks: true
      }
    };
  },
  /* validations() {
    let form = {
      form: {
        code: {
          required,
          maxLength: maxLength(100)
        },
        parent_id: {
          required
        }
      },
      metas: {
        capacity: {
          required
        },
        value: {
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
  }, */
  computed: {
    amenityId() {
      return this.$route.query.id;
    },
    allFloors() {
      return this.$store.getters.allFloors;
    },
    allBlogTypes() {
      return this.$store.getters.blogTypes;
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
    this.$store.dispatch("getBlogTypes");
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
          this.form.parent_id = this.amenity.parent_id;
          this.metas.capacity = this.amenity.metas[0].value;
          this.metas.value = this.amenity.metas[1].value;
          this.metas.description = this.amenity.metas[2].value;
          this.metas.rules = this.amenity.metas[3].value;
          this.metas.start = this.amenity.metas[4].value;
          this.metas.end = this.amenity.metas[5].value;
          this.metas.color = this.amenity.metas[6].value;
          this.metas.status = this.amenity.metas[7].value;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  methods: {
    sendAmenity(evento) {
      if (this.metas.parent_id == "0") {
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
          let formData = new FormData();
          formData.append("code", this.form.code);
          formData.append("parent_id", this.form.parent_id);
          formData.append("division_types_id", this.form.division_types_id);
          formData.append("buildings_id", this.form.buildings_id);
          formData.append("metas", this.form.metas);
          formData.append("file", this.fileUpload); //get last element for array
          this.axios
            .post("divisions", formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })
            //console.log(this.form.metas);
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
    },
    uploadSuccess(file, response) {
      console.log("File Successfully Uploaded with file name: ".response.file);
      this.fileName = response.file;
    }
  }
};
</script>
<style lang="scss">
.color-custom {
  height: 39px !important;
}
</style>
