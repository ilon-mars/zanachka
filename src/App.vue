<template>
  <div id="app">
    <app-promo />
  </div>
</template>

<script>
import AppPromo from '@/components/AppPromo'

export default {
  name: 'App',

  components: {
    AppPromo
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/_reset'
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap')

#app
  background-color: #191919
  min-height: 100vh
  font-family: 'Montserrat', sans-serif
  color: #f5f5f5
</style>
