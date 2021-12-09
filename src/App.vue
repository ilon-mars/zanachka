<template>
  <div id="app">
    <app-promo />

    <app-methods />

    <app-calculate />
  </div>
</template>

<script>
import AppPromo from '@/components/AppPromo'
import AppMethods from '@/components/AppMethods'
import AppCalculate from './components/AppCalculate'

export default {
  name: 'App',

  components: {
    AppPromo, AppMethods, AppCalculate
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/_reset'
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap')

body
  background-color: #191919
  min-height: 100vh
  font-family: 'Montserrat', sans-serif
  color: #f5f5f5

.section
  margin-bottom: 50px

.container
  width: 1200px
  margin: 0 auto
</style>
