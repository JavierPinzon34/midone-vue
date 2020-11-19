<template>
  <!-- BEGIN: Top Bar -->
  <div class="bottom-bar">
    <!-- BEGIN: Breadcrumb -->
    <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
      <!-- <a href class>Application</a>
      <ChevronRightIcon class="breadcrumb__icon" />
      <a href class="breadcrumb--active">Dashboard</a> -->
      <span class="text-3xl text-yellow-600">
        Copyright
      </span>
    </div>
  </div>
  <!-- END: Top Bar -->
</template>
<script>
export default {
  data() {
    return {
      searchDropdown: false
    };
  },
  methods: {
    showSearchDropdown() {
      this.searchDropdown = true;
    },
    hideSearchDropdown() {
      this.searchDropdown = false;
    }
  }
};
</script>
