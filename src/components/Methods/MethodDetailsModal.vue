<template>
  <ul class="details">
    <li v-for="(step, index) in methodSteps" :key="index" class="details__step">
      {{ step }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Method } from '@/types';

defineProps<{
  methodSteps: Method['steps'];
}>();
</script>

<style lang="sass">
.details
  display: flex
  flex-direction: column
  justify-content: center
  gap: 12px

  &__step
    position: relative
    line-height: 140%
    padding-left: 20px

    &::before
      content: ''
      position: absolute
      width: 10px
      height: 10px
      top: 4px
      left: 0
      background-color: $primary-color
      border-radius: 50%
</style>
