<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__copyright">
        <span class="caption">&#169;&nbsp;{{ year}}</span>
        <span class="caption caption--about">Сервис является ознакомительным. Ваши данные сохраняются локально и не передаются третьим лицам</span>
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
  padding: $ui-step * 8 0

  &__copyright
    display: flex
    align-items: center
    justify-content: space-between
    color: $light-opacity-m

    +breakpoint('sm')
      +ui-space(gap, 6)
      flex-direction: column
      align-items: flex-start

  .caption
    &--about
      +breakpoint('md')
        max-width: 500px

      +breakpoint('sm')
        max-width: initial
</style>
