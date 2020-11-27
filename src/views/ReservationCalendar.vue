<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Calendario de Reservas
      </h2>
    </div>
    <!-- BEGIN: HTML buttons and select propieties -->
    <div class="intro-y flex flex-col sm:flex-row items-end mt-6">
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="button text-white bg-theme-1 shadow-md mr-2">
          Staff Edificio
        </button>
        <button class="button text-white bg-teal-600 shadow-md mr-2">
          Staff Propietarios
        </button>
      </div>
      <!-- BEGIN: Select time -->
      <div class="w-auto col-span-1 ml-20">
        <label class="font-medium text-lg">Filtrar por propiedad:</label>
        <div>
          <TailSelect
            v-model="propiety"
            :options="{
              search: true,
              classNames: 'w-full'
            }"
          >
            <option value="null">Todas</option>
            <option value="1">Apto 101</option>
            <option value="2">Apto 102</option>
            <option value="3">Apto 103</option>
            <option value="5">Apto 201</option>
            <option value="6">Apto 202</option>
            <option value="7">Apto 203</option>
            <option value="8">Apto 204</option>
          </TailSelect>
        </div>
      </div>
      <!-- END: Select time -->
    </div>
    <!-- END: HTML buttons and select propieties -->
    <div class="contenido-calendario mt-8">
      <v-calendar
        class="custom-calendar max-w-full"
        :masks="masks"
        locale="Es"
        :attributes="attributes"
        disable-page-swipe
        is-expanded
      >
        <!-- :from-page="{ month: 1, year: 2019 }" (PONER EL MES ESPECIFICO A LA VISTA) -->
        <template v-slot:day-content="{ day, attributes }">
          <div class="flex flex-col h-full z-10 overflow-hidden">
            <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
            <div class="flex-grow overflow-y-auto overflow-x-auto">
              <p
                v-for="(attr, index) in attributes"
                :key="index"
                class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                :class="attr.customData.class"
              >
                {{ attr.customData.title }}
              </p>
            </div>
          </div>
        </template>
      </v-calendar>
    </div>
  </div>
</template>
<script>
const month = new Date().getMonth();
const year = new Date().getFullYear();
export default {
  data() {
    return {
      propiety: "",
      masks: {
        weekdays: "WWW"
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: "Lunch with mom.",
            class: "bg-red-500 text-white"
          },
          dates: { start: new Date(2020, 10, 1), end: new Date(2020, 10, 3) }
        },
        {
          key: 2,
          customData: {
            title: "Take Noah to basketball practice",
            class: "bg-blue-500 text-white"
          },
          dates: new Date(year, month, 4)
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: "bg-green-500 text-white"
          },
          dates: new Date(year, month, 15)
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.contenido-calendario {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
  .custom-calendar.vc-container {
    --day-border: 1px solid #b8c2cc;
    --day-border-highlight: 1px solid #b8c2cc;
    --day-width: 150px;
    --day-height: 150px;
    --weekday-bg: #f8fafc;
    --weekday-border: 1px solid #eaeaea;
    border-radius: 0;
    width: 100%;
    & .vc-header {
      background-color: #f1f5f8;
      padding: 10px 0;
    }
    & .vc-weeks {
      padding: 0;
    }
    & .vc-weekday {
      background-color: var(--weekday-bg);
      border-bottom: var(--weekday-border);
      border-top: var(--weekday-border);
      padding: 5px 0;
    }
    & .vc-day {
      padding: 0 5px 3px 5px;
      text-align: left;
      height: var(--day-height);
      min-width: var(--day-width);
      background-color: white;
      &.weekday-1,
      &.weekday-7 {
        background-color: #eff8ff;
      }
      &:not(.on-bottom) {
        border-bottom: var(--day-border);
        &.weekday-1 {
          border-bottom: var(--day-border-highlight);
        }
      }
      &:not(.on-right) {
        border-right: var(--day-border);
      }
    }
    & .vc-day-dots {
      margin-bottom: 5px;
    }
  }
}
.contenido-form {
  button {
    border-radius: 5px;
  }
}
</style>
