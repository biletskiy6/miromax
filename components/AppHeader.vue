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
        <li class="header-meta__item filters">
          <h6>Фільтри</h6>
          <button class="app-header-button">
            <i class="material-icons">filter_list</i>
          </button>
        </li>
        <li class="header-meta__item user-profile">
          <h6>Увійти</h6>
          <button class="app-header-button">
            <i class="material-icons">person</i>
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