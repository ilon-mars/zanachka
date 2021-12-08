<template>
  <div id="app">
    <app-promo />

    <app-methods />
  </div>
</template>

<script>
import AppPromo from '@/components/AppPromo'
import AppMethods from '@/components/AppMethods'

export default {
  name: 'App',

  components: {
    AppPromo, AppMethods
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
