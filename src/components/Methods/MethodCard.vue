<template>
  <li v-if="method.key" class="method" :class="{ active: method.isActive }">
    <h3 class="method__name">{{ method.name }}</h3>
    <p class="method__description text">{{ method.description }}</p>
    <button class="method__details text-button" @click="$emit('openModal', method.steps)">
      Подробнее
    </button>
    <RouterLink class="method__scroll-to text-button" :to="{ path: `/${method.key}` }"
      >Перейти к расчету</RouterLink
    >
  </li>
</template>

<script setup lang="ts">
import type { MethodWithActivity } from '@/types';

defineProps<{
  method: MethodWithActivity;
}>();

defineEmits<{
  (e: 'openModal', data: string[]): void;
}>();
</script>

<style lang="sass">
.method
  +transition
  +ui-space(gap, 5)
  display: flex
  flex-direction: column
  align-items: flex-start

  &.active
    grid-column: -1 / 1
    padding: $ui-step * 4
    background-color: $light-opacity-s

  &__name
    font-weight: 700
    font-size: rem($ui-step * 8)
    line-height: 120%

  &__details
    +transition
    color: $light-opacity-l

    &:hover
      color: $light-color

  &__scroll-to
    color: $primary-color
    display: flex
    align-items: center

    &:hover
      color: $primary-hover

    &:active
      color: $primary-active

    &::after
      +ui-space(left, 3)
      content: ''
      background: url("@/assets/icons/arrow.svg") no-repeat center / contain
      width: rem($ui-step * 8)
      height: rem($ui-step * 8)
</style>
