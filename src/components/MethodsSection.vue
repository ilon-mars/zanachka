<template>
  <section class="methods">
    <div class="container">
      <h2 class="title">Выбрать вариант</h2>
      <ul class="methods__list">
        <MethodCard v-for="method in methods" :key="method.key" :method="method" />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import MethodCard from './MethodCard.vue'
import { methods } from '@/utils/constants'
</script>

<style lang="sass">
.methods
  margin: 120px 0

  &__list
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 28px
</style>
