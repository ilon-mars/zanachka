<template>
  <main class="main">
    <CoverSection />
    <MethodsSection />
    <CalculatorSection />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import CoverSection from '@/components/CoverSection.vue';
import MethodsSection from '@/components/MethodsSection.vue';
import CalculatorSection from '@/components/CalculatorSection.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>
