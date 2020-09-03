<template>
  <header class="app-header">
      <div class="app-header__left">
        <button class="menu-toggle" @click="handleOpenMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path class="a" d="M0,0H40V40H0Z"/>
            <rect class="b" width="24" height="3" rx="1.5" transform="translate(8 18.5)"/>
            <rect class="b" width="24" height="3" rx="1.5" transform="translate(8 27)"/>
            <rect class="b" width="24" height="3" rx="1.5" transform="translate(8 10)"/>
          </svg>
        </button>
        <nuxt-link to="/" class="logo">
          <img src="/logo.svg" alt="Miromax Logo"/>
        </nuxt-link>
        <dropdown-menu
          v-model="showLocations"
          :right="right"
          :hover="hover"
          :interactive="interactive"
          transition="translate-fade-down"
        >
          <div class="btn btn-primary dropdown-toggle">
            <svg class="location" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path class="a" d="M0,0H24V24H0Z"/>
              <path
                class="b"
                d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2ZM7,9A5,5,0,0,1,17,9c0,2.88-2.88,7.19-5,9.88C9.92,16.21,7,11.85,7,9Z"
              />
              <circle class="b" cx="2.5" cy="2.5" r="2.5" transform="translate(9.5 6.5)"/>
            </svg>
            <h4 class="dropdown__header">Київ, ТРЦ Аладдин</h4>
            <button>
              <div class="expand-arrow">
                <svg id="baseline-expand_more-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24">
                  <path id="Контур_2002" data-name="Контур 2002" d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                        fill="#000067"/>
                  <path id="Контур_2003" data-name="Контур 2003" d="M0,0H24V24H0Z" fill="none"/>
                </svg>
              </div>
            </button>
          </div>
          <div slot="dropdown">
            <div class="dropdown-menu-list">
              <div class="dropdown-item">
                <a class="dropdown-link" href="#">Action</a>
              </div>
              <div class="dropdown-item">
                <a class="dropdown-link" href="#">Action</a>
              </div>
              <div class="dropdown-item">
                <a class="dropdown-link" href="#">Action</a>
              </div>

            </div>
          </div>
        </dropdown-menu>
      </div>
    <div class="app-header__right">
      <ul v-if="type !== 'account'" class="header-meta">
        <li class="header-meta__item filters" @click="handlePickMovie">
          <button class="app-header-button">
            <svg class="header-meta__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24">
              <path class="a" d="M0,0H24V24H0Z"/>
              <path
                class="b"
                d="M3,17v2H9V17ZM3,5V7H13V5ZM13,21V19h8V17H13V15H11v6ZM7,9v2H3v2H7v2H9V9Zm14,4V11H11v2ZM15,9h2V7h4V5H17V3H15Z"
              />
            </svg>
          </button>
          <h6>Підібрати фільм</h6>
        </li>
        <li class="header-meta__item type-schedule">
          <dropdown-menu
            v-model="movieDates"
            :right="right"
            :hover="hover"
            :interactive="interactive"
            transition="translate-fade-down"
          >
            <div class="btn btn-primary dropdown-toggle">
              <button class="app-header-button">
                <svg class="header-meta__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24">
                  <path class="a" d="M0,0H24V24H0Z"/>
                  <path class="b"
                        d="M-4519-2387a2.006,2.006,0,0,1-2-2v-16a2.005,2.005,0,0,1,2-2h1v-2h2v2h4v-2h2v2h4v-2h2v2h1a2,2,0,0,1,2,2v16a2.005,2.005,0,0,1-2,2Zm0-2h16v-16h-1v1.983h-2V-2405h-4v2h-2v-2h-4v1.983h-2V-2405h-1Z"
                        transform="translate(4523 2410)"/>
                  <path class="b"
                        d="M-4.741-5.405h.878q1.044,0,1.044-.989a.84.84,0,0,0-.249-.628.961.961,0,0,0-.7-.243,1.031,1.031,0,0,0-.643.208.629.629,0,0,0-.273.518H-6.547a1.8,1.8,0,0,1,.354-1.1,2.323,2.323,0,0,1,.98-.751,3.449,3.449,0,0,1,1.378-.27,3.372,3.372,0,0,1,2.11.593,1.947,1.947,0,0,1,.768,1.63,1.607,1.607,0,0,1-.318.949,2.25,2.25,0,0,1-.925.724,2.163,2.163,0,0,1,1.005.681A1.755,1.755,0,0,1-.83-2.947,1.985,1.985,0,0,1-1.658-1.28a3.52,3.52,0,0,1-2.176.625A3.67,3.67,0,0,1-5.3-.946a2.283,2.283,0,0,1-1.025-.807,2.048,2.048,0,0,1-.348-1.173H-4.8a.8.8,0,0,0,.3.62,1.074,1.074,0,0,0,.735.262,1.126,1.126,0,0,0,.784-.265.87.87,0,0,0,.293-.676A1.015,1.015,0,0,0-3-3.818a1.3,1.3,0,0,0-.84-.246h-.906ZM3.326-.761H1.459V-6.394l-1.834.518V-7.361l3.53-1.181h.171Z"
                        transform="translate(13.674 18.654)"/>
                </svg>
              </button>
              <h4 class="dropdown__header">Сьогодні, 17 серпня</h4>
              <button>
                <div class="expand-arrow">
                  <svg id="baseline-expand_more-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                       viewBox="0 0 24 24">
                    <path id="Контур_2002" data-name="Контур 2002" d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                          fill="#000067"/>
                    <path id="Контур_2003" data-name="Контур 2003" d="M0,0H24V24H0Z" fill="none"/>
                  </svg>
                </div>
              </button>
            </div>
            <div slot="dropdown">
              <div class="dropdown-menu-list">
                <div class="dropdown-item">
                  <a class="dropdown-link" href="#">Action</a>
                </div>
                <div class="dropdown-item">
                  <a class="dropdown-link" href="#">Action</a>
                </div>
                <div class="dropdown-item">
                  <a class="dropdown-link" href="#">Action</a>
                </div>

              </div>
            </div>
          </dropdown-menu>
          <!--          <button class="app-header-button">-->
          <!--            <svg class="header-meta__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
          <!--              <path class="a" d="M0,0H24V24H0Z"/>-->
          <!--              <path class="b"-->
          <!--                    d="M-4519-2387a2.006,2.006,0,0,1-2-2v-16a2.005,2.005,0,0,1,2-2h1v-2h2v2h4v-2h2v2h4v-2h2v2h1a2,2,0,0,1,2,2v16a2.005,2.005,0,0,1-2,2Zm0-2h16v-16h-1v1.983h-2V-2405h-4v2h-2v-2h-4v1.983h-2V-2405h-1Z"-->
          <!--                    transform="translate(4523 2410)"/>-->
          <!--              <path class="b"-->
          <!--                    d="M-4.741-5.405h.878q1.044,0,1.044-.989a.84.84,0,0,0-.249-.628.961.961,0,0,0-.7-.243,1.031,1.031,0,0,0-.643.208.629.629,0,0,0-.273.518H-6.547a1.8,1.8,0,0,1,.354-1.1,2.323,2.323,0,0,1,.98-.751,3.449,3.449,0,0,1,1.378-.27,3.372,3.372,0,0,1,2.11.593,1.947,1.947,0,0,1,.768,1.63,1.607,1.607,0,0,1-.318.949,2.25,2.25,0,0,1-.925.724,2.163,2.163,0,0,1,1.005.681A1.755,1.755,0,0,1-.83-2.947,1.985,1.985,0,0,1-1.658-1.28a3.52,3.52,0,0,1-2.176.625A3.67,3.67,0,0,1-5.3-.946a2.283,2.283,0,0,1-1.025-.807,2.048,2.048,0,0,1-.348-1.173H-4.8a.8.8,0,0,0,.3.62,1.074,1.074,0,0,0,.735.262,1.126,1.126,0,0,0,.784-.265.87.87,0,0,0,.293-.676A1.015,1.015,0,0,0-3-3.818a1.3,1.3,0,0,0-.84-.246h-.906ZM3.326-.761H1.459V-6.394l-1.834.518V-7.361l3.53-1.181h.171Z"-->
          <!--                    transform="translate(13.674 18.654)"/>-->
          <!--            </svg>-->
          <!--          </button>-->
          <!--          <h6>Сьогодні, 17 Серпня</h6>-->
          <!--          <div class="expand-arrow">-->
          <!--            <svg id="baseline-expand_more-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
          <!--              <path id="Контур_2002" data-name="Контур 2002" d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" fill="#000067"/>-->
          <!--              <path id="Контур_2003" data-name="Контур 2003" d="M0,0H24V24H0Z" fill="none"/>-->
          <!--            </svg>-->
          <!--          </div>-->
        </li>
        <li class="header-meta__item movie-session" @click="handleSessionSchedule">
          <button class="app-header-button">
            <svg class="header-meta__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24">
              <path class="a" d="M0,0H24V24H0Z"/>
              <path class="b" d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"/>
            </svg>
          </button>
          <h6>Розклад: 99 Сеансів</h6>
        </li>

        <li class="header-meta__item user-profile">
          <h6>Увійти</h6>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <g transform="translate(35.139 -3.276)">
                <path class="a" d="M0,0H40V40H0Z" transform="translate(-35.139 3.276)"/>
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

      <ul v-else class="header-meta">
        <li class="header-meta__item movie-session">
          <button  class="movie-session app-header-button">
            <svg class="header-meta__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24">
              <path class="a" d="M0,0H24V24H0Z"/>
              <path class="b" d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"/>
            </svg>
          </button>
          <h6>Повернутись назад</h6>
        </li>
      </ul>


    </div>
  </header>
</template>

<script>
import DropdownMenu from "@/components/DropdownMenu";

export default {
  props: ['type'],
  data: () => ({
    showLocations: false,
    movieDates: false,
    right: false,
    hover: false,
    interactive: false,
  }),
  methods: {
    handleSessionSchedule() {
      this.$emit('handleOpenSessionSchedule');
    },
    handlePickMovie() {
      this.$emit('handleOpenPickMovie');
    },
    handleOpenMenu() {
      this.$emit('handleOpenMenu');
    }
  },
  components: {
    DropdownMenu,
  },
};
</script>

<style>
</style>
