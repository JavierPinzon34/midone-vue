<template>
  <div>
    <!-- BEGIN: Document title -->
    <div class="intro-y flex flex-col sm:flex-row items-center mt-4 mb-5">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Formulario de registro de reservas
        <span class="font-normal text-lg"> (Apto #)</span>
      </h2>
    </div>
    <!-- END: Document title -->
    <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
      <!-- BEGIN: Select type reservation -->
      <div class="w-full col-span-3">
        <label class="font-medium text-lg">Tipo de reserva:</label>
        <div class="flex flex-col sm:flex-row sm:mt-4">
          <div class="flex items-center text-gray-700 dark:text-gray-500 mr-2">
            <input
              id="rooftop-radio-yes"
              v-model="form.type_reservation"
              type="radio"
              class="input border mr-2"
              name="type_reservation_button"
              value="propietary"
            />
            <label class="cursor-pointer select-none" for="rooftop-radio-yes">
              Propietario
            </label>
          </div>
          <div
            class="flex items-center text-gray-700 dark:text-gray-500 mr-2 mt-2 sm:mt-0"
          >
            <input
              id="rooftop-radio-no"
              v-model="form.type_reservation"
              type="radio"
              class="input border mr-2"
              name="type_reservation_button"
              value="family"
            />
            <label class="cursor-pointer select-none" for="rooftop-radio-no">
              Familiar
            </label>
          </div>
          <div
            class="flex items-center text-gray-700 dark:text-gray-500 mr-2 mt-2 sm:mt-0"
          >
            <input
              id="rooftop-radio-no"
              v-model="form.type_reservation"
              type="radio"
              class="input border mr-2"
              name="type_reservation_button"
              value="invited"
            />
            <label class="cursor-pointer select-none" for="rooftop-radio-no">
              Invitado
            </label>
          </div>
          <div
            class="flex items-center text-gray-700 dark:text-gray-500 mr-2 mt-2 sm:mt-0"
          >
            <input
              id="rooftop-radio-no"
              v-model="form.type_reservation"
              type="radio"
              class="input border mr-2"
              name="type_reservation_button"
              value="guest"
            />
            <label class="cursor-pointer select-none" for="rooftop-radio-no">
              Huésped
            </label>
          </div>
        </div>
      </div>
      <!-- END: Select type reservation -->
      <!-- BEGIN: Select amenities -->
      <div class="w-full col-span-3">
        <label class="font-medium text-lg">Parqueaderos:</label>
        <div>
          <TailSelect
            v-model="form.parking"
            :options="{
              search: false,
              classNames: 'w-full'
            }"
          >
            <option value="null">Seleccione una opción</option>
            <option value="1">Parqueadero</option>
            <option value="2">Apto</option>
          </TailSelect>
        </div>
      </div>
      <!-- END: Select amenities -->
      <!-- BEGIN: Select date -->
      <div class="w-full col-span-3">
        <label class="font-medium text-lg">Rango de fechas:</label>
        <LitePicker
          v-model="form.date"
          :options="{
            autoApply: false,
            singleMode: false,
            numberOfMonths: 2,
            numberOfColumns: 2,
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
      <!-- BEGIN: Select pax -->
      <div class="w-full col-span-1">
        <div class="font-medium text-lg">Pax:</div>
        <input
          v-model="form.pax"
          type="text"
          class="input w-full border flex-1"
        />
      </div>
      <!-- END: Select pax -->
    </div>
    <!-- BEGIN: Select pax -->
    <div class="w-full">
      <a
        type="button"
        class="button w-full sm:w-auto bg-theme-3 text-white mt-4"
        @click="generate_form()"
      >
        Generar Formulario Huéspedes
      </a>
    </div>
    <div v-if="generate_guest > 0">
      <div class="intro-y flex flex-col sm:flex-row items-center mt-4 mb-5">
        <h2 class="text-xl font-medium mr-auto border-b-2">
          Formulario de información de huéspedes
        </h2>
      </div>
      <div>
        <a
          class="button w-full sm:w-auto mt-2 sm:mt-0 sm:ml-1 bg-theme-6 text-white"
          @click="clear_form()"
        >
          Eliminar Formulario
        </a>
        <a
          class="button w-full sm:w-auto mt-2 sm:mt-0 sm:ml-1 bg-gray-400 text-black"
          @click="generate_car()"
        >
          Registrar Vehiculo
        </a>
      </div>
      <div
        v-for="n in generate_guest"
        :key="n"
        class="border-t border-gray-500 dark:border-dark-5 mt-5 mb-10"
      >
        <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
          <div class="mt-2 col-span-12 text-xl font-medium">
            Huésped {{ n }}:
          </div>
          <div
            v-if="n == 1 && car == 1"
            class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
          >
            <div class="mb-2">Placa:</div>
            <input
              v-model="guest_information[n - 1].plate"
              type="text"
              class="input w-full border flex-1 z-0"
            />
          </div>
          <div
            v-if="n == 1 && car == 1"
            class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
          >
            <div class="mb-2">Modelo:</div>
            <input
              v-model="guest_information[n - 1].model"
              type="text"
              class="input w-full border flex-1 z-0"
            />
          </div>
          <div
            v-if="n == 1 && car == 1"
            class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
          >
            <div class="mb-2">Color:</div>
            <input
              v-model="guest_information[n - 1].color"
              type="text"
              class="input w-full border flex-1 z-0"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
            <div class="mb-2">Nombre:</div>
            <input
              v-model="guest_information[n - 1].name"
              type="text"
              class="input w-full border flex-1 z-0"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
            <div class="mb-2">Apellido:</div>
            <input
              v-model="guest_information[n - 1].lastname"
              type="text"
              class="input w-full border flex-1 z-0"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
            <div class="mb-2">Tipo de Documento:</div>
            <TailSelect
              v-model="guest_information[n - 1].type_identification"
              :options="{
                search: false,
                classNames: 'w-full z-10'
              }"
            >
              <option value="null">Seleccione una opción</option>
              <option value="1">Cedula de Ciudadania</option>
              <option value="2">Cedula de Extrangeria</option>
              <option value="3">Tarjeta de Identidad</option>
              <option value="4">Pasaported</option>
              <option value="5">Nit</option>
            </TailSelect>
          </div>
          <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
            <div class="mb-2">Identificación:</div>
            <input
              v-model="guest_information[n - 1].identification"
              type="text"
              class="input w-full border flex-1 z-0"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
            <div class="mb-2">Fecha de Nacimiento:</div>
            <LitePicker
              v-model="guest_information[n - 1].birth_date"
              :options="{
                autoApply: false,
                singleMode: true,
                lang: 'es-ES',
                showWeekNumbers: true,
                dropdowns: {
                  minYear: 1990,
                  maxYear: null,
                  months: true,
                  years: true
                }
              }"
              class="input w-full border block mr-auto"
            />
          </div>
          <div
            v-if="n == 1"
            class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
          >
            <div class="mb-2">E-mail:</div>
            <input
              v-model="guest_information[n - 1].mail"
              type="text"
              class="input w-full border flex-1 z-0"
            />
          </div>
          <div
            v-if="n == 1"
            class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
          >
            <div class="mb-2">Telefono:</div>
            <input
              v-model="guest_information[n - 1].phone"
              type="text"
              class="input w-full border flex-1 z-0"
            />
          </div>
          <div
            v-if="n == 1"
            class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
          >
            <div class="mb-2">Dirección:</div>
            <input
              v-model="guest_information[n - 1].address"
              type="text"
              class="input w-full border flex-1 z-0"
            />
          </div>
          <div
            v-if="n > 1"
            class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
          >
            <div class="mb-2">Parentesco:</div>
            <input
              v-model="guest_information[n - 1].relationship"
              type="text"
              class="input w-full border flex-1 z-0"
            />
          </div>
        </div>
        <!-- <div class="intro-y col-span-12 mt-4">
          <a
            type="button"
            class="button w-full sm:w-auto bg-theme-6 text-white"
          >
            Eliminar
          </a>
        </div> -->
      </div>
    </div>
    <!-- END: Select pax -->
    <!-- BEGIN: Document title -->
    <div
      class="intro-y flex flex-col sm:flex-row mt-5 border-t border-gray-500 dark:border-dark-5 pt-5"
    >
      <a type="button" class="button w-full sm:w-auto bg-theme-9 text-white">
        Reservar
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
export default {
  data() {
    return {
      generate_guest: 0,
      guest_information: [],
      car: 0,
      form: {
        type_reservation: "",
        date: "",
        pax: "",
        parking: ""
      }
    };
  },
  methods: {
    sendData() {
      console.log("Editando");
    },
    generate_form() {
      let me = this;
      me.guest_information = [];
      me.generate_guest = parseInt(me.form.pax);
      for (let index = 0; index < me.generate_guest; index++) {
        let guest = {
          plate: "",
          model: "",
          color: "",
          name: "",
          lastname: "",
          type_identification: "",
          identification: "",
          birth_date: "",
          mail: "",
          phone: "",
          address: "",
          relationship: ""
        };
        me.guest_information.push(guest);
      }
    },
    clear_form() {
      let me = this;
      me.guest_information = [];
      me.generate_guest = 0;
    },
    generate_car() {
      this.car = 1;
    }
  }
};
</script>
