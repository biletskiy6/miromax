<template>
  <div class="auth">
    <div class="auth-content">
      <button class="pick-movie-close" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path class="a"
                d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"/>
          <path class="b" d="M0,0H24V24H0Z"/>
        </svg>
      </button>


<!--      <AuthProfile/>-->
          <AuthLogin/>
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
export default {
name: "Auth",
  components: {AuthLogin, AuthProfile}
}
</script>
