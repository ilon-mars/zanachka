<template>
  <fieldset class="calculate__budget-parameters">
    <div class="calculate__budget-parameter">
      <label for="">Инвестиции, сбережения и крупные покупки (10-20%)</label>

      <label for="">Выберите процент</label>
      <input type="range" name="" id="">

      <span>или</span>

      <label for="">введите сумму вручную</label>
      <input type="text" id="">
    </div>

    <div class="calculate__budget-parameter">
      <label for="">Введите регулярные расходы</label>
      <input type="text" id="">
    </div>

    <div class="calculate__budget-parameter">
      <input type="radio" name="divider" id="">Делить на 4
      <input type="radio" name="divider" id="">Делить на 4.3
      <label for="">На неделю остается:</label>
      <input type="text" id="" readonly>
    </div>

  </fieldset>
</template>
