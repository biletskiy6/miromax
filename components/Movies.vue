<template>
  <div class="movies">
    <transition name="fade">
      <section v-if="embedYoutube" class="embed-youtube">
        <div v-if="readyState" class="embed-top-panel">
          <h2>Трейлер: {{ trailerName }}</h2>

          <button @click="handleCloseEmbed" class="pick-movie-close static" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path class="a"
                    d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"/>
              <path class="b" d="M0,0H24V24H0Z"/>
            </svg>
          </button>
        </div>
        <youtube @ready="ready" :video-id="videoId" player-width="100%" player-height="100%" :player-vars="{autoplay: 0}"></youtube>
      </section>
    </transition>



    <div class="movies-wrapper">
      <div v-for="item in 8" class="movie">
        <nuxt-link to="movies/slug" href="#" class="movie__action">
          <div style="background-image:url('movies/1.jpg')" class="movie-image">
            <div class="movie-description">
              <div @click.stop="handleVideoTrailer" class="movie-description__item movie-description__trailer">
                <a href="#">
              <span>
                <img src="icons/play.svg" alt="Info"/>
              </span>
                  <h6>
                    Дивитись
                    <br/>Трейлер
                  </h6>
                </a>
              </div>
              <div class="movie-description__item movie-description__info">
                <a href="#">
              <span>
                <img src="icons/info.svg" alt="Info"/>
              </span>
                  <h6>
                    Детальніше
                    <br/>про фільм
                  </h6>
                </a>
              </div>
              <div class="movie-description__item movie-description__info">
                <a href="#">
              <span>
                <img src="icons/info.svg" alt="Info"/>
              </span>
                  <h6>
                    Додати до
                    <br/>фаворитів
                  </h6>
                </a>
              </div>

            </div>
          </div>

        </nuxt-link>
        <div class="movie__content">
          <h2>В очікуванні варварів</h2>
          <div class="movie-genre">
            <ul>
              <li>16+</li>
              <li class="genre">Драма</li>
            </ul>
          </div>
          <div class="movie__event">
            <h4>Сьогодні</h4>
          </div>

          <client-only>
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide>
                <ul class="schedule-proposals">
                  <li v-for="item in 3" class="schedule-proposals__item">
                    <nuxt-link to="/movies/movie-slug/seat-id" class="schedule-proposals__link" href="#">
                      <h4 class="schedule-proposals__time">11:50</h4>
                      <!-- <h5 class="schedule-proposals__type">2D</h5> -->
                      <div class="schedule-dates">
                        <div class="schedule-proposals__action schedule-proposals__action--default">
                          <img src="icons/good.svg" alt/>
                          <h4>
                            80
                            <small>грн</small>
                          </h4>
                        </div>
                        <div class="schedule-proposals__action schedule-proposals__action--luxt">
                          <img src="icons/lux.svg" alt/>
                          <h4>
                            110
                            <small>грн</small>
                          </h4>
                        </div>
                      </div>
                    </nuxt-link>
                  </li>
                  <li class="schedule-proposals__item col-4">
                    <a class="schedule-proposals__link" href="#">

                      <div class="schedule-proposals__3d">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                          <path class="a" d="M0,0H16V16H0Z"/>
                          <path class="b"
                                d="M651.284,450.215c-.22-.233-2.459-2.44-3.112-3.1s-1.053-.286-1.153-.226l-1.619.931a.663.663,0,0,0,.34,1.243c.26.047,1.366-.685,1.48-.751s.133-.106.313.04,1.26,1.257,1.26,1.257a.269.269,0,0,1-.013.372.281.281,0,0,1-.173.067h-8.89a.285.285,0,0,1-.18-.067.268.268,0,0,1-.007-.372s1.08-1.11,1.26-1.257.2-.106.313-.04,1.213.8,1.479.751a.666.666,0,0,0,.34-1.243l-1.619-.931c-.107-.06-.5-.425-1.153.226s-2.9,2.865-3.112,3.1a.6.6,0,0,0-.207.5l.666,4.661a.664.664,0,0,0,.626.665l3.979.007a.354.354,0,0,0,.167-.08c.413-.425,1.479-1.489,1.893-1.895l1.893,1.888a.247.247,0,0,0,.16.08H650.2a.669.669,0,0,0,.626-.665l.666-4.661A.643.643,0,0,0,651.284,450.215Zm-1.753,4.288a.263.263,0,0,1-.253.206h-2.786a.246.246,0,0,1-.18-.073l-1.759-1.755a.556.556,0,0,0-.393-.166.534.534,0,0,0-.393.166l-1.759,1.755a.27.27,0,0,1-.18.073h-2.786a.252.252,0,0,1-.253-.206l-.566-2.812a.253.253,0,0,1,.207-.3c.007-.013,2.872-.013,5.731-.013s5.725,0,5.731.013a.267.267,0,0,1,.207.3Z"
                                transform="translate(-636.158 -443.389)"/>
                        </svg>
                      </div>

                      <h4 class="schedule-proposals__time">11:50</h4>
                      <!-- <h5 class="schedule-proposals__type">2D</h5> -->
                      <div class="schedule-dates">
                        <div class="schedule-proposals__action schedule-proposals__action--default">
                          <img src="icons/good.svg" alt/>
                          <h4>
                            80
                            <small>грн</small>
                          </h4>
                        </div>
                        <div class="schedule-proposals__action schedule-proposals__action--luxt">
                          <img src="icons/lux.svg" alt/>
                          <h4>
                            110
                            <small>грн</small>
                          </h4>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide 4</swiper-slide>
              <swiper-slide>Slide 5</swiper-slide>
              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
              <div class="movies-pagination" slot="pagination">
                <h5 class="movies-pagination__title">Наступні сеанси</h5>

                <div class="movies-pagination__nav">
                  <div class="prev" slot="button-prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g class="a">
                        <path class="b" d="M0,0H24V24H0Z"/>
                        <path class="c" d="M21,11H6.83l3.58-3.59L9,6,3,12l6,6,1.41-1.41L6.83,13H21Z"/>
                      </g>
                    </svg>
                  </div>
                  <div class="next" slot="button-next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path class="a" d="M24,0H0V24H24Z"/>
                      <path class="b" d="M3,11H17.17L13.59,7.41,15,6l6,6-6,6-1.41-1.41L17.17,13H3Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </swiper>
          </client-only>

          <!-- <div class="next-session">
            <h6>Квиток на найближчій сеанс</h6>

            <a href="#">
              <h5 class="next-session__time">16:45</h5>
              <div class="next-session__price">За 80.-</div>
              <div class="next-session__price">LUX за 150.-</div>
            </a>
          </div>

          <div class="schedule">
            <h6>Розклад сеансів</h6>
            <ul class="schedule-list">
              <li class="schedule-list__item">
                <span>16:45</span>
                <div class="dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </li>
              <li class="schedule-list__item">
                <span>18:20</span>
                <div class="dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </li>
              <li class="schedule-list__item">
                <span>19:20</span>
                <div class="dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </li>
            </ul>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide, directive} from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },

        // Some Swiper option/callback...
      },
      videoId: '4kE13IQeHgA',
      trailerName: 'Назва фільму',
      readyState: false,
      embedYoutube: false,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    ready (event) {

      // this.embedYoutube = true;
      this.player = event.target
      this.readyState = true;
    },
    playing (event) {
      // The player is playing a video.
    },
    handleVideoTrailer() {
      this.embedYoutube = true;
    },
    handleCloseEmbed() {
      this.embedYoutube = false;
      this.readyState = false;
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style></style>
