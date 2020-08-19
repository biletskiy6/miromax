<template>
  <div class="top-line">
    <div class="top-line__left">
      <h6 class="top-line__current">Зараз у прокаті</h6>

      <button class="filter">
        <div class="filter__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path class="a" d="M0,0H24V24H0Z" />
            <path
              class="b"
              d="M3,17v2H9V17ZM3,5V7H13V5ZM13,21V19h8V17H13V15H11v6ZM7,9v2H3v2H7v2H9V9Zm14,4V11H11v2ZM15,9h2V7h4V5H17V3H15Z"
            />
          </svg>
        </div>
        <div class="filter__header">Підібрати фільм</div>
      </button>
    </div>

    <div class="top-line__right">
      <div class="schedule">
        <dropdown-menu
          v-model="showSchedule"
          :right="right"
          :hover="hover"
          :interactive="interactive"
          transition="translate-fade-down"
        >
          <div class="dropdown-toggle">
            <div class="dropdown-toggle__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path class="a" d="M0,0H24V24H0Z" />
                <path
                  class="b"
                  d="M20,3H19V1H17V3H7V1H5V3H4A2.006,2.006,0,0,0,2,5V21a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,20,3Zm0,18H4V10H20ZM20,8H4V5H20Z"
                />
              </svg>
            </div>
            <h4 class="dropdown__header inverse">СЬОГОДНІ, 17 СЕРПНЯ</h4>
          </div>
          <div slot="dropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </dropdown-menu>
      </div>
      <div class="movie-list">
        <div class="movie-list__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path class="a" d="M0,0H24V24H0Z" />
            <path class="b" d="M21,11H6.83l3.58-3.59L9,6,3,12l6,6,1.41-1.41L6.83,13H21Z" />
          </svg>
        </div>
        <div class="movie-list__header">
          <h4>РОЗКЛАД СЕАНСІВ</h4>
          <small>33Сеанси</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownMenu from "@/components/DropdownMenu";
export default {
  data: () => ({
    showSchedule: false,
    showMovieList: false,
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