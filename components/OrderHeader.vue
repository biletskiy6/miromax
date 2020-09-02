<template>
  <div class="order-header">
    <ul class="breadcrumbs">
      <li v-for="(br, index) in breadcrumbs" :class="{ current: br.active }">
        <span>{{ br.title }}</span>
        <i v-if="index < 2" class="material-icons">chevron_right</i>
      </li>

    </ul>

    <button class="pick-movie-close static">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path class="a"
              d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"/>
        <path class="b" d="M0,0H24V24H0Z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "OrderHeader",
  computed: {
    breadcrumbs() {
      return this.$store.getters['breadcrumbs'];
    }
  }
}
</script>

