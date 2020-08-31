<template>
  <div class="movies">
    <div class="movie">
      <a href="#" class="movie__action">
        <div style="background-image:url('movies/1.jpg')" class="movie-image"></div>
        <div class="movie-description">
          <div class="movie-description__info">
            <a href="#">
              <span>
                <img src="icons/info.svg" alt="Info" />
              </span>
              <h6>
                Детальніше
                <br />про фільм
              </h6>
            </a>
          </div>
          <div class="movie-description__trailer">
            <a href="#">
              <span>
                <img src="icons/play.svg" alt="Info" />
              </span>
              <h6>
                Дивитись
                <br />Трейлер
              </h6>
            </a>
          </div>
        </div>
      </a>
      <div class="movie__content">
        <h2>В очікуванні варварів</h2>
        <div class="movie-genre">
          <ul>
            <li>2D</li>
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
                <li class="schedule-proposals__item">
                  <a class="schedule-proposals__link" href="#">
                    <h4 class="schedule-proposals__time">11:50</h4>
                    <!-- <h5 class="schedule-proposals__type">2D</h5> -->
                    <div class="schedule-dates">
                      <div class="schedule-proposals__action schedule-proposals__action--default">
                        <img src="icons/good.svg" alt />
                        <h4>
                          80
                          <small>грн</small>
                        </h4>
                      </div>
                      <div class="schedule-proposals__action schedule-proposals__action--luxt">
                        <img src="icons/lux.svg" alt />
                        <h4>
                          110
                          <small>грн</small>
                        </h4>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="schedule-proposals__item">
                  <a class="schedule-proposals__link" href="#">
                    <h4 class="schedule-proposals__time">11:50</h4>
                    <!-- <h5 class="schedule-proposals__type">2D</h5> -->
                    <div class="schedule-dates">
                      <div class="schedule-proposals__action schedule-proposals__action--default">
                        <img src="icons/good.svg" alt />
                        <h4>
                          80
                          <small>грн</small>
                        </h4>
                      </div>
                      <div class="schedule-proposals__action schedule-proposals__action--luxt">
                        <img src="icons/lux.svg" alt />
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
                      <path class="b" d="M0,0H24V24H0Z" />
                      <path class="c" d="M21,11H6.83l3.58-3.59L9,6,3,12l6,6,1.41-1.41L6.83,13H21Z" />
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
                    <path class="a" d="M24,0H0V24H24Z" />
                    <path class="b" d="M3,11H17.17L13.59,7.41,15,6l6,6-6,6-1.41-1.41L17.17,13H3Z" />
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
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
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
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
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
