import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { generateId, wearMask } from '@/utils/functions';
import { FixedEnvelopesModel } from '@/models/Method';
import { getFromLS, saveToLS, removeFromLS } from '@/services';
import { MethodEnum } from '@/enums';
import { JARS_PERCENTS } from '@/utils/constants';

export const useJarsStore = defineStore('jars', () => {
  /* init localStorage */
  const localData: FixedEnvelopesModel = getFromLS(MethodEnum.JARS);

  /* component logic */
  const income = ref<string>(localData?.income.toString() || '');
  const jarsList = computed(() =>
    JARS_PERCENTS.map((percent, index) => ({
      id: generateId(`field${index}-`),
      name: `${percent}%`,
      amount: wearMask(Math.floor((+income.value / 100) * percent)),
    }))
  );

  const save = () => {
    if (!income.value) return;

    const budget = new FixedEnvelopesModel(income.value);

    saveToLS(MethodEnum.JARS, budget);
  };

  const clear = () => {
    income.value = '';

    removeFromLS(MethodEnum.JARS);
  };

  return {
    income,
    jarsList,
    save,
    clear,
  };
});
