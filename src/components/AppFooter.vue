<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__copyright">
        <span class="caption">&#169;&nbsp;{{ year}}</span>
        <span class="caption">Сервис является ознакомительным. Ваши данные сохраняются локально и не передаются третьим лицам</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style lang="sass">
.footer
  background-color: $light-opacity-s
  padding: 32px 0

  &__copyright
    display: flex
    align-items: center
    justify-content: space-between
    color: $light-opacity-m
</style>
