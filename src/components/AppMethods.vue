<template>
  <section class="container section methods">
    <method-card v-for="method in methods" :key="method.id" :method="method" />
  </section>
</template>

<script>
import MethodCard from '@/components/MethodCard'

export default {
  components: {
    MethodCard
  },

  data () {
    return {
      methods: []
    }
  },

  created () {
    this.methods = this.$store.state.planningModelList
  }
}
</script>
