<template>
  <section class="calculator">
    <div class="container">
      <h2 class="title">Рассчитать</h2>
      <RouterView />
    </div>
  </section>
</template>

<style lang="sass">
.calculator
  margin-bottom: 120px

  @media (max-width: 640px)
    margin: 60px 0
</style>
