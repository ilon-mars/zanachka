<template>
  <form class="calculate__budget">
    <h3 class="calculate__budget-name">Название метода</h3>

    <fieldset class="calculate__budget-income">
      <label for="income">Введите доход после вычета налогов</label>
      <input type="text" id="income">
    </fieldset>

    <router-view></router-view>
  </form>
</template>

<style lang="sass">
.calculate__budget
  padding: 30px
  width: 100%

  &-name
    margin-bottom: 20px
    font-size: 24px
    line-height: 29px
    text-transform: uppercase

  &-income
    display: flex
    flex-direction: column
    margin-bottom: 30px

    label
      font-size: 24px
      line-height: 29px
      margin-bottom: 15px
</style>
