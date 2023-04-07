<template>
  <div class="field">
    <input
      v-if="isEditMode"
      v-model="editedLabel"
      type="text"
      class="field__label-input"
      @blur="isEditMode = false"
    />
    <label
      v-else
      :for="id"
      class="field__label"
      :class="{ 'field__label--editable': isLabelEditable }"
      @click="editLabel"
      >{{ label }}</label
    >

    <div class="field__input-wrapper">
      <slot name="left" />
      <input
        :id="id"
        v-model="input"
        v-mask
        type="text"
        :readonly="isReadonly"
        :placeholder="placeholder"
        class="field__input"
      />
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { wearMask, removeMask } from '@/utils/functions';

interface Props {
  inputValue: string | number;
  id: string;
  label: string;
  placeholder: string;
  isReadonly?: boolean;
  isLabelEditable?: boolean;
  labelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isReadonly: false,
  isLabelEditable: false,
  labelValue: '',
});

const emit = defineEmits<{
  (e: 'update:inputValue', value: string | number): void;
  (e: 'update:labelValue', value: string): void;
}>();

/* input */
const input = computed({
  get: () => props.inputValue,
  set: value => emit('update:inputValue', +value),
});

/* label */
const isEditMode = ref<boolean>(false);

const editedLabel = computed({
  get: () => props.labelValue,
  set: value => emit('update:labelValue', value),
});

const editLabel = () => {
  if (!props.isLabelEditable) {
    return;
  }

  isEditMode.value = true;
};

/* mask */
const vMask = {
  beforeMount: (el: HTMLInputElement) => {
    el.value = wearMask(el.value);
  },
  updated: (el: HTMLInputElement) => {
    let unformatted = removeMask(el.value);
    el.value = wearMask(unformatted);
  },
};
</script>

<style lang="sass">
.field
  display: flex
  flex-direction: column
  width: 100%

  &__label
    font-size: 1rem
    line-height: 1.25rem
    margin-bottom: 12px

    &--editable
      color: $light-opacity-m

  &__label-input
    background-color: transparent
    border: 1px solid $active-color
    color: $active-color
    margin-bottom: 12px

    &:focus
      outline: none
      border: 1px solid $success-color

  &__input-wrapper
    display: flex
    align-items: center

  &__input
    +transition

    width: 100%
    color: inherit
    padding: 17px 20px
    border: 1px solid $light-opacity-m
    caret-color: $primary-color
    font-size: 1.25rem
    line-height: 1.5rem
    background-color: transparent

    &:focus
      color: $light-color
      border-color: transparent
      outline: 2px solid $active-color

    &:not(:focus):hover
      border-color: $light-color

    &:read-only
      background-color: $light-opacity-s
      border-color: $light-opacity-m

    &:invalid
      color: $warning-color
      border-color: $warning-color

    &::placeholder
      color: $light-opacity-l
</style>
