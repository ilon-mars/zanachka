<template>
  <section class="cover">
    <div class="cover__wrapper">
      <div class="cover__content">
        <h1 class="cover__title">Заначка</h1>
        <p class="cover__description">Когда нет сил копить</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="sass">
.cover
  width: 100%
  height: 100vh
  background: url("@/assets/img/bg.png") no-repeat center / cover
  position: relative
  display: flex

  +breakpoint('md')
    flex-direction: column
    justify-content: flex-end

  &__wrapper
    width: 34%
    height: 100%
    background-color: rgba($dark-color, 0.2)
    backdrop-filter: blur(7.5px)
    display: flex
    align-items: center

    +breakpoint('xl')
      width: 50%
      max-width: initial

    +breakpoint('md')
      width: 100%
      max-width: 100%
      height: 175px

  &__content
    margin-left: auto
    width: 400px

    +breakpoint('xl')
      width: 480px

    +breakpoint('md')
      width: 100%
      margin: 0 auto
      padding: 20px

    +breakpoint('xs')
      padding: 10px

  &__title
    +ui-space(bottom, 5)
    font-weight: 700
    font-size: rem($ui-step * 12)
    line-height: 120%

    +breakpoint('sm')
      +ui-space(bottom, 4)
      font-size: rem($ui-step * 8)

  &__description
    font-size: rem($ui-step * 7)
    line-height: 140%

    +breakpoint('sm')
      font-size: rem($ui-step * 6)
</style>
