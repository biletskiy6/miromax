<template>
  <header class="app-header">
    <div class="app-header__left">
      <button class="menu-toggle app-header-button">
        <i class="material-icons">menu</i>
      </button>

      <a href="#" class="logo">
        <img src="logo.svg" alt="Miromax Logo" />
      </a>
      <dropdown-menu
        v-model="show"
        :right="right"
        :hover="hover"
        :interactive="interactive"
        transition="translate-fade-down"
      >
        <div class="btn btn-primary dropdown-toggle">
          <h4 class="dropdown__header">Київ, ТРЦ Аладдин</h4>
          <button class="app-header-button">
            <img src="icons/expand_more.svg" alt />
          </button>
        </div>
        <div slot="dropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </dropdown-menu>
    </div>
    <div class="app-header__right">
      <ul class="header-meta">
        <li class="header-meta__item filters">
          <button class="app-header-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path class="a" d="M0,0H24V24H0Z" />
              <path
                class="b"
                d="M3,17v2H9V17ZM3,5V7H13V5ZM13,21V19h8V17H13V15H11v6ZM7,9v2H3v2H7v2H9V9Zm14,4V11H11v2ZM15,9h2V7h4V5H17V3H15Z"
              />
            </svg>
          </button>
          <h6>Підібрати фільм</h6>
        </li>
        <li class="header-meta__item type-schedule">
          <h6>Сьогодні, 17 Серпня</h6>
          <button class="app-header-button">
            <i class="material-icons">date_range</i>
          </button>
        </li>
        <li class="header-meta__item movie-session">
          <h6>Розклад: 99 Сеансів</h6>
          <button class="app-header-button">
            <i class="material-icons">drag_indicator</i>
          </button>
        </li>

        <li class="header-meta__item user-profile">
          <h6>Увійти</h6>
          <button class="app-header-button">
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
        </li>
      </ul>
    </div>
  </header>
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