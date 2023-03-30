<template>
  <li class="method">
    <h3 class="method__name">{{ method.name }}</h3>
    <p class="method__description">{{ method.description }}</p>
    <button
      class="method__toggle text-button"
      :class="isCollapsed ? 'method__toggle--expand' : 'method__toggle--collapse'"
    >
      {{ isCollapsed ? 'Подробнее' : 'Скрыть' }}
    </button>
    <button class="method__scroll-to text-button">Перейти к расчету</button>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Method } from '@/types'

defineProps<{
  method: Method
}>()

const isCollapsed = ref(true)
</script>

<style lang="sass">
.method
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 20px

  &__name
    font-weight: 700
    font-size: 2rem
    line-height: 120%

  &__description
    font-size: 1.25rem
    line-height: 140%

  &__toggle
    +transition
    color: $light-opacity-l

    &:hover
      color: $light-color

    &--expand
      border-bottom: 1px dashed $light-opacity-l

      &:hover
        border-color: $light-color

    &--collapse
      &:hover
        color: $primary-color

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
