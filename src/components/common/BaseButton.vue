<template>
  <button class="button" :class="`button--${theme}`" @click.prevent="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonThemeEnum } from '@/enums';

interface Props {
  theme: ButtonThemeEnum;
}

withDefaults(defineProps<Props>(), {
  theme: ButtonThemeEnum.PRIMARY,
});

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style lang="sass">
.button
  font-weight: 700
  font-size: rem($ui-step * 4)
  line-height: rem($ui-step * 5)
  text-align: center
  display: flex
  align-items: center
  justify-content: center
  padding: $ui-step * 5 $ui-step * 10

  &--primary, &--secondary
    &:hover
      background-color: $primary-hover

    &:active
      background-color: $primary-active
      color: $dark-color

    &:disabled
      color: $light-color
      background-color: $neutral-color

  &--primary
    background-color: $primary-color
    color: $dark-color

  &--secondary
    color: $light-color
    border: 1px solid $primary-color

  +breakpoint('sm')
    width: 100%
</style>
