import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import { generateId, wearMask } from '@/utils/functions';
import { FixedEnvelopesModel } from '@/models/Method';
import { getFromLS, saveToLS, removeFromLS } from '@/services';
import { FixedMethodEnum } from '@/enums';
import { methodsPercents } from '@/utils/constants';
import { FixedPercent, FixedPercentField } from '@/types';

const createIncome = (key: FixedMethodEnum, percents: FixedPercent) => {
  const income = reactive({
    value: (getFromLS(key) ? getFromLS(key).income : '') as string,

    fieldsList: computed(() =>
      percents.map((percent, index) => ({
        id: generateId(`field-${index}-`),
        name: `${percent}%`,
        amount: wearMask(Math.floor((+income.value / 100) * percent)),
      }))
    ),
  });

  return income;
};

export const useFixedPercentStore = defineStore('fixedPercentStore', () => {
  const incomes = Object.entries(methodsPercents).reduce(
    (acc, [key, percents]) => ({ ...acc, [key]: createIncome(key as FixedMethodEnum, percents) }),
    {} as FixedPercentField
  );

  const save = (key: FixedMethodEnum) => {
    if (!incomes[key].value) return;

    const budget = new FixedEnvelopesModel(incomes[key].value);

    saveToLS(key, budget);
  };

  const clear = (key: FixedMethodEnum) => {
    incomes[key].value = '';

    removeFromLS(key);
  };

  return { incomes, save, clear };
});
