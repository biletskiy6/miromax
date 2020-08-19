<template>
  <div class="app-header">
    <div class="app-header__cities">
      <dropdown-menu
        v-model="show"
        :right="right"
        :hover="hover"
        :interactive="interactive"
        transition="translate-fade-down"
      >
        <div class="btn btn-primary dropdown-toggle">
          <div class="dropdown-toggle__icon location">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path class="a" d="M0,0H24V24H0Z" />
              <path
                class="b"
                d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2ZM7,9A5,5,0,0,1,17,9c0,2.88-2.88,7.19-5,9.88C9.92,16.21,7,11.85,7,9Z"
              />
              <circle class="b" cx="2.5" cy="2.5" r="2.5" transform="translate(9.5 6.5)" />
            </svg>
          </div>

          <h4 class="dropdown__header">Київ, ТРЦ Аладдин</h4>
          <div class="dropdown-toggle__icon expand">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" />
              <path class="a" d="M0,0H24V24H0Z" />
            </svg>
          </div>
        </div>
        <div slot="dropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </dropdown-menu>
    </div>

    <div class="app-header__logo">
      <a href="#" class="logo">
        <img src="logo.svg" alt="Miromax Logo" />
      </a>
    </div>

    <div class="app-header__user">
      <!-- <nuxt-link :t></nuxt-link> -->
      <button class="user-profile">
        <span>Увійти</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <g transform="translate(35.139 -3.276)">
            <path class="a" d="M0,0H40V40H0Z" transform="translate(-35.139 3.276)" />
            <g transform="translate(-26.567 10.276)">
              <path
                class="b"
                d="M-160.02,149.61a6.5,6.5,0,0,0-6.5,6.5,6.509,6.509,0,0,0,6.5,6.5,6.519,6.519,0,0,0,6.5-6.5A6.509,6.509,0,0,0-160.02,149.61Zm0,10.563a4.064,4.064,0,0,1-4.063-4.063,4.064,4.064,0,0,1,4.063-4.063,4.069,4.069,0,0,1,4.063,4.063A4.069,4.069,0,0,1-160.02,160.173Z"
                transform="translate(171.948 -148.61)"
              />
              <path
                class="c"
                d="M-150.983,178.61h0a1.162,1.162,0,0,1-1.112-.778,10.188,10.188,0,0,0-9.71-6.914,10.188,10.188,0,0,0-9.71,6.914,1.162,1.162,0,0,1-1.112.778h0a1.166,1.166,0,0,1-1.117-1.535A12.541,12.541,0,0,1-161.8,168.61a12.549,12.549,0,0,1,11.939,8.465A1.166,1.166,0,0,1-150.983,178.61Z"
                transform="translate(173.232 -153.61)"
              />
            </g>
          </g>
        </svg>
      </button>
      <button class="toggle-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <path class="a" d="M0,0H40V40H0Z" />
          <rect class="b" width="24" height="3" rx="1.5" transform="translate(8 27)" />
          <rect class="b" width="24" height="3" rx="1.5" transform="translate(8 10)" />
          <rect class="b" width="24" height="3" rx="1.5" transform="translate(8 18.5)" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import DropdownMenu from "@/components/DropdownMenu";
export default {
  data: () => ({
    show: false,
    right: false,
    hover: false,
    interactive: false,
  }),
  components: {
    DropdownMenu,
  },
};
</script>

<style>
</style>