<template>
  <form :id="MethodEnum.CLASSIC" class="calculator-form">
    <BaseField
      id="income"
      v-model:input-value="income"
      placeholder="80 000"
      label="Введите доход после вычета налогов"
      class="calculator-form__field--income"
    />

    <ul v-if="envelopeList.length" class="calculator-form__input-list">
      <li v-for="envelope in envelopeList" :key="envelope.id" class="calculator-form__field">
        <BaseField
          :id="envelope.id"
          v-model:input-value="envelope.input"
          v-model:label-value="envelope.label"
          :placeholder="envelope.placeholder"
          :label="envelope.label"
          is-label-editable
        >
          <template #right>
            <button class="calculator-form__field-button" @click="deleteEnvelope(envelope.id)">
              <CrossIcon class="calculator-form__delete-icon" />
            </button>
          </template>
        </BaseField>
      </li>
    </ul>

    <AddFieldButton class="calculator-form__add-button" @click="addEnvelope" />

    <span class="calculator-form__left"
      ><span>{{ moneyLeft >= 0 ? 'Осталось свободно' : 'Долг' }}:&nbsp;</span>{{ moneyLeft }}</span
    >

    <div class="calculator-form__buttons">
      <BaseButton :theme="ButtonThemeEnum.PRIMARY" @click="save">Сохранить</BaseButton>
      <BaseButton :theme="ButtonThemeEnum.SECONDARY" @click="clear">Очистить</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import BaseField from '@/components/common/BaseField.vue';
import AddFieldButton from '@/components/Calculator/AddFieldButton.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import CrossIcon from '@/components/icons/CrossIcon.vue';
import { ButtonThemeEnum, MethodEnum } from '@/enums';
import { useClassicEnvelopesStore } from '@/stores';
import { storeToRefs } from 'pinia';

const store = useClassicEnvelopesStore();
const { envelopeList, income, moneyLeft } = storeToRefs(store);
const { addEnvelope, deleteEnvelope, save, clear } = store;
</script>

<style lang="sass">
.calculator-form
  &__delete-icon
    transform: rotate(45deg)
    width: 40px
    height: 40px

  &__left
    display: flex
    margin-bottom: 28px
</style>
