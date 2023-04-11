import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { ClassicEnvelopeField, Outcome } from '@/types';
import { generateId, removeMask } from '@/utils/functions';
import { ClassicEnvelopeModel } from '@/models/Method';
import { getFromLS, saveToLS, removeFromLS } from '@/services';
import { MethodEnum } from '@/enums';

export const useClassicEnvelopesStore = defineStore('classicEnvelopes', () => {
  const DEFAULT_LABEL = 'Кликните, чтобы назвать конверт';
  const DEFAULT_PLACEHOLDER = '1000';

  const EMPTY_METHOD: ClassicEnvelopeField = {
    id: '',
    placeholder: DEFAULT_PLACEHOLDER,
    envelopeName: DEFAULT_LABEL,
    envelopeAmount: 0,
  };

  /* init localStorage */
  const localData: ClassicEnvelopeModel = getFromLS(MethodEnum.CLASSIC);
  const envelopeFields: ClassicEnvelopeField[] = localData?.outcomes
    ? localData.outcomes.map((item, index) => ({
        id: generateId(`field${index}-`),
        placeholder: item.amount.toString(),
        envelopeName: item.name,
        envelopeAmount: item.amount,
      }))
    : [];

  /* component logic */
  const income = ref<string>(localData?.income.toString() || '');
  const envelopeList = ref<ClassicEnvelopeField[]>([...envelopeFields]);

  const moneyLeft = computed(() => {
    const expenses = envelopeList.value.reduce((acc, item) => {
      acc += +removeMask(item.envelopeAmount);
      return acc;
    }, 0);

    return +removeMask(income.value) - expenses;
  });

  const addEnvelope = () => {
    envelopeList.value.push({ ...EMPTY_METHOD, id: generateId('field') });
  };

  const deleteEnvelope = (id: string) => {
    envelopeList.value = envelopeList.value.filter(env => env.id !== id);
  };

  const save = () => {
    if (!income.value || !envelopeList.value.length) return;

    const formattedOutcomes: Outcome[] = envelopeList.value.map(item => ({
      name: item.envelopeName,
      amount: item.envelopeAmount,
    }));
    const budget = new ClassicEnvelopeModel(income.value, formattedOutcomes);

    saveToLS(MethodEnum.CLASSIC, budget);
  };

  const clear = () => {
    income.value = '';
    envelopeList.value = [];

    removeFromLS(MethodEnum.CLASSIC);
  };

  return {
    income,
    moneyLeft,
    envelopeList,
    addEnvelope,
    deleteEnvelope,
    save,
    clear,
  };
});
