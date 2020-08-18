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
          <h4>
            Сьогодні
            <div class="dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </h4>
        </div>

        <div class="next-session">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>