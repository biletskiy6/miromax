<template>
  <div>
    <div class="personal-info">
      <div class="account-header">
        <h2>Персональна інформація</h2>
      </div>

      <div class="personal-info-form">
        <div class="personal-info-field">
          <label>Ім'я</label>
          <div class="personal-info-action">
            <div class="personal-info-static">
              <h2>Ярослав</h2>
              <button @click="handleActivePersonalInfo" class="account-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path class="a" d="M0,0H24V24H0Z"/>
                  <path class="b" d="M3,17.25V21H6.75L17.81,9.94,14.06,6.19ZM5.92,19H5v-.92l9.06-9.06.92.92Z"/>
                  <path class="b"
                        d="M20.71,5.63,18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75,1.83-1.83A1,1,0,0,0,20.71,5.63Z"/>
                </svg>
              </button>
            </div>
            <div ref="personal-info-active" class="personal-info-active">
              <input type="text" value="Ярослав">
              <button>Зберігти зміни</button>
            </div>

          </div>
        </div>
        <div class="personal-info-field">
          <label>Ім'я</label>
          <div class="personal-info-action">
            <div class="personal-info-static">
              <h2>Ярослав</h2>
              <button class="account-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <!--                  <defs>-->
                  <!--                    <style>.a {-->
                  <!--                      fill: none;-->
                  <!--                    }-->

                  <!--                    .b {-->
                  <!--                      fill: #ce58e7;-->
                  <!--                    }</style>-->
                  <!--                  </defs>-->
                  <path class="a" d="M0,0H24V24H0Z"/>
                  <path class="b" d="M3,17.25V21H6.75L17.81,9.94,14.06,6.19ZM5.92,19H5v-.92l9.06-9.06.92.92Z"/>
                  <path class="b"
                        d="M20.71,5.63,18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75,1.83-1.83A1,1,0,0,0,20.71,5.63Z"/>
                </svg>

              </button>
            </div>
            <!--            <div class="personal-info-active">-->
            <!--              <input type="text" value="Ярослав">-->
            <!--              <button>Зберігти зміни</button>-->
            <!--            </div>-->

          </div>
        </div>
        <div class="personal-info-field">
          <label>Ім'я</label>
          <div class="personal-info-action">
            <div class="personal-info-static">
              <h2>Ярослав</h2>
              <button class="account-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <!--                  <defs>-->
                  <!--                    <style>.a {-->
                  <!--                      fill: none;-->
                  <!--                    }-->

                  <!--                    .b {-->
                  <!--                      fill: #ce58e7;-->
                  <!--                    }</style>-->
                  <!--                  </defs>-->
                  <path class="a" d="M0,0H24V24H0Z"/>
                  <path class="b" d="M3,17.25V21H6.75L17.81,9.94,14.06,6.19ZM5.92,19H5v-.92l9.06-9.06.92.92Z"/>
                  <path class="b"
                        d="M20.71,5.63,18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75,1.83-1.83A1,1,0,0,0,20.71,5.63Z"/>
                </svg>

              </button>
            </div>
            <!--            <div class="personal-info-active">-->
            <!--              <input type="text" value="Ярослав">-->
            <!--              <button>Зберігти зміни</button>-->
            <!--            </div>-->

          </div>
        </div>
        <div class="personal-info-field">
          <label>Ім'я</label>
          <div class="personal-info-action">
            <div class="personal-info-static">
              <h2>Ярослав</h2>
              <button class="account-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <!--                  <defs>-->
                  <!--                    <style>.a {-->
                  <!--                      fill: none;-->
                  <!--                    }-->

                  <!--                    .b {-->
                  <!--                      fill: #ce58e7;-->
                  <!--                    }</style>-->
                  <!--                  </defs>-->
                  <path class="a" d="M0,0H24V24H0Z"/>
                  <path class="b" d="M3,17.25V21H6.75L17.81,9.94,14.06,6.19ZM5.92,19H5v-.92l9.06-9.06.92.92Z"/>
                  <path class="b"
                        d="M20.71,5.63,18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75,1.83-1.83A1,1,0,0,0,20.71,5.63Z"/>
                </svg>

              </button>
            </div>
            <!--            <div class="personal-info-active">-->
            <!--              <input type="text" value="Ярослав">-->
            <!--              <button>Зберігти зміни</button>-->
            <!--            </div>-->

          </div>
        </div>
      </div>

    </div>


    <div class="additional-info">
      <div class="account-header">
        <h2>Додаткова інформація</h2>
      </div>

    </div>

  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader";

export default {
  name: "index",
  components: {AppHeader},
  layout: 'account',
  methods: {
    handleActivePersonalInfo() {

      // console.log(this);

      // this.$el.querySelector()
    }
  }
}
</script>
