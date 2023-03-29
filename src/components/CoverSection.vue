<template>
  <section class="cover">
    <div class="container cover__wrapper">
      <h1 class="cover__title">Заначка</h1>
      <p class="cover__description">Когда нет сил копить</p>
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

  @media (max-width: 640px)
    flex-direction: column
    justify-content: flex-end

  &::before
    content: ''
    position: absolute
    width: 34%
    height: 100%
    max-width: 520px
    background-color: rgba($dark-color, 0.2)
    backdrop-filter: blur(7.5px)

    @media (max-width: 640px)
      width: 100%
      max-width: 100%
      height: 360px
      bottom: 0


  &__wrapper
    width: 100%
    position: relative
    z-index: 1
    display: flex
    flex-direction: column
    height: 100%
    justify-content: center

    @media (max-width: 640px)
      width: 100%
      height: 360px
      margin-top: auto

  &__title
    font-weight: 700
    font-size: 3rem
    line-height: 120%
    margin-bottom: 1.25rem

    @media (max-width: 640px)
      font-size: 2rem
      margin-bottom: 16px

  &__description
    font-size: 1.75rem
    line-height: 140%

    @media (max-width: 640px)
      font-size: 1.5rem
</style>
