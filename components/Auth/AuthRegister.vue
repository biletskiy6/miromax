<template>
  <div class="auth-login">
    <div class="auth-header">
      <img src="/logo.svg" alt="">
      <h4>Реєстрація</h4>
    </div>

    <div class="auth-form">
      <input placeholder="E-mail" class="auth-form__field" type="text">
      <input placeholder="Номер телефону" class="auth-form__field" type="text">
      <!--      <input placeholder="Пароль" class="auth-form__field" type="text">-->
    </div>

    <div class="auth-confirm">
      <ul>
        <li>
          <span><c-checkbox v-model="rules"/></span>
          <p>Я погоджуюсь з <span class="accent">правилами кінотеатру miromax</span> та підтверджую, що ознайомлений з
            <span class="accent">віковими обмеженнями</span> кінотеатру</p>
        </li>
        <li>
          <span><c-checkbox v-model="mail"/></span>
          <p>Підписатися на розсилку</p>
        </li>
      </ul>
    </div>

    <div class="auth-buttons">
      <button @click="handleCreate" class="button button--default-shadow">Створити</button>
      <button @click="$emit('showAuth')" class="button button--create">Є аккаунт?</button>
    </div>

  </div>
</template>

<script>
import CCheckbox from "@/components/c-checkbox";

export default {
  data: () => ({
    rules: false,
    mail: false,
  }),
  name: "AuthRegister",
  components: {CCheckbox},
  methods: {
    handleCreate() {
      // alert(this.checked)
    }
  }
}
</script>
