<template>
  <form :id="MethodEnum.JARS" class="calculator-form">
    <BaseField
      id="income"
      v-model:input-value="income"
      placeholder="80 000"
      label="Введите доход после вычета налогов"
      class="calculator-form__field--income"
    />

    <ul class="calculator-form__input-list">
      <li v-for="jar in jarsList" :key="jar.id" class="calculator-form__field">
        <BaseField
          :id="jar.id"
          v-model:input-value="jar.amount"
          :placeholder="jar.amount.toString()"
          :label="jar.name"
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
import { useJarsStore } from '@/stores';
import { storeToRefs } from 'pinia';

const store = useJarsStore();
const { income, jarsList } = storeToRefs(store);
const { save, clear } = store;
</script>
