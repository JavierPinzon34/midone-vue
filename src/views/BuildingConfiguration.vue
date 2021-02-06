<template>
  <div class="building-configuration">
    <div class="flex items-center mt-8">
      <h2 class="intro-y text-lg font-medium mr-auto">
        Configuración de Edificio
      </h2>
    </div>
    <!-- BEGIN: Wizard Layout -->
    <div class="intro-y box py-10 sm:py-20 mt-5 custom-wizard">
      <div
        class="wizard flex flex-col lg:flex-row justify-center px-5 sm:px-20"
      >
        <!-- BEGIN: Layout 1 -->
        <div
          class="intro-x lg:text-center flex items-center lg:block flex-1 z-10 option-one"
          :class="{ 'is-active': option == 1 }"
        >
          <button
            class="w-10 h-10 rounded-full button text-gray-600 bg-gray-200 dark:bg-dark-1"
            @click="changeOption(1)"
          >
            1
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-gray-700 dark:text-gray-600 title-active"
          >
            Información
          </div>
        </div>
        <!-- END: Layout 1 -->
        <!-- BEGIN: Layout 2 -->
        <div
          class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10 option-two"
          :class="{ 'is-active': option == 2 }"
        >
          <button
            class="w-10 h-10 rounded-full button text-gray-600 bg-gray-200 dark:bg-dark-1"
            @click="changeOption(2)"
          >
            2
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-gray-700 dark:text-gray-600 title-active"
          >
            Propiedades
          </div>
        </div>
        <!-- END: Layout 2 -->
        <!-- BEGIN: Layout 3 -->
        <div
          class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10 option-three"
          :class="{ 'is-active': option == 3 }"
        >
          <button
            class="w-10 h-10 rounded-full button text-gray-600 bg-gray-200 dark:bg-dark-1"
            @click="changeOption(3)"
          >
            3
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-gray-700 dark:text-gray-600 title-active"
          >
            Parqueaderos
          </div>
        </div>
        <!-- END: Layout 3 -->
        <!-- BEGIN: Layout 4 -->
        <div
          class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10 option-four"
          :class="{ 'is-active': option == 4 }"
        >
          <button
            class="w-10 h-10 rounded-full button text-gray-600 bg-gray-200 dark:bg-dark-1"
            @click="changeOption(4)"
          >
            4
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-gray-700 dark:text-gray-600 title-active"
          >
            Depositos
          </div>
        </div>
        <!-- END: Layout 4 -->
        <!-- BEGIN: Layout 5 -->
        <div
          class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10 option-five"
          :class="{ 'is-active': option == 5 }"
        >
          <button
            class="w-10 h-10 rounded-full button text-gray-600 bg-gray-200 dark:bg-dark-1"
            @click="changeOption(5)"
          >
            5
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-gray-700 dark:text-gray-600 title-active"
          >
            Reglas
          </div>
        </div>
        <!-- END: Layout 5 -->
        <div
          class="wizard__line hidden lg:block w-2/3 bg-gray-200 dark:bg-dark-1 absolute mt-5"
        ></div>
      </div>
      <!-- BEGIN: Option 1 -->
      <div
        v-if="option == 1"
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
      >
        <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
          <div class="intro-y col-span-12 sm:col-span-6">
            <div class="mb-2">Nombre del Edificio:</div>
            <input
              v-model="information.name"
              type="text"
              class="input w-full border flex-1"
              :class="{ 'border-red-500': $v.information.name.$error }"
            />
            <template v-if="$v.information.name.$error">
              <div
                v-if="!$v.information.name.required"
                class="font-medium text-xs text-red-500 mt-1 ml-1"
              >
                Digite el Nombre del Edificio
              </div>
              <div
                v-if="!$v.information.name.maxLength"
                class="font-medium text-xs text-red-500 mt-1 ml-1"
              >
                Exede los 100 Caracteres
              </div>
            </template>
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <div class="mb-2">Nombre de la Empresa:</div>
            <input
              v-model="information.company_name"
              type="text"
              class="input w-full border flex-1"
              :class="{ 'border-red-500': $v.information.company_name.$error }"
            />
            <template v-if="$v.information.company_name.$error">
              <div
                v-if="!$v.information.company_name.required"
                class="font-medium text-xs text-red-500 mt-1 ml-1"
              >
                Digite el Nombre de la Empresa
              </div>
              <div
                v-if="!$v.information.company_name.maxLength"
                class="font-medium text-xs text-red-500 mt-1 ml-1"
              >
                Exede los 100 Caracteres
              </div>
            </template>
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <div class="mb-2">Nit:</div>
            <input
              v-model="information.nit"
              type="text"
              class="input w-full border flex-1"
              :class="{ 'border-red-500': $v.information.nit.$error }"
            />
            <template v-if="$v.information.nit.$error">
              <div
                v-if="!$v.information.nit.required"
                class="font-medium text-xs text-red-500 mt-1 ml-1"
              >
                Digite el Nit
              </div>
              <div
                v-if="!$v.information.nit.maxLength"
                class="font-medium text-xs text-red-500 mt-1 ml-1"
              >
                Exede los 100 Caracteres
              </div>
            </template>
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <div class="mb-2">Telefono:</div>
            <input
              v-model="information.phone"
              type="text"
              class="input w-full border flex-1"
              :class="{ 'border-red-500': $v.information.phone.$error }"
            />
          </div>
          <template v-if="$v.information.phone.$error">
            <div
              v-if="!$v.information.phone.required"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Digite el Telefono
            </div>
            <div
              v-if="!$v.information.phone.maxLength"
              class="font-medium text-xs text-red-500 mt-1 ml-1"
            >
              Exede los 20 Caracteres
            </div>
          </template>
          <div class="intro-y col-span-12 sm:col-span-6">
            <div class="mb-2">Dirección:</div>
            <input
              v-model="information.address"
              type="text"
              class="input w-full border flex-1"
              :class="{ 'border-red-500': $v.information.address.$error }"
            />
            <template v-if="$v.information.address.$error">
              <div
                v-if="!$v.information.address.required"
                class="font-medium text-xs text-red-500 mt-1 ml-1"
              >
                Digite la Dirección
              </div>
              <div
                v-if="!$v.information.address.maxLength"
                class="font-medium text-xs text-red-500 mt-1 ml-1"
              >
                Exede los 100 Caracteres
              </div>
            </template>
          </div>
          <!-- <div class="intro-y col-span-12 sm:col-span-6">
            <div class="mb-2">Size</div>
            <select class="input w-full border flex-1">
              <option>10</option>
              <option>25</option>
              <option>35</option>
              <option>50</option>
            </select>
          </div> -->
          <div
            v-if="sending == false"
            class="intro-y col-span-12 flex items-center justify-center sm:justify-start"
          >
            <button
              class="button w-24 justify-center block bg-theme-1 text-white"
              @click="sendInformation()"
            >
              Guardar
            </button>
          </div>
          <div
            v-else
            class="intro-y col-span-12 flex items-center justify-center sm:justify-start"
          >
            <LoadingIcon icon="tail-spin" class="w-12 h-12" />
          </div>
          <div
            class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5"
          >
            <button
              v-if="option != 1"
              class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
              @click="previousOption()"
            >
              Anterior
            </button>
            <button
              v-if="option != 5"
              class="button w-24 justify-center block bg-theme-1 text-white ml-2"
              @click="nextOption()"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
      <!-- END: Option 1 -->
      <!-- BEGIN: Option 2 -->
      <div
        v-if="option == 2"
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
      >
        <!-- WITH INFORMATION -->
        <div v-if="layout_2">
          <div class="preview">
            <div class="overflow-x-auto">
              <table class="table">
                <thead>
                  <tr>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Pisos
                    </th>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Tiene Sótano
                    </th>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Tiene Azotea
                    </th>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Piso donde inicia la propiedad
                    </th>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Piso donde termina la propiedad
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border-b whitespace-no-wrap">
                      {{ form.floors }}
                    </td>
                    <td class="border-b whitespace-no-wrap">
                      {{ form.basement }}
                    </td>
                    <td class="border-b whitespace-no-wrap">
                      {{ form.rooftop }}
                    </td>
                    <td class="border-b whitespace-no-wrap">
                      {{ form.start_property }}
                    </td>
                    <td class="border-b whitespace-no-wrap">
                      {{ form.end_property }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="intro-y col-span-12 flex items-center justify-center sm:justify-start mt-8"
          >
            <button
              v-if="option != 1"
              class="button w-24 justify-center block bg-theme-6 text-white"
            >
              Restaurar
            </button>
          </div>
        </div>
        <!-- WITHOUT INFORMATION -->
        <div v-else>
          <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">Pisos:</div>
              <input
                v-model="form.propiety_floors"
                type="text"
                class="input w-full border flex-1"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">¿Tiene sótano?:</div>
              <div
                class="flex flex-col sm:flex-row"
                :class="{ 'sm:mt-4': form.basement_radio != 'si' }"
              >
                <div
                  class="flex items-center text-gray-700 dark:text-gray-500 mr-2"
                >
                  <input
                    id="basement-radio-yes"
                    v-model="form.basement_radio"
                    type="radio"
                    class="input border mr-2"
                    name="basement_radio_button"
                    value="si"
                  />
                  <label
                    class="cursor-pointer select-none"
                    for="basement-radio-yes"
                    >Si
                  </label>
                </div>
                <div
                  class="flex items-center text-gray-700 dark:text-gray-500 mr-2 mt-2 sm:mt-0"
                >
                  <input
                    id="basement-radio-no"
                    v-model="form.basement_radio"
                    type="radio"
                    class="input border mr-2"
                    name="basement_radio_button"
                    value="no"
                  />
                  <label
                    class="cursor-pointer select-none"
                    for="basement-radio-no"
                    >No
                  </label>
                </div>
                <div
                  v-if="form.basement_radio == 'si'"
                  class="flex items-center text-gray-700 dark:text-gray-500 mr-2 mt-2 sm:mt-0"
                >
                  <div class="ml-2 mr-2">Pisos:</div>
                  <input
                    v-model="form.propiety_floors"
                    type="text"
                    class="input w-full border flex-1"
                  />
                </div>
              </div>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">¿Tiene Azotea?:</div>
              <div
                class="flex flex-col sm:flex-row"
                :class="{ 'sm:mt-4': form.rooftop_radio != 'si' }"
              >
                <div
                  class="flex items-center text-gray-700 dark:text-gray-500 mr-2"
                >
                  <input
                    id="rooftop-radio-yes"
                    v-model="form.rooftop_radio"
                    type="radio"
                    class="input border mr-2"
                    name="rooftop_radio_button"
                    value="si"
                  />
                  <label
                    class="cursor-pointer select-none"
                    for="rooftop-radio-yes"
                    >Si
                  </label>
                </div>
                <div
                  class="flex items-center text-gray-700 dark:text-gray-500 mr-2 mt-2 sm:mt-0"
                >
                  <input
                    id="rooftop-radio-no"
                    v-model="form.rooftop_radio"
                    type="radio"
                    class="input border mr-2"
                    name="rooftop_radio_button"
                    value="no"
                  />
                  <label
                    class="cursor-pointer select-none"
                    for="rooftop-radio-no"
                    >No
                  </label>
                </div>
                <div
                  v-if="form.rooftop_radio == 'si'"
                  class="flex items-center text-gray-700 dark:text-gray-500 mr-2 mt-2 sm:mt-0"
                >
                  <div class="ml-2 mr-2">Pisos:</div>
                  <input
                    v-model="form.propiety_floors"
                    type="text"
                    class="input w-full border flex-1"
                  />
                </div>
              </div>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">Piso inicial:</div>
              <input
                v-model="form.initial_floor"
                type="text"
                class="input w-full border flex-1"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">Piso Final:</div>
              <input
                v-model="form.final_floor"
                type="text"
                class="input w-full border flex-1"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="mb-2">
                ¿Los pisos tienen el mismo número de inmuebles?:
              </div>
              <div class="flex flex-col sm:flex-row sm:mt-4">
                <div
                  class="flex items-center text-gray-700 dark:text-gray-500 mr-2"
                >
                  <input
                    id="mni-yes"
                    v-model="form.mni_radio"
                    type="radio"
                    class="input border mr-2"
                    name="mni_radio_button"
                    value="si"
                  />
                  <label class="cursor-pointer select-none" for="mni-yes">
                    Si
                  </label>
                </div>
                <div
                  class="flex items-center text-gray-700 dark:text-gray-500 mr-2 mt-2 sm:mt-0"
                >
                  <input
                    id="mni-no"
                    v-model="form.mni_radio"
                    type="radio"
                    class="input border mr-2"
                    name="mni_radio_button"
                    value="no"
                    @input="change_mni()"
                  />
                  <label class="cursor-pointer select-none" for="mni-no">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div
              v-if="form.mni_radio != 'no'"
              class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
            >
              <div class="mb-2">Número de inmuebles por piso:</div>
              <input
                v-model="form.number_of_properties"
                type="text"
                class="input w-full border flex-1"
              />
            </div>
            <div
              v-for="n in form.final_floor - form.initial_floor + 1"
              v-else
              :key="n"
              class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
            >
              <!-- <div v-if="n == 1" class="mb-2">
                Piso {{ form.initial_floor }}:
              </div> -->
              <div class="mb-2">Piso {{ initial_cont + n }}:</div>
              <input
                v-model="form.number_of_properties"
                type="text"
                class="input w-full border flex-1"
              />
            </div>
          </div>
          <div
            class="intro-y col-span-12 flex items-center justify-center sm:justify-start mt-8"
          >
            <button
              v-if="option != 1"
              class="button w-24 justify-center block bg-theme-3 text-white"
            >
              Guardar
            </button>
          </div>
        </div>
        <div
          class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-8"
        >
          <button
            v-if="option != 1"
            class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
            @click="previousOption()"
          >
            Anterior
          </button>
          <button
            v-if="option != 5"
            class="button w-24 justify-center block bg-theme-1 text-white ml-2"
            @click="nextOption()"
          >
            Siguiente
          </button>
        </div>
      </div>
      <!-- END: Option 2 -->
      <!-- BEGIN: Option 3 -->
      <div
        v-if="option == 3"
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
      >
        <!-- WITH INFORMATION -->
        <div v-if="layout_3">
          <div
            class="intro-y col-span-12 flex items-center justify-center sm:justify-start mb-4"
          >
            <a
              href="javascript:;"
              data-toggle="modal"
              data-target="#medium-modal-parking"
              class="button mr-1 w-24 mb-2 inline-block bg-theme-1 text-white"
              >Nuevo</a
            >
          </div>
          <!-- BEGIN: Modal -->
          <div id="medium-modal-parking" class="modal">
            <div class="modal__content text-center">
              <div
                class="flex items-center border-b border-gray-200 dark:border-dark-5 px-5 py-4 bg-theme-1 rounded-t text-white"
              >
                <div class="ml-3 mr-auto">
                  <span class="text-lg">
                    Formulario de registro de parqueadero
                  </span>
                </div>
              </div>
              <div class="p-5">
                <div class="intro-y col-span-12">
                  <div class="mb-1 flex justify-start">Nombre:</div>
                  <input
                    v-model="form.parking_name"
                    type="text"
                    class="input w-full border flex-1"
                    :class="{ 'border-red-500': $v.form.parking_name.$error }"
                  />
                  <template v-if="$v.form.parking_name.$error">
                    <div
                      v-if="!$v.form.parking_name.required"
                      class="font-medium text-xs text-red-500 mt-1 ml-1"
                    >
                      Digite el Nombre del Parqueadero
                    </div>
                    <div
                      v-if="!$v.form.parking_name.maxLength"
                      class="font-medium text-xs text-red-500 mt-1 ml-1"
                    >
                      Exede los 100 Caracteres
                    </div>
                  </template>
                </div>
                <div class="intro-y col-span-12 mt-2">
                  <div class="mb-1 flex justify-start">Puestos:</div>
                  <input
                    v-model="form.parking_positions"
                    type="number"
                    min="0"
                    class="input w-full border flex-1"
                    :class="{
                      'border-red-500': $v.form.parking_positions.$error
                    }"
                  />
                  <template v-if="$v.form.parking_positions.$error">
                    <div
                      v-if="!$v.form.parking_positions.required"
                      class="font-medium text-xs text-red-500 mt-1 ml-1"
                    >
                      Digite la Cantidad de Puestos
                    </div>
                  </template>
                </div>
                <div class="intro-y col-span-12 mt-2">
                  <div class="mb-1 flex justify-start">Piso:</div>
                  <select
                    v-model="form.parking_floors"
                    class="input w-full border flex-1"
                    :class="{ 'border-red-500': $v.form.parking_floors.$error }"
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
                  <template v-if="$v.form.parking_floors.$error">
                    <div
                      v-if="!$v.form.parking_floors.required"
                      class="font-medium text-xs text-red-500 mt-1 ml-1"
                    >
                      Seleccione el piso
                    </div>
                  </template>
                </div>
              </div>
              <div
                class="intro-y col-span-12 flex items-center justify-center p-5"
              >
                <button
                  v-if="status_save_parking"
                  class="button w-24 justify-center block bg-theme-3 text-white"
                  @click="sendDivisions(4, 5)"
                >
                  Guardar
                </button>
                <button
                  class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
                  @click="hideModalParking()"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
          <!-- END: Modal -->
          <div class="preview">
            <div class="overflow-x-auto">
              <table class="table">
                <thead>
                  <tr>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Nombre
                    </th>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Puestos
                    </th>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in allParkings" :key="item.id">
                    <td class="border-b whitespace-no-wrap">
                      {{ item.code }}
                    </td>
                    <td class="border-b whitespace-no-wrap">
                      {{ item.childrens.length }}
                    </td>
                    <td class="border-b whitespace-no-wrap">
                      <!-- <a
                        href="javascript:;"
                        data-toggle="modal"
                        data-target="#medium-modal-parking"
                        class="button mr-1 w-10 mb-2 inline-block bg-theme-1 text-white"
                        @click="dataModalParking(item)"
                        ><EyeIcon class="w-4 h-4" />
                      </a> -->
                      <router-link
                        class="button mr-1 w-10 mb-2 inline-block bg-theme-1 text-white"
                        :to="{ name: 'amenity-edit' }"
                      >
                        <EyeIcon class="w-4 h-4" />
                      </router-link>
                      <a
                        href="javascript:;"
                        data-toggle="modal"
                        data-target="#medium-modal-parking"
                        class="button mr-1 w-10 mb-2 inline-block bg-theme-12 text-white"
                        @click="dataModalParking(item)"
                        ><EditIcon class="w-4 h-4" />
                      </a>
                      <!-- <router-link
                        class="button flex min-w-10 w-10 bg-gray-500 text-white"
                        to="/amenity-edit"
                      >
                        <EyeIcon class="w-4 h-4" />
                      </router-link> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- WITHOUT INFORMATION -->
        <div v-else>
          <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">Nombre:</div>
              <input
                v-model="form.parking_name"
                type="text"
                class="input w-full border flex-1"
                :class="{ 'border-red-500': $v.form.parking_name.$error }"
              />
              <template v-if="$v.form.parking_name.$error">
                <div
                  v-if="!$v.form.parking_name.required"
                  class="font-medium text-xs text-red-500 mt-1 ml-1"
                >
                  Digite el Nombre del Parqueadero
                </div>
                <div
                  v-if="!$v.form.parking_name.maxLength"
                  class="font-medium text-xs text-red-500 mt-1 ml-1"
                >
                  Exede los 100 Caracteres
                </div>
              </template>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">Puestos:</div>
              <input
                v-model="form.parking_positions"
                type="text"
                class="input w-full border flex-1"
                :class="{ 'border-red-500': $v.form.parking_positions.$error }"
              />
              <template v-if="$v.form.parking_positions.$error">
                <div
                  v-if="!$v.form.parking_positions.required"
                  class="font-medium text-xs text-red-500 mt-1 ml-1"
                >
                  Digite la Cantidad de Puestos
                </div>
              </template>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">Pisos:</div>
              <div
                :class="{
                  'parking-select-invalid': $v.form.parking_floors.$error
                }"
              >
                <!-- <TailSelect
                  v-model="form.parking_floors"
                  :options="{
                    search: true,
                    classNames: 'w-full'
                  }"
                >
                  <option value="0">Seleccione una opción</option>
                  <option
                    v-for="(floor, index) in allFloors"
                    :key="index"
                    :value="floor.id"
                  >
                    {{ floor.code }}
                  </option>
                </TailSelect> -->
                <select
                  v-model="form.parking_floors"
                  class="input w-full border flex-1"
                  :class="{ 'border-red-500': $v.form.parking_floors.$error }"
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
              </div>
              <template v-if="$v.form.parking_floors.$error">
                <div
                  v-if="!$v.form.parking_floors.required"
                  class="font-medium text-xs text-red-500 mt-1 ml-1"
                >
                  Seleccione el piso
                </div>
              </template>
            </div>
          </div>
          <div
            class="intro-y col-span-12 flex items-center justify-center sm:justify-start mt-8"
          >
            <button
              class="button w-24 justify-center block bg-theme-3 text-white"
              @click="sendDivisions(4, 5)"
            >
              Guardar
            </button>
          </div>
        </div>
        <div
          class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-8"
        >
          <button
            v-if="option != 1"
            class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
            @click="previousOption()"
          >
            Anterior
          </button>
          <button
            v-if="option != 5"
            class="button w-24 justify-center block bg-theme-1 text-white ml-2"
            @click="nextOption()"
          >
            Siguiente
          </button>
        </div>
      </div>
      <!-- END: Option 3 -->
      <!-- BEGIN: Option 4 -->
      <div
        v-if="option == 4"
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
      >
        <!-- WITH INFORMATION -->
        <div v-if="layout_4">
          <div
            class="intro-y col-span-12 flex items-center justify-center sm:justify-start mb-4"
          >
            <a
              href="javascript:;"
              data-toggle="modal"
              data-target="#medium-modal-deposit"
              class="button mr-1 w-24 mb-2 inline-block bg-theme-1 text-white"
              >Nuevo</a
            >
          </div>
          <!-- BEGIN: Modal -->
          <div id="medium-modal-deposit" class="modal">
            <div class="modal__content text-center">
              <div
                class="flex items-center border-b border-gray-200 dark:border-dark-5 px-5 py-4 bg-theme-1 rounded-t text-white"
              >
                <div class="ml-3 mr-auto">
                  <span class="text-lg">
                    Formulario de registro de depositos
                  </span>
                </div>
              </div>
              <div class="p-5">
                <div class="intro-y col-span-12">
                  <div class="mb-1 flex justify-start">Nombre:</div>
                  <input
                    v-model="form.deposit_name"
                    type="text"
                    class="input w-full border flex-1"
                    :class="{ 'border-red-500': $v.form.deposit_name.$error }"
                  />
                  <template v-if="$v.form.deposit_name.$error">
                    <div
                      v-if="!$v.form.deposit_name.required"
                      class="font-medium text-xs text-red-500 mt-1 ml-1"
                    >
                      Digite el Nombre del Parqueadero
                    </div>
                    <div
                      v-if="!$v.form.deposit_name.maxLength"
                      class="font-medium text-xs text-red-500 mt-1 ml-1"
                    >
                      Exede los 100 Caracteres
                    </div>
                  </template>
                </div>
                <div class="intro-y col-span-12 mt-2">
                  <div class="mb-1 flex justify-start">Puestos:</div>
                  <input
                    v-model="form.deposit_positions"
                    type="number"
                    min="0"
                    class="input w-full border flex-1"
                    :class="{
                      'border-red-500': $v.form.deposit_positions.$error
                    }"
                  />
                  <template v-if="$v.form.deposit_positions.$error">
                    <div
                      v-if="!$v.form.deposit_positions.required"
                      class="font-medium text-xs text-red-500 mt-1 ml-1"
                    >
                      Digite la Cantidad de Puestos
                    </div>
                  </template>
                </div>
                <div class="intro-y col-span-12 mt-2">
                  <div class="mb-1 flex justify-start">Piso:</div>
                  <select
                    v-model="form.deposit_floors"
                    class="input w-full border flex-1"
                    :class="{ 'border-red-500': $v.form.deposit_floors.$error }"
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
                  <template v-if="$v.form.deposit_floors.$error">
                    <div
                      v-if="!$v.form.deposit_floors.required"
                      class="font-medium text-xs text-red-500 mt-1 ml-1"
                    >
                      Seleccione el piso
                    </div>
                  </template>
                </div>
              </div>
              <div
                class="intro-y col-span-12 flex items-center justify-center p-5"
              >
                <button
                  v-if="status_save_deposit"
                  class="button w-24 justify-center block bg-theme-3 text-white"
                  @click="sendDivisions(6, 7)"
                >
                  Guardar
                </button>
                <button
                  class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
                  @click="hideModalDeposit()"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
          <!-- END: Modal -->
          <div class="preview">
            <div class="overflow-x-auto">
              <table class="table">
                <thead>
                  <tr>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Nombre
                    </th>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Capacidad
                    </th>
                    <th
                      class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in allDeposits" :key="item.id">
                    <td class="border-b whitespace-no-wrap">
                      {{ item.code }}
                    </td>
                    <td class="border-b whitespace-no-wrap">
                      {{ item.childrens.length }}
                    </td>
                    <td class="border-b whitespace-no-wrap">
                      <a
                        href="javascript:;"
                        data-toggle="modal"
                        data-target="#medium-modal-deposit"
                        class="button mr-1 w-10 mb-2 inline-block bg-gray-500 text-white"
                        @click="dataModalDeposit(item)"
                        ><EyeIcon class="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- WITHOUT INFORMATION -->
        <div v-else>
          <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">Nombre:</div>
              <input
                v-model="form.deposit_name"
                type="text"
                class="input w-full border flex-1"
                :class="{ 'border-red-500': $v.form.deposit_name.$error }"
              />
              <template v-if="$v.form.deposit_name.$error">
                <div
                  v-if="!$v.form.deposit_name.required"
                  class="font-medium text-xs text-red-500 mt-1 ml-1"
                >
                  Digite el Nombre del Parqueadero
                </div>
                <div
                  v-if="!$v.form.deposit_name.maxLength"
                  class="font-medium text-xs text-red-500 mt-1 ml-1"
                >
                  Exede los 100 Caracteres
                </div>
              </template>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">Puestos:</div>
              <input
                v-model="form.deposit_positions"
                type="text"
                class="input w-full border flex-1"
                :class="{ 'border-red-500': $v.form.deposit_positions.$error }"
              />
              <template v-if="$v.form.deposit_positions.$error">
                <div
                  v-if="!$v.form.deposit_positions.required"
                  class="font-medium text-xs text-red-500 mt-1 ml-1"
                >
                  Digite la Cantidad de Puestos
                </div>
              </template>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">Pisos:</div>
              <div>
                <!-- <TailSelect
                  v-model="form.deposit_floors"
                  :options="{
                    search: true,
                    classNames: 'w-full'
                  }"
                >
                  <option value="null">Seleccione una opción</option>
                  <option
                    v-for="(floor, index) in allFloors"
                    :key="index"
                    :value="floor.id"
                  >
                    {{ floor.code }}
                  </option>
                </TailSelect> -->
                <select
                  v-model="form.deposit_floors"
                  class="input w-full border flex-1"
                  :class="{ 'border-red-500': $v.form.deposit_floors.$error }"
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
                <template v-if="$v.form.deposit_floors.$error">
                  <div
                    v-if="!$v.form.deposit_floors.required"
                    class="font-medium text-xs text-red-500 mt-1 ml-1"
                  >
                    Seleccione el piso
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div
            class="intro-y col-span-12 flex items-center justify-center sm:justify-start mt-8"
          >
            <button
              v-if="option != 1"
              class="button w-24 justify-center block bg-theme-3 text-white"
              @click="sendDivisions(6, 7)"
            >
              Guardar
            </button>
          </div>
        </div>
        <div
          class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-8"
        >
          <button
            v-if="option != 1"
            class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
            @click="previousOption()"
          >
            Anterior
          </button>
          <button
            v-if="option != 5"
            class="button w-24 justify-center block bg-theme-1 text-white ml-2"
            @click="nextOption()"
          >
            Siguiente
          </button>
        </div>
      </div>
      <!-- END: Option 4 -->
      <!-- BEGIN: Option 5 -->
      <div
        v-if="option == 5"
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
      >
        <!-- WITH INFORMATION -->
        <div v-if="layout_5" class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
          <div class="intro-y col-span-12 sm:col-span-4">
            <div class="mb-2">Capacidad 1 Habitación:</div>
            <input
              v-model="form.room1"
              type="text"
              disabled
              class="input w-full border flex-1"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <div class="mb-2">Capacidad 2 Habitación</div>
            <input
              v-model="form.room2"
              type="text"
              disabled
              class="input w-full border flex-1"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <div class="mb-2">Capacidad 3 Habitación:</div>
            <input
              v-model="form.room3"
              type="text"
              disabled
              class="input w-full border flex-1"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <div class="mb-2">Valor RGT:</div>
            <input
              v-model="form.value"
              type="text"
              disabled
              class="input w-full border flex-1"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <div class="mb-2">Reserva en Recepción:</div>
            <input
              v-model="form.book_at_reception"
              type="text"
              disabled
              class="input w-full border flex-1"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <div class="mb-2">Edad para Nino:</div>
            <input
              v-model="form.age_child"
              type="text"
              disabled
              class="input w-full border flex-1"
            />
          </div>
          <!-- <div class="intro-y col-span-12 sm:col-span-6">
            <div class="mb-2">Size</div>
            <select class="input w-full border flex-1">
              <option>10</option>
              <option>25</option>
              <option>35</option>
              <option>50</option>
            </select>
          </div> -->
        </div>
        <!-- WITHOUT INFORMATION -->
        <div v-else>
          <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">1 Capacidad por propiedad:</div>
              <div class="mb-2">
                <span class="font-extrabold">
                  Digite el mayor numero de habitaciones en una propiedad
                </span>
              </div>
              <input
                v-model="rules.rooms"
                type="number"
                class="input w-full border flex-1"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">2 Valor registro:</div>
              <div class="mb-2">
                <span class="font-extrabold">
                  Digite el valor del registro por persona
                </span>
              </div>
              <input
                v-model="rules.value"
                type="text"
                class="input w-full border flex-1"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">3 Reserva recepción:</div>
              <div class="mb-2">
                <span class="font-extrabold">
                  Se permite hacer reservas en recepción?
                </span>
              </div>
              <div>
                <TailSelect
                  v-model="rules.reservation"
                  :options="{
                    search: true,
                    classNames: 'w-full'
                  }"
                >
                  <option value="null">Seleccione una opción</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </TailSelect>
              </div>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-3">
              <div class="mb-2">4 Edad niño paga:</div>
              <div class="mb-2">
                <span class="font-extrabold">
                  Digite la edad a la que el niño paga registro
                </span>
              </div>
              <input
                v-model="rules.age_child"
                type="number"
                class="input w-full border flex-1"
              />
            </div>
          </div>
          <div
            class="intro-y col-span-12 flex items-center justify-center sm:justify-start mt-6"
          >
            <button
              v-if="option != 1"
              class="button w-auto justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
              @click="generateRooms"
            >
              Generar habitaciones
            </button>
          </div>
          <div v-if="generate_room > 0">
            <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
              <div
                v-for="n in generate_room"
                :key="n"
                class="intro-y col-span-12 sm:col-span-4 lg:col-span-2"
              >
                <div class="mb-2">Habitación {{ n }}</div>
                <input
                  v-model="roomDetail[n - 1]"
                  type="number"
                  class="input w-full border flex-1"
                />
              </div>
            </div>
          </div>
          <div
            class="intro-y col-span-12 flex items-center justify-center sm:justify-start mt-8"
          >
            <button
              v-if="option != 1"
              class="button w-24 justify-center block bg-theme-3 text-white"
            >
              Guardar
            </button>
          </div>
        </div>
        <div
          class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5"
        >
          <button
            v-if="option != 1"
            class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
            @click="previousOption()"
          >
            Anterior
          </button>
          <button
            v-if="option != 5"
            class="button w-24 justify-center block bg-theme-1 text-white ml-2"
            @click="nextOption()"
          >
            Siguiente
          </button>
        </div>
      </div>
      <!-- END: Option 5 -->
    </div>
    <!-- END: Wizard Layout -->
  </div>
</template>

<script>
import {
  required,
  maxLength
  /* sameAs */
} from "vuelidate/lib/validators"; /* importamos las propiedades de la validación */

export default {
  data() {
    return {
      building: null,
      generate_room: 0,
      option: 1,
      layout_2: false,
      layout_3: false,
      layout_4: false,
      layout_5: false,
      status_save_parking: true,
      status_save_deposit: true,
      information: {
        name: "",
        company_name: "",
        nit: "",
        phone: "",
        address: ""
      },
      form: {
        mni_radio: "",
        basement_radio: "",
        rooftop_radio: "",
        number_of_properties: "",
        parking_floors: "",
        parking_name: "",
        parking_positions: "",
        initial_floor: "",
        final_floor: "",
        floors: 4,
        basement: "Si",
        rooftop: "Si",
        start_property: "Piso 1",
        end_property: "Piso 2",
        deposit_name: "",
        deposit_positions: "",
        deposit_floors: "",
        room1: 4,
        room2: 6,
        room3: 8,
        value: 20000,
        book_at_reception: "No",
        age_child: 5
      },
      rules: {
        rooms: "",
        value: "",
        reservation: "",
        age_child: ""
      },
      newParking: {
        name: "",
        post: 0,
        floor: "null"
      },
      newDeposit: {
        name: "",
        post: 0,
        floor: "null"
      },
      roomDetail: [],
      initial_cont: 0,
      sending: false
    };
  },
  computed: {
    allFloors() {
      return this.$store.getters.allFloors;
    },
    allParkings() {
      return this.$store.getters.allParkings;
    },
    allDeposits() {
      return this.$store.getters.allDeposits;
    }
  },
  watch: {
    allParkings() {
      if (this.allParkings.length) {
        this.layout_3 = true;
      } else {
        this.layout_3 = false;
      }
    },
    allDeposits() {
      if (this.allDeposits.length) {
        this.layout_4 = true;
      } else {
        this.layout_4 = false;
      }
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
        this.information.name = res.data.content.name;
        this.information.company_name = res.data.content.company_name;
        this.information.nit = res.data.content.nit;
        this.information.phone = res.data.content.phone;
        this.information.address = res.data.content.address;
      })
      .catch(err => {
        console.error(err);
      });
    this.$store.dispatch("getFloors", 3);
  },
  validations() {
    if (this.option == 1) {
      let information = {
        information: {
          name: {
            required,
            maxLength: maxLength(100)
          },
          company_name: {
            required,
            maxLength: maxLength(100)
          },
          nit: {
            required,
            maxLength: maxLength(100)
          },
          phone: {
            required,
            maxLength: maxLength(20)
          },
          address: {
            required,
            maxLength: maxLength(100)
          }
        }
      };
      return information;
    } else if (this.option == 3) {
      let parking = {
        form: {
          parking_name: {
            required,
            maxLength: maxLength(100)
          },
          parking_floors: {
            required
          },
          parking_positions: {
            required
          }
        }
      };
      return parking;
    } else if (this.option == 4) {
      let deposit = {
        form: {
          deposit_name: {
            required,
            maxLength: maxLength(100)
          },
          deposit_floors: {
            required
          },
          deposit_positions: {
            required
          }
        }
      };
      return deposit;
    } else {
      let information = {
        information: {}
      };
      return information;
    }
  },
  methods: {
    getChildsBuilding(option) {
      if (option == 3) {
        const params = {
          type: 4,
          buildings_id: this.building.id
        };
        this.$store.dispatch("getParkings", params);
      } else if (option == 4) {
        const params = {
          type: 6,
          buildings_id: this.building.id
        };
        this.$store.dispatch("getDeposits", params);
      }
    },
    changeOption(option) {
      this.option = option;
      this.getChildsBuilding(option);
    },
    nextOption() {
      if (this.option < 5) {
        this.option = this.option + 1;
        //console.log(this.option);
        this.getChildsBuilding(this.option);
      }
    },
    previousOption() {
      if (this.option > 1) {
        this.option = this.option - 1;
        //console.log(this.option);
        this.getChildsBuilding(this.option);
      }
    },
    hideModalParking() {
      cash("#medium-modal-parking").modal("hide");
      this.$v.$reset();
      this.form.parking_floors = "";
      this.form.parking_name = "";
      this.form.parking_positions = "";
      this.status_save_parking = true;
    },
    hideModalDeposit() {
      cash("#medium-modal-deposit").modal("hide");
      this.$v.$reset();
      this.form.deposit_floors = "";
      this.form.deposit_name = "";
      this.form.deposit_positions = "";
      this.status_save_deposit = true;
    },
    generateRooms() {
      let me = this;
      me.roomDetail = [];
      me.generate_room = parseInt(me.rules.rooms);
      for (let index = 0; index < me.generate_room; index++) {
        me.roomDetail.push(0);
      }
      /* me.generate_room.forEach(ro => {
        me.roomDetail.push(ro);
      }); */
    },
    change_mni() {
      this.initial_cont = parseInt(this.form.initial_floor) - 1;
    },
    sendInformation() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.sending = true;
        this.axios({
          method: "put",
          url: `buildings/${this.building.id}`,
          data: this.information
        })
          .then(res => {
            console.log(res);
            setTimeout(() => {
              this.$swal({
                icon: "success",
                title: res.data.message,
                showConfirmButton: true,
                timer: 2000
              });
              this.sending = false;
              //this.$swal("Hello Vue world!!!");
            }, 1000);
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    sendDivisions(types_id, childs_types_id) {
      if (this.form.parking_floors == "0") {
        this.form.parking_floors = "";
      }
      if (this.form.deposit_floors == "0") {
        this.form.deposit_floors = "";
      }
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        let infoParking;
        if (types_id == 4) {
          infoParking = {
            code: this.form.parking_name,
            parent_id: this.form.parking_floors,
            division_types_id: types_id,
            buildings_id: this.building.id,
            division_childs_types_id: childs_types_id,
            childs: this.form.parking_positions
          };
        } else if (types_id == 6) {
          infoParking = {
            code: this.form.deposit_name,
            parent_id: this.form.deposit_floors,
            division_types_id: types_id,
            buildings_id: this.building.id,
            division_childs_types_id: childs_types_id,
            childs: this.form.deposit_positions
          };
        }
        this.axios
          .post("divisions", infoParking)
          .then(res => {
            console.log(res);
            setTimeout(() => {
              this.$swal({
                icon: "success",
                title: res.data.message,
                showConfirmButton: true,
                timer: 2000
              });
              this.getChildsBuilding(this.option);
              if (types_id == 4) {
                this.hideModalParking();
              } else if (types_id == 6) {
                this.hideModalDeposit();
              }
              //this.$swal("Hello Vue world!!!");
            }, 1000);
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    dataModalParking(item) {
      //console.log(item);
      this.form.parking_floors = item.parent_id;
      this.form.parking_name = item.code;
      this.form.parking_positions = item.childrens.length;
      this.status_save_parking = false;
    },
    dataModalDeposit(item) {
      //console.log(item);
      this.form.deposit_floors = item.parent_id;
      this.form.deposit_name = item.code;
      this.form.deposit_positions = item.childrens.length;
      this.status_save_deposit = false;
    }
  }
};
</script>

<style lang="scss">
.building-configuration {
  .custom-wizard {
    .option-one.is-active {
      button {
        color: white;
        background-color: #1e41aa;
      }
      .title-active {
        font-weight: 700;
      }
    }
    .option-two.is-active {
      button {
        color: white;
        background-color: #1e41aa;
      }
      .title-active {
        font-weight: 700;
      }
    }
    .option-three.is-active {
      button {
        color: white;
        background-color: #1e41aa;
      }
      .title-active {
        font-weight: 700;
      }
    }
    .option-four.is-active {
      button {
        color: white;
        background-color: #1e41aa;
      }
      .title-active {
        font-weight: 700;
      }
    }
    .option-five.is-active {
      button {
        color: white;
        background-color: #1e41aa;
      }
      .title-active {
        font-weight: 700;
      }
    }
    .parking-select-invalid {
      .tail-select {
        .select-label {
          border: 1px solid red;
        }
      }
    }
  }
}
</style>
