import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { generateId, wearMask } from '@/utils/functions';
import { FixedEnvelopesModel } from '@/models/Method';
import { getFromLS, saveToLS, removeFromLS } from '@/services';
import { MethodEnum } from '@/enums';
import { MICROSOFT_PERCENTS } from '@/utils/constants';

export const useMicrosoftStore = defineStore('microsoft', () => {
  /* init localStorage */
  const localData: FixedEnvelopesModel = getFromLS(MethodEnum.MICROSOFT);

  /* component logic */
  const income = ref<string>(localData?.income.toString() || '');
  const microsoftList = computed(() =>
    MICROSOFT_PERCENTS.map((percent, index) => ({
      id: generateId(`field-${index}-`),
      name: `${percent}%`,
      amount: wearMask(Math.floor((+income.value / 100) * percent)),
    }))
  );

  const save = () => {
    if (!income.value) return;

    const budget = new FixedEnvelopesModel(income.value);

    saveToLS(MethodEnum.MICROSOFT, budget);
  };

  const clear = () => {
    income.value = '';

    removeFromLS(MethodEnum.MICROSOFT);
  };

  return {
    income,
    microsoftList,
    save,
    clear,
  };
});
