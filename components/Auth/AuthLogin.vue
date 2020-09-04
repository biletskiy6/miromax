<template>
<div class="auth-login">
  <div class="auth-header">
    <img src="/logo.svg" alt="">
    <h4>Авторизація</h4>
  </div>

  <div class="auth-form">
    <input placeholder="Номер телефону або e-mail" class="auth-form__field" type="text">
    <input placeholder="Пароль" class="auth-form__field" type="text">
  </div>

  <div class="auth-buttons">
    <button class="button button--default-shadow">Увійти</button>
    <button @click="$emit('showRegister')" class="button button--create">Створити аккаунт</button>
  </div>

</div>
</template>

<script>
export default {
name: "AuthLogin"
}
</script>
