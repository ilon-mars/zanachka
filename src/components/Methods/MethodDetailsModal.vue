<template>
  <ul class="details">
    <li v-for="(step, index) in methodSteps" :key="index" class="details__step text">
      {{ step }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { MethodDescription } from '@/types';

defineProps<{
  methodSteps: MethodDescription['steps'];
}>();
</script>

<style lang="sass">
.details
  +ui-space(gap, 3)
  display: flex
  flex-direction: column
  justify-content: center

  &__step
    position: relative
    padding-left: $ui-step * 5

    &::before
      content: ''
      position: absolute
      width: rem($ui-step * 2)
      height: rem($ui-step * 2)
      transform: translateY(50%)
      top: rem($ui-step)
      left: 0
      background-color: $primary-color
      border-radius: 50%
</style>
