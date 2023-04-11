<template>
  <form :id="(route.params.key as string)" class="calculator-form">
    <BaseField
      id="income"
      v-model:input-value="incomes[route.params.key as string].value"
      placeholder="80 000"
      label="Введите доход после вычета налогов"
      class="calculator-form__field--income"
    />

    <ul class="calculator-form__input-list">
      <li
        v-for="field in incomes[route.params.key as string].fieldsList"
        :key="field.id"
        class="calculator-form__field"
      >
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
      <BaseButton
        :theme="ButtonThemeEnum.PRIMARY"
        @click="save(route.params.key as string as FixedMethodEnum)"
        >Сохранить</BaseButton
      >
      <BaseButton
        :theme="ButtonThemeEnum.SECONDARY"
        @click="clear(route.params.key as string as FixedMethodEnum)"
        >Очистить</BaseButton
      >
    </div>
  </form>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import BaseField from '@/components/common/BaseField.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { useFixedPercentStore } from '@/stores';
import { ButtonThemeEnum, type FixedMethodEnum } from '@/enums';

const route = useRoute();

const store = useFixedPercentStore();
const { incomes, save, clear } = store;
</script>
