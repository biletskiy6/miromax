<template>
  <div @click="$emit('handleAuthClose')" class="auth" :class="{ active: auth }">
    <div @click.stop="" class="auth-content">
      <button @click="$emit('handleAuthClose')"  class="pick-movie-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path class="a"
                d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"/>
          <path class="b" d="M0,0H24V24H0Z"/>
        </svg>
      </button>


      <AuthProfile
        v-if="!showAuth && !showRegister"
        @showAuth="handleShowAuth"
        @showRegister="handleShowRegister"
      />

      <AuthLogin @showRegister="handleShowRegister" v-if="showAuth"/>
      <AuthRegister @showAuth="handleShowAuth" v-if="!showAuth && showRegister"/>


      <!--      <div class="auth-header">-->
      <!--        <img src="/logo.svg" alt="">-->
      <!--        <h4>Профіль</h4>-->
      <!--      </div>-->

      <!--      <p class="auth-desc">-->
      <!--        Увійдіть або створіть акаунт, <br/> використовуючи email.-->
      <!--      </p>-->

      <!--      <div class="auth-buttons">-->
      <!--          <button class="button button&#45;&#45;default-shadow">Увійти</button>-->
      <!--          <button class="button button&#45;&#45;create">Створити аккаунт</button>-->
      <!--      </div>-->

    </div>
  </div>
</template>

<script>
import AuthProfile from "@/components/Auth/AuthProfile";
import AuthLogin from "@/components/Auth/AuthLogin";
import AuthRegister from "@/components/Auth/AuthRegister";

export default {
  name: "Auth",
  props: ['auth'],
  data: () => ({
    showAuth: false,
    showRegister: false,
  }),
  methods: {
    handleShowAuth() {
      this.showAuth = true;
      this.showRegister = false;
    },
    handleShowRegister() {
      this.showRegister = true;
      this.showAuth = false;
    },
  },
  components: {AuthRegister, AuthLogin, AuthProfile}
}
</script>
