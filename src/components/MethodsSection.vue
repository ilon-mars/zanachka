<template>
  <section class="methods">
    <div class="container">
      <h2 class="title">Выбрать вариант</h2>
      <ul class="methods__list">
        <MethodCard
          v-for="method in methods"
          :key="method.key"
          :method="method"
          @open-modal="openModal"
        />
      </ul>
    </div>

    <AppModal :is-open="isOpen" @close="closeModal">
      <MethodDetailsModal :method-steps="methodDetails" />
    </AppModal>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import MethodCard from '@/components/Methods/MethodCard.vue';
import { methods as rawMethods } from '@/utils/constants';
import type { Method, MethodWithActivity } from '@/types';
import AppModal from '@/components/AppModal.vue';
import MethodDetailsModal from './Methods/MethodDetailsModal.vue';

const methods = reactive<Record<string, MethodWithActivity>>(
  rawMethods.reduce((acc, method, index) => {
    acc[index] = { ...method, isActive: false };
    return acc;
  }, {} as Record<string, MethodWithActivity>)
);

const isOpen = ref(false);

const methodDetails = ref<Method['steps']>([]);

const openModal = (steps: Method['steps']) => {
  isOpen.value = true;
  methodDetails.value = steps;
};

const closeModal = () => {
  isOpen.value = false;
  methodDetails.value = [];
};
</script>

<style lang="sass">
.methods
  margin: 120px 0

  @media (max-width: 640px)
    margin: 60px 0

  &__list
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 28px

    @media (max-width: 640px)
      grid-template-columns: 1fr
</style>
