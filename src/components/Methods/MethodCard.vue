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

  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 20px

  &.active
    grid-column: -1 / 1
    padding: 16px
    background-color: $light-opacity-s

  &__name
    font-weight: 700
    font-size: 2rem
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
      content: ''
      margin-left: 12px
      background: url("@/assets/icons/arrow.svg") no-repeat center / contain
      width: 24px
      height: 24px
</style>
