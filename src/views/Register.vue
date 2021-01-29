<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Register Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-6"
              :src="require(`@/assets/images/logo.svg`)"
            />
            <span class="text-white text-lg ml-3">
              Mid<span class="font-medium">One</span>
            </span>
          </a>
          <div class="my-auto">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="-intro-x w-1/2 -mt-16"
              :src="require(`@/assets/images/illustration.svg`)"
            />
            <div
              class="-intro-x text-white font-medium text-4xl leading-tight mt-10"
            >
              Unos pocos clics más para<br />
              Regístrese en su cuenta.
            </div>
            <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">
              comentario segundario
            </div>
          </div>
        </div>
        <!-- END: Register Info -->
        <!-- BEGIN: Register Form -->
        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
          <div
            class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <h2
              class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
            >
              Formulario de Registro
            </h2>
            <!-- <div
              class="intro-x mt-2 text-gray-500 dark:text-gray-500 xl:hidden text-center"
            >
              A few more clicks to sign in to your account. Manage all your
              e-commerce accounts in one place
            </div> -->
            <div class="intro-x mt-8">
              <input
                v-model="form.name"
                type="text"
                class="intro-x login__input input input--lg border border-gray-300 block"
                :class="{ 'is-invalid': $v.form.name.$error }"
                placeholder="Nombre"
              />
              <template v-if="$v.form.name.$error">
                <div v-if="!$v.form.name.required" class="invalid-feedback">
                  Digite el Nombre
                </div>
                <div v-if="!$v.form.name.maxLength" class="invalid-feedback">
                  Exede los 100 Caracteres
                </div>
              </template>
              <input
                v-model="form.last_name"
                type="text"
                class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                :class="{ 'is-invalid': $v.form.last_name.$error }"
                placeholder="Apellido"
              />
              <template v-if="$v.form.last_name.$error">
                <div
                  v-if="!$v.form.last_name.required"
                  class="invalid-feedback"
                >
                  Digite el Apellido
                </div>
                <div
                  v-if="!$v.form.last_name.maxLength"
                  class="invalid-feedback"
                >
                  Exede los 120 Caracteres
                </div>
              </template>
              <input
                v-model="form.phone"
                type="text"
                class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                :class="{ 'is-invalid': $v.form.phone.$error }"
                placeholder="Telefono"
              />
              <template v-if="$v.form.phone.$error">
                <div v-if="!$v.form.phone.required" class="invalid-feedback">
                  Digite el Telefono
                </div>
                <div v-if="!$v.form.phone.maxLength" class="invalid-feedback">
                  Exede los 20 Caracteres
                </div>
              </template>
              <input
                v-model="form.building_name"
                type="text"
                class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                :class="{ 'is-invalid': $v.form.building_name.$error }"
                placeholder="Nombre del edificio"
              />
              <template v-if="$v.form.building_name.$error">
                <div
                  v-if="!$v.form.building_name.required"
                  class="invalid-feedback"
                >
                  Digite el Nombre del Edificio
                </div>
                <div
                  v-if="!$v.form.building_name.maxLength"
                  class="invalid-feedback"
                >
                  Exede los 100 Caracteres
                </div>
              </template>
              <input
                v-model="form.building_nit"
                type="text"
                class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                :class="{ 'is-invalid': $v.form.building_nit.$error }"
                placeholder="Nit del edificio"
              />
              <template v-if="$v.form.building_nit.$error">
                <div
                  v-if="!$v.form.building_nit.required"
                  class="invalid-feedback"
                >
                  Digite el Nit del Edificio
                </div>
                <div
                  v-if="!$v.form.building_nit.maxLength"
                  class="invalid-feedback"
                >
                  Exede los 100 Caracteres
                </div>
              </template>
              <input
                v-model="form.email"
                type="text"
                class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                :class="{ 'is-invalid': $v.form.email.$error }"
                placeholder="E-mail"
              />
              <template v-if="$v.form.email.$error">
                <div v-if="!$v.form.email.required" class="invalid-feedback">
                  Digite el E-mail
                </div>
                <div v-if="!$v.form.email.maxLength" class="invalid-feedback">
                  Exede los 120 Caracteres
                </div>
                <div v-if="!$v.form.email.email" class="invalid-feedback">
                  No es un E-mail Valido
                </div>
              </template>
              <input
                v-model="form.password"
                type="password"
                class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                :class="{ 'is-invalid': $v.form.password.$error }"
                placeholder="Contraseña"
              />
              <template v-if="$v.form.password.$error">
                <div v-if="!$v.form.password.required" class="invalid-feedback">
                  Digite la Contraseña
                </div>
                <div
                  v-if="!$v.form.password.maxLength"
                  class="invalid-feedback"
                >
                  Exede los 120 Caracteres
                </div>
              </template>
            </div>
            <div
              class="intro-x flex items-center text-gray-700 dark:text-gray-600 mt-4 text-xs sm:text-sm"
            >
              <input
                id="remember-me"
                v-model="form.terms"
                type="checkbox"
                class="input border mr-2"
                :class="{ 'is-invalid': $v.form.terms.$error }"
              />
              <label class="cursor-pointer select-none" for="remember-me"
                >Acepto</label
              >
              <a class="text-theme-1 dark:text-theme-10 ml-1" href=""
                >Terminos y Condiciones</a
              >.
              <template v-if="$v.form.terms.$error">
                <div v-if="!$v.form.terms.sameAs" class="invalid-feedback">
                  Falta Aceptar Terminos y Condiciones
                </div>
              </template>
            </div>
            <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              <button
                class="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top"
                @click="sendData()"
              >
                Registrarme
              </button>
              <button
                class="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-3 xl:mt-0 align-top"
              >
                Iniciar
              </button>
            </div>
          </div>
        </div>
        <!-- END: Register Form -->
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeSwitcher from "@/components/DarkModeSwitcher";
import {
  required,
  maxLength,
  email,
  sameAs
} from "vuelidate/lib/validators"; /* importamos las propiedades de la validación */

export default {
  components: {
    DarkModeSwitcher
  },
  data() {
    return {
      form: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        phone: "",
        building_name: "",
        building_nit: "",
        terms: false
      }
    };
  },
  validations() {
    let form = {
      form: {
        name: {
          required,
          maxLength: maxLength(100)
        },
        last_name: {
          required,
          maxLength: maxLength(100)
        },
        email: {
          required,
          maxLength: maxLength(120),
          email
        },
        password: {
          required,
          maxLength: maxLength(30)
        },
        phone: {
          required,
          maxLength: maxLength(20)
        },
        building_name: {
          required,
          maxLength: maxLength(100)
        },
        building_nit: {
          required,
          maxLength: maxLength(100)
        },
        terms: {
          sameAs: sameAs(() => true)
        }
      }
    };
    return form;
  },
  mounted() {
    cash("body")
      .removeClass("app")
      .addClass("login");
  },
  methods: {
    sendData() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.axios({
          method: "post",
          url: "auth/register",
          data: this.form
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  }
};
</script>
