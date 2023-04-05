import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { ClassicEnvelopeMethod } from '@/types';
import { generateId } from '@/utils/functions';
import { MethodEnum } from '@/enums';
import { useLocalStorage } from '@/hooks';

export const useClassicEnvelopesStore = defineStore('classicEnvelopes', () => {
  const DEFAULT_LABEL = 'Кликните, чтобы назвать конверт';
  const DEFAULT_PLACEHOLDER = '1000';

  const EMPTY_METHOD: ClassicEnvelopeMethod = {
    id: '',
    placeholder: DEFAULT_PLACEHOLDER,
    label: DEFAULT_LABEL,
    input: '',
  };

  const envelopeList = ref<ClassicEnvelopeMethod[]>([]);

  const income = ref<string>('');

  const moneyLeft = computed(() => {
    const expenses = envelopeList.value.reduce((acc, item) => {
      acc += +item.input;
      return acc;
    }, 0);

    return +income.value - expenses;
  });

  // const { get, set, remove } = useLocalStorage(MethodEnum.CLASSIC, {
  //   ...envelopeList.value,
  //   income: income.value,
  //   moneyLeft: moneyLeft.value,
  // });

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
