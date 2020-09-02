<template>
  <div @click="handleSessionSchedule" data-close :class="{ active: showSessionSchedule  }" class="session-schedule">
    <div @click.stop class="session-schedule-content">
      <div @click="handleCloseSessionSchedule" class="session-schedule-close">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path class="a" d="M0,0H24V24H0Z"/>
            <path class="b" d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"/>
          </svg>
        </button>
      </div>
      <div class="session-schedule__top">
        <h4 class="session-schedule__header">Розклад сеансів Київ, ТРЦ Аладдин: <span>33 Сеанси</span></h4>
        <div class="session-schedule-formats">
          <h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path class="a" d="M0,0H24V24H0Z"/>
              <path class="b"
                    d="M658.52,451.97c-.33-.35-3.69-3.67-4.67-4.66s-1.58-.43-1.73-.34l-2.43,1.4a1.014,1.014,0,0,0-.38,1.37,1,1,0,0,0,.89.5c.39.07,2.05-1.03,2.22-1.13s.2-.16.47.06,1.89,1.89,1.89,1.89a.405.405,0,0,1-.02.56.421.421,0,0,1-.26.1H641.16a.427.427,0,0,1-.27-.1.4.4,0,0,1-.01-.56s1.62-1.67,1.89-1.89.3-.16.47-.06,1.82,1.2,2.22,1.13a1,1,0,0,0,.51-1.87l-2.43-1.4c-.16-.09-.75-.64-1.73.34s-4.35,4.31-4.67,4.66a.9.9,0,0,0-.31.75l1,7.01a1,1,0,0,0,.94,1l5.97.01a.531.531,0,0,0,.25-.12c.62-.64,2.22-2.24,2.84-2.85l2.84,2.84a.37.37,0,0,0,.24.12h5.98a1.006,1.006,0,0,0,.94-1l1-7.01A.968.968,0,0,0,658.52,451.97Zm-2.63,6.45a.394.394,0,0,1-.38.31h-4.18a.369.369,0,0,1-.27-.11l-2.64-2.64a.834.834,0,0,0-.59-.25.8.8,0,0,0-.59.25l-2.64,2.64a.4.4,0,0,1-.27.11h-4.18a.378.378,0,0,1-.38-.31l-.85-4.23a.381.381,0,0,1,.31-.45c.01-.02,4.31-.02,8.6-.02s8.59,0,8.6.02a.4.4,0,0,1,.31.45Z"
                    transform="translate(-635.828 -441.735)"/>
            </svg>
            <span>Формат:</span>

          </h4>
          <ul>
            <li class="accent">Всі</li>
            <li>2D</li>
            <li>3D</li>
            <li>LUX</li>
          </ul>
        </div>
      </div>

      <ul class="session-schedule-list">
        <li class="session-schedule-list__item active">
          <h4>21 Серпня</h4>
          <p>Сьогодні</p>
        </li>
        <li class="session-schedule-list__item">
          <h4>21 Серпня</h4>
          <p>Сьогодні</p>
        </li>
        <li class="session-schedule-list__item">
          <h4>21 Серпня</h4>
          <p>Сьогодні</p>
        </li>
        <li class="session-schedule-list__item">
          <h4>21 Серпня</h4>
          <p>Сьогодні</p>
        </li>
        <li class="session-schedule-list__item">
          <h4>21 Серпня</h4>
          <p>Сьогодні</p>
        </li>
        <li class="session-schedule-list__item">
          <h4>21 Серпня</h4>
          <p>Сьогодні</p>
        </li>
        <li class="session-schedule-list__item">
          <h4>21 Серпня</h4>
          <p>Сьогодні</p>
        </li>
      </ul>

      <ul class="session-schedule-films">
        <li v-for="item in 20" class="session-schedule-film">
          <div class="session-schedule-default session-schedule-film__time">
            <h4>11:50</h4>
            <small>Зал 1</small>
          </div>
          <div class="session-schedule-film__title">
            <h4>Месники: Завершення</h4>
            <div class="movie-genre movie-session-schedule">
              <ul>
                <li>16+</li>
                <li class="genre">Бойовик, Пригоди, Фантастика</li>
              </ul>
            </div>
          </div>


          <div class="session-schedule-default session-schedule-film__price">
            <h4>
              <img src="icons/good.svg" alt="">
              <span>128 <small>грн</small></span>
            </h4>
            <p>Купити квиток</p>
          </div>
          <div class="session-schedule-default session-schedule-film__price">
            <h4>
              <img src="icons/lux.svg" alt="">
              <span>128 <small>грн</small></span>
            </h4>
            <p>Купити квиток</p>
          </div>

          <div class="session-schedule-default session-schedule-film__forward">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path class="a" d="M0,0H24V24H0Z"/>
                <path class="b" d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"/>
              </svg>
            </a>
          </div>

        </li>

      </ul>

    </div>
  </div>
</template>

<script>
export default {
  props: ['showSessionSchedule'],
  methods: {
    handleCloseSessionSchedule() {
      this.$emit('handleCloseSessionSchedule');
    },
    handleSessionSchedule() {
      this.$emit('handleCloseSessionSchedule');
    }
  },
  name: "SessionSchedule"
}
</script>


