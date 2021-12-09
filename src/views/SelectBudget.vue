<template>
  <ul class="calculate__budget-selection">
    <router-link to="/envelopes" class="calculate__budget-option">Классический метод конвертов</router-link>
    <router-link to="/jars" class="calculate__budget-option">Метод «кувшинов»</router-link>
    <router-link to="/microsoft" class="calculate__budget-option">Метод 60-10-10-10-10</router-link>
    <router-link to="/4-envelopes" class="calculate__budget-option">Метод четырех конвертов</router-link>
    <router-link to="/50-30-20" class="calculate__budget-option">Метод 50-30-20</router-link>
  </ul>
</template>

<style lang="sass">
.calculate__budget
  &-selection
    display: flex
    flex-direction: column

  &-option
    line-height: 150%
    color: inherit
</style>
