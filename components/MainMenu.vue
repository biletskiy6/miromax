<template>
  <div class="main-menu">
    <div class="main-menu-content">
      <div class="main-menu__left">
        <div class="app-header__left">
          <button class="menu-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <path class="a" d="M0,0H40V40H0Z"/>
              <circle class="b" cx="20" cy="20" r="20"/>
              <circle class="c" cx="1" cy="1" r="1" transform="translate(19 19)"/>
              <rect class="d" width="24" height="3" rx="1.5" transform="translate(10 26.971) rotate(-45)"/>
              <rect class="d" width="3" height="3" rx="1.5" transform="translate(17.999 18)"/>
              <rect class="d" width="24" height="3" rx="1.5" transform="translate(12.121 10) rotate(45)"/>
            </svg>
          </button>

          <a href="#" class="logo">
            <img src="logo.svg" alt="Miromax Logo"/>
          </a>
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
        <div class="main-menu-middle">
          <div class="menu-socials">
            <h6>Ми в соціальних мережах</h6>
            <ul>
              <li>
                <a href="#">
                  <span class="s-icon">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g transform="translate(-1180 -471.874)">
                    <path
                      d="M13.331,3.321h1.826V.141A23.577,23.577,0,0,0,12.5,0C9.864,0,8.061,1.656,8.061,4.7V7.5H5.156v3.555H8.061V20h3.562V11.056H14.41L14.853,7.5H11.622V5.052c0-1.028.278-1.731,1.709-1.731Z"
                      transform="translate(1181.844 473.874)"/>
                    <path class="a" d="M0,0H24V24H0Z" transform="translate(1180 471.874)"/>
                  </g>
                </svg>
                </span>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="s-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g transform="translate(-1210 -469.874)">
                      <path
                        d="M10.2,20H10c-1.568,0-3.016-.036-4.425-.122a5.915,5.915,0,0,1-3.41-1.291A5.473,5.473,0,0,1,.325,15.62a13.155,13.155,0,0,1-.3-3.141C.013,11.748,0,10.883,0,10S.013,8.254.023,7.524a13.157,13.157,0,0,1,.3-3.141A5.473,5.473,0,0,1,2.164,1.414,5.915,5.915,0,0,1,5.573.123C6.982.038,8.431,0,10,0s3.016.036,4.425.122a5.915,5.915,0,0,1,3.41,1.291,5.472,5.472,0,0,1,1.839,2.969,13.156,13.156,0,0,1,.3,3.141c.01.73.021,1.6.023,2.475v0c0,.88-.013,1.745-.023,2.475a13.149,13.149,0,0,1-.3,3.141,5.472,5.472,0,0,1-1.839,2.969,5.915,5.915,0,0,1-3.41,1.291c-1.349.082-2.735.122-4.23.122ZM10,18.438c1.542,0,2.958-.035,4.334-.119a4.3,4.3,0,0,0,2.517-.942,3.945,3.945,0,0,0,1.312-2.144,11.968,11.968,0,0,0,.253-2.776c.01-.725.02-1.584.022-2.456s-.013-1.73-.022-2.456a11.97,11.97,0,0,0-.253-2.777,3.945,3.945,0,0,0-1.312-2.144,4.305,4.305,0,0,0-2.517-.942C12.957,1.6,11.54,1.561,10,1.564s-2.958.035-4.334.119a4.305,4.305,0,0,0-2.517.942A3.945,3.945,0,0,0,1.839,4.769a11.97,11.97,0,0,0-.253,2.777c-.01.726-.02,1.585-.022,2.457s.013,1.728.022,2.454a11.969,11.969,0,0,0,.253,2.776,3.945,3.945,0,0,0,1.312,2.144,4.305,4.305,0,0,0,2.517.942C7.044,18.4,8.46,18.442,10,18.438Zm-.037-3.554A4.883,4.883,0,1,1,14.844,10,4.888,4.888,0,0,1,9.961,14.884Zm0-8.2A3.32,3.32,0,1,0,13.281,10,3.324,3.324,0,0,0,9.961,6.681Zm5.43-3.125a1.172,1.172,0,1,0,1.172,1.172A1.172,1.172,0,0,0,15.391,3.556Zm0,0"
                        transform="translate(1212 471.873)"/>
                      <path class="a" d="M0,0H24V24H0Z" transform="translate(1210 469.874)"/>
                    </g>
                  </svg>
                </span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#">
                   <span class="s-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g transform="translate(-1238 -469.874)">
                      <path
                        d="M10,15.5H9.992a51.1,51.1,0,0,1-7.45-.479A3.152,3.152,0,0,1,.367,12.765,24.417,24.417,0,0,1,0,8.02,24.877,24.877,0,0,1,.366,3.239v0A3.219,3.219,0,0,1,2.539.964l.008,0A52.986,52.986,0,0,1,9.992.5H10c.605,0,5.954.055,7.452.48a3.151,3.151,0,0,1,2.172,2.252A23.688,23.688,0,0,1,20,8.038a24.484,24.484,0,0,1-.366,4.738v0a3.152,3.152,0,0,1-2.176,2.256h0A53.032,53.032,0,0,1,10,15.5H10ZM1.876,3.655a24.059,24.059,0,0,0-.314,4.355v.021a22.605,22.605,0,0,0,.314,4.314,1.553,1.553,0,0,0,1.073,1.11A50.415,50.415,0,0,0,10,13.878a52.455,52.455,0,0,0,7.051-.408,1.554,1.554,0,0,0,1.07-1.109,22.682,22.682,0,0,0,.314-4.314c0-.009,0-.017,0-.026A21.893,21.893,0,0,0,18.12,3.66v0a1.555,1.555,0,0,0-1.073-1.112A50.225,50.225,0,0,0,10,2.121a52.526,52.526,0,0,0-7.049.407A1.6,1.6,0,0,0,1.876,3.655Zm17,8.915h0ZM8.006,11.283V4.716L13.475,8Zm0,0"
                        transform="translate(1240.002 474.375)"/>
                      <path class="a" d="M0,0H24V24H0Z" transform="translate(1238 469.874)"/>
                    </g>
                  </svg>
                </span>
                  <span>Youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main-menu__right">

        <div class="menu-desc">
          <h2>Miromax Більше разом з нами Ви отримуєте кешбек</h2>
          <p>
            Зареєструйся, та отримуйте кешбек за квитки і попкорн, до 20% від витрат в наших кінотеатрах.
          </p>
          <a href="#">
            Зареєструватися
          </a>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
import DropdownMenu from "@/components/DropdownMenu";

export default {
  name: "MainMenu",
  data: () => ({
    showLocations: false,
    right: false,
    hover: false,
    interactive: false
  }),
  components: {
    DropdownMenu
  }

}
</script>
