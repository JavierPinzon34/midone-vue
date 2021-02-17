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
        <input
          v-model="form.title"
          type="text"
          class="input w-full border"
          :class="{ 'border-red-500': $v.form.title.$error }"
        />
        <template v-if="$v.form.title.$error">
          <div
            v-if="!$v.form.title.required"
            class="font-medium text-xs text-red-500 mt-1 ml-1"
          >
            Digite el Título
          </div>
          <div
            v-if="!$v.form.title.maxLength"
            class="font-medium text-xs text-red-500 mt-1 ml-1"
          >
            Exede los 100 Caracteres
          </div>
        </template>
      </div>
      <!-- END: title input -->
      <!-- BEGIN: Select type -->
      <div class="w-full col-span-1 md:col-span-2">
        <label class="font-medium text-lg">Categoria:</label>
        <div>
          <select
            v-model="form.blog_types_id"
            class="input w-full border flex-1"
            :class="{ 'border-red-500': $v.form.blog_types_id.$error }"
          >
            <option value="0">Seleccione una opción</option>
            <option
              v-for="(types, index) in allBlogTypes"
              :key="index"
              :value="types.id"
            >
              {{ types.name }}
            </option>
          </select>
          <template v-if="$v.form.blog_types_id.$error">
            <div
              v-if="!$v.form.blog_types_id.required"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Seleccione la Categoria
            </div>
          </template>
        </div>
      </div>
      <!-- END: Select type -->
    </div>
    <div class="grid grid-cols-1 gap-2 mt-4">
      <div class="w-full col-span-1">
        <label class="font-medium text-lg">Descripción:</label>
        <div
          class="preview"
          :class="{ 'is-invalid-editor': $v.form.content.$error }"
        >
          <CKEditor
            v-model="form.content"
            :editor="classicEditor"
            :config="simpleEditorConfig"
            :options="{
              classNames: 'rounded'
            }"
          />
        </div>
        <template v-if="$v.form.content.$error">
          <div
            v-if="!$v.form.content.required"
            class="font-medium text-xs text-red-500 mt-1 ml-1"
          >
            Digite el Contenido
          </div>
        </template>
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
        v-if="blogId"
        class="button w-24 justify-center block bg-theme-9 text-white"
        @click="sendBlog(2)"
      >
        Actualizar
      </button>
      <button
        v-else
        class="button w-24 justify-center block bg-theme-9 text-white"
        @click="sendBlog(1)"
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
      blog: "",
      building: "",
      form: {
        title: "",
        buildings_id: "",
        blog_types_id: "0",
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
  validations() {
    let form = {
      form: {
        title: {
          required,
          maxLength: maxLength(100)
        },
        blog_types_id: {
          required
        },
        content: {
          required
        }
      }
    };
    return form;
  },
  computed: {
    blogId() {
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
    this.$store.dispatch("getBlogTypes");
  },
  mounted() {
    if (this.blogId) {
      console.log(this.blogId);
      this.axios
        .get(`blogs?id=${this.blogId}`)
        .then(res => {
          this.blog = res.data.content;
          console.log(this.blog);
          this.form.title = this.blog.title;
          this.form.content = this.blog.content;
          this.form.blog_types_id = this.blog.blog_types_id;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  methods: {
    sendBlog(evento) {
      if (this.form.blog_types_id == 0) {
        this.form.blog_types_id = "";
      }
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        if (evento == 1) {
          /* let formData = new FormData();
          formData.append("code", this.form.code);
          formData.append("parent_id", this.form.parent_id);
          formData.append("division_types_id", this.form.division_types_id);
          formData.append("buildings_id", this.form.buildings_id);
          formData.append("metas", this.form.metas);
          formData.append("file", this.fileUpload); //get last element for array */
          this.axios
            .post("blogs", this.form)
            .then(res => {
              //console.log(res)
              setTimeout(() => {
                this.$swal({
                  icon: "success",
                  title: res.data.message,
                  showConfirmButton: true,
                  timer: 2000
                });
                //this.getChildsBuilding(this.option);
                this.$router.push("/blog");
              }, 1000);
            })
            .catch(err => {
              console.error(err);
            });
          /* this.axios
            .post("blogs", this.form, {
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
            }); */
        } else {
          //editar
          this.axios
            .put(`blogs/${this.blogId}`, this.form)
            .then(res => {
              //console.log(res)
              setTimeout(() => {
                this.$swal({
                  icon: "success",
                  title: res.data.message,
                  showConfirmButton: true,
                  timer: 2000
                });
                //this.getChildsBuilding(this.option);
                this.$router.push("/blog");
              }, 1000);
            })
            .catch(err => {
              console.error(err);
            });
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
.is-invalid-editor {
  border: 1px solid #f56565;
  border-radius: 3px;
}
</style>
