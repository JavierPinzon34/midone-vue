<template>
  <div class="item-property">
    <div
      v-if="items.type == 1 || items.type == 3"
      class="h-48 text-white bg-green-500 p-3 rounded relative"
    >
      <div class="mb-2">
        <span class="text-3xl font-bold">{{ items.text }}</span>
      </div>
      <button
        v-if="items.type == 1"
        class="button flex min-w-10 w-10 bg-transparent text-white"
        to="/amenity-edit"
      >
        <SettingsIcon class="w-4 h-4" />
      </button>
      <router-link
        v-if="items.type == 3"
        class="button flex min-w-10 w-10 bg-transparent text-white"
        to="/amenity-edit"
      >
        <SettingsIcon class="w-4 h-4" />
      </router-link>
      <div class="mt-2">
        <span>{{ items.propietary }}</span>
      </div>
      <div
        v-if="items.foot == 1"
        class="absolute bottom-0 left-0 w-full text-center bg-green-600 rounded"
      >
        <router-link to="/reservoir-generator">Generar RGT Huesped</router-link>
      </div>
    </div>
    <div v-if="items.type == 2" class="h-48 text-white bg-blue-500 rounded">
      <div class="p-3">
        <div>
          <span class="text-3xl font-bold">{{ items.text }}</span>
        </div>
        <div>
          <span>{{ items.capacity }} Personas</span>
        </div>
        <div>
          <span>Sin Asignar</span>
        </div>
        <div class="d-inline">
          <button
            class="button min-w-10 w-10 bg-transparent text-white"
            to="/amenity-edit"
          >
            <SettingsIcon class="w-4 h-4" />
          </button>
          <button
            class="button min-w-10 w-10 bg-transparent text-white"
            to="/amenity-edit"
          >
            <Trash2Icon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      default: () => {}
    },
    numero: {
      type: String,
      default: () => ""
    }
  }
};
</script>
