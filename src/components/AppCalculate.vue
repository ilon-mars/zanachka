<template>
  <section class="container section calculate">
    <calculate-scene />

    <calculate-budget />
  </section>
</template>

<script>
import CalculateScene from '@/components/CalculateScene'
import CalculateBudget from '@/components/CalculateBudget'

export default {
  components: {
    CalculateScene, CalculateBudget
  }
}
</script>

<style lang="sass">
.calculate
  display: flex
</style>
