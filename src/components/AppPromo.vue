<template>
  <section class="promo">
    <h1 class="promo__title">Заначка</h1>

    <h2 class="promo__subtitle">Когда копить уже нет сил, создай заначку</h2>
  </section>
</template>

<style lang="sass">
.promo
  height: 100vh
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('~@/assets/img/promo_bg.jpg')
  background-repeat: no-repeat
  background-size: cover
  display: flex
  flex-direction: column
  justify-content: center

  &__title
    text-transform: uppercase
    font-size: 42px
    font-weight: 100
    margin: 0 auto 30px

  &__subtitle
    font-size: 24px
    margin: 0 auto
</style>
