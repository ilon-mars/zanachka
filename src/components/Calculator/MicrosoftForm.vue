<template>
  <form :id="MethodEnum.MICROSOFT" class="calculator-form">
    <BaseField
      id="income"
      v-model:input-value="income"
      placeholder="80 000"
      label="Введите доход после вычета налогов"
      class="calculator-form__field--income"
    />

    <ul class="calculator-form__input-list">
      <li v-for="field in microsoftList" :key="field.id" class="calculator-form__field">
        <BaseField
          :id="field.id"
          v-model:input-value="field.amount"
          :placeholder="field.amount.toString()"
          :label="field.name"
          is-readonly
        >
        </BaseField>
      </li>
    </ul>

    <div class="calculator-form__buttons">
      <BaseButton :theme="ButtonThemeEnum.PRIMARY" @click="save">Сохранить</BaseButton>
      <BaseButton :theme="ButtonThemeEnum.SECONDARY" @click="clear">Очистить</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import BaseField from '@/components/common/BaseField.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { ButtonThemeEnum, MethodEnum } from '@/enums';
import { useMicrosoftStore } from '@/stores';
import { storeToRefs } from 'pinia';

const store = useMicrosoftStore();
const { income, microsoftList } = storeToRefs(store);
const { save, clear } = store;
</script>
