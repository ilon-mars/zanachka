import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { ClassicEnvelopeField } from '@/types';
import { generateId, removeMask } from '@/utils/functions';
import { ClassicEnvelopeModel } from '@/models/Method';

export const useClassicEnvelopesStore = defineStore('classicEnvelopes', () => {
  const DEFAULT_LABEL = 'Кликните, чтобы назвать конверт';
  const DEFAULT_PLACEHOLDER = '1000';

  const EMPTY_METHOD: ClassicEnvelopeField = {
    id: '',
    placeholder: DEFAULT_PLACEHOLDER,
    envelopeName: DEFAULT_LABEL,
    envelopeAmount: '',
  };

  const envelopeList = ref<ClassicEnvelopeField[]>([]);

  const income = ref<string>('');

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
    // set();
  };

  const clear = () => {
    envelopeList.value = [];
    income.value = '';
    // remove();
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
