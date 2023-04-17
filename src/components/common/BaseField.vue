<template>
  <div class="field">
    <Transition name="fade" mode="out-in">
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
    </Transition>

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
  set: value => {
    if (typeof value === 'string') {
      emit('update:inputValue', parseFloat(removeMask(value)));
    } else {
      emit('update:inputValue', value);
    }
  },
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
    +ui-space(bottom, 3)
    font-size: rem($ui-step * 4)
    line-height: rem($ui-step * 5)

    &--editable
      animation: blink 10s infinite both
      border-left: 2px solid transparent

  &__label-input
    +ui-space(bottom, 3)
    background-color: transparent
    border-left: 2px solid $active-color
    color: $light-opacity-l
    padding-left: $ui-step * 2

    &:focus
      outline: none

  &__input-wrapper
    display: flex
    align-items: center

  &__input
    +transition

    width: 100%
    color: inherit
    padding: $ui-step * 4 $ui-step * 5
    border: 1px solid $light-opacity-m
    caret-color: $primary-color
    font-size: rem($ui-step * 5)
    line-height: rem($ui-step * 6)
    background-color: transparent

    &:not(:read-only):focus
      color: $light-color
      border-color: transparent
      outline: 2px solid $active-color

    &:not(:focus, :read-only):hover
      border-color: $light-color

    &:read-only
      background-color: $light-opacity-s
      border-color: $light-opacity-m
      pointer-events: none

    &:invalid
      color: $warning-color
      border-color: $warning-color

    &::placeholder
      color: $light-opacity-l
</style>
