<template>
  <div @click="handleClosePickMovie" :class="{ 'active': pickMovie  }" class="pick-movie">
    <div @click.stop="" class="pick-movie-content">
      <button class="pick-movie-close" @click="handleClosePickMovie">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path class="a"
                d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"/>
          <path class="b" d="M0,0H24V24H0Z"/>
        </svg>
      </button>
      <h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path class="a" d="M0,0H24V24H0Z"/>
          <path
            class="b"
            d="M3,17v2H9V17ZM3,5V7H13V5ZM13,21V19h8V17H13V15H11v6ZM7,9v2H3v2H7v2H9V9Zm14,4V11H11v2ZM15,9h2V7h4V5H17V3H15Z"
          />
        </svg>
        <span>Підібрати фільм</span>
      </h4>


      <div class="pick-movie-filters">
        <div class="pick-movie-wrapper">
          <div class="pick-movie-genre">
            <h6 class="pick-movie-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path class="a" d="M0,0H24V24H0Z"/>
                <path
                  d="M5.76,10H20v8H4V6.47M22,4H18l2,4H17L15,4H13l2,4H12L10,4H8l2,4H7L5,4H4A2.006,2.006,0,0,0,2,6V18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V4Z"/>
              </svg>
              <p>Жанр</p>
              <span>(Кількість фільмів)</span>
            </h6>

            <ul class="movie-filters">
              <li v-for="item in 15" class="movie-filter">
                <p>Кримінал (2)</p>
              </li>
            </ul>

          </div>
          <div class="pick-movie-rest">
            <div class="pick-formats">
              <h6 class="pick-movie-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path class="a" d="M0,0H24V24H0Z"/>
                  <path class="b"
                        d="M658.52,451.97c-.33-.35-3.69-3.67-4.67-4.66s-1.58-.43-1.73-.34l-2.43,1.4a1.014,1.014,0,0,0-.38,1.37,1,1,0,0,0,.89.5c.39.07,2.05-1.03,2.22-1.13s.2-.16.47.06,1.89,1.89,1.89,1.89a.405.405,0,0,1-.02.56.421.421,0,0,1-.26.1H641.16a.427.427,0,0,1-.27-.1.4.4,0,0,1-.01-.56s1.62-1.67,1.89-1.89.3-.16.47-.06,1.82,1.2,2.22,1.13a1,1,0,0,0,.51-1.87l-2.43-1.4c-.16-.09-.75-.64-1.73.34s-4.35,4.31-4.67,4.66a.9.9,0,0,0-.31.75l1,7.01a1,1,0,0,0,.94,1l5.97.01a.531.531,0,0,0,.25-.12c.62-.64,2.22-2.24,2.84-2.85l2.84,2.84a.37.37,0,0,0,.24.12h5.98a1.006,1.006,0,0,0,.94-1l1-7.01A.968.968,0,0,0,658.52,451.97Zm-2.63,6.45a.394.394,0,0,1-.38.31h-4.18a.369.369,0,0,1-.27-.11l-2.64-2.64a.834.834,0,0,0-.59-.25.8.8,0,0,0-.59.25l-2.64,2.64a.4.4,0,0,1-.27.11h-4.18a.378.378,0,0,1-.38-.31l-.85-4.23a.381.381,0,0,1,.31-.45c.01-.02,4.31-.02,8.6-.02s8.59,0,8.6.02a.4.4,0,0,1,.31.45Z"
                        transform="translate(-635.828 -441.735)"/>
                </svg>
                <p>Формат, LUX</p>
                <span>(Кількість фільмів)</span>
              </h6>
              <ul class="movie-filters">
                <li v-for="item in 6" class="movie-filter">
                  <p>Кримінал (2)</p>
                </li>
              </ul>
            </div>
            <div class="pick-events">
              <h6 class="pick-movie-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path class="a" d="M0,0H24V24H0Z"/>
                  <path
                    d="M23,12,20.56,9.22l.34-3.68-3.61-.82L15.4,1.54,12,3,8.6,1.54,6.71,4.72,3.1,5.53l.34,3.68L1,12l2.44,2.78L3.1,18.47l3.61.82L8.6,22.47,12,21l3.4,1.46,1.89-3.18,3.61-.82-.34-3.68Zm-4.51,2.11.26,2.79-2.74.62-1.43,2.41L12,18.82,9.42,19.93,7.99,17.52,5.25,16.9l.26-2.8L3.66,12,5.51,9.88,5.25,7.1l2.74-.61L9.42,4.08,12,5.18l2.58-1.11,1.43,2.41,2.74.62-.26,2.79L20.34,12Z"/>
                  <rect width="2" height="2" transform="translate(11 15)"/>
                  <rect width="2" height="6" transform="translate(11 7)"/>
                </svg>
                <p>Події</p>
                <span>(Кількість фільмів)</span>
              </h6>
              <ul class="movie-filters">
                <li class="movie-filter">
                  <p>Кримінал (2)</p>
                </li>
                <li class="movie-filter">
                  <p>Кримінал (2)</p>
                </li>
                <li class="movie-filter">
                  <p>Кримінал (2)</p>
                </li>
                <li class="movie-filter">
                  <p>Кримінал (2)</p>
                </li>

              </ul>
            </div>
          </div>

        </div>


        <div class="pick-movie-buttons">
          <button class="btn clear">Очистити фільтр</button>
          <button class="btn accept">Примінити фільтр</button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['pickMovie'],
  name: "PickMovie",
  methods: {
    handleClosePickMovie() {
      this.$emit('handleClosePickMovie');
    }
  }
}
</script>


