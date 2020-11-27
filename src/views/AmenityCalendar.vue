<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-2xl font-medium mr-auto border-b-2">
        Calendario de Amenidades
      </h2>
    </div>
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
            title: "16:00:00 - Simulador de Golf",
            class: "bg-red-500 text-white"
          },
          dates: new Date(2020, 10, 1)
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
