<template>
  <div class="method">
    <h3 class="method__title">{{ method.name }}</h3>

    <p class="method__description">{{ method.description }}</p>

    <div :class="['method__details', activeCards.includes(method.key) ? 'active' : '']">
      <ul class="method__steps">
        <li class="method__step" v-for="(step, index) in method.steps" :key="index">{{ step }}</li>
      </ul>

      <ul class="method__tips" v-if="method.tips && method.tips.length > 0">
        <li class="method__tip" v-for="(tip, index) in method.tips" :key="index">{{ tip }}</li>
      </ul>

      <router-link :to="`/${method.key}#calculate`" class="method__calculate-link">Перейти к расчету &#10132;</router-link>
    </div>

    <button class="method__show-more" @click="toggleCardDescription(method.key)">{{ activeCards.includes(method.key) ? 'Свернуть' : 'Читать полностью' }}</button>
  </div>
</template>

<script>
export default {
  props: {
    method: {
      type: Object
    }
  },

  data () {
    return {
      activeCards: []
    }
  },

  methods: {
    toggleCardDescription (key) {
      const index = this.activeCards.indexOf(key)

      if (index > -1) {
        this.activeCards.splice(index, 1)
      } else {
        this.activeCards.push(key)
      }
    }
  }
}
</script>

<style lang="sass">
.method
  padding: 30px
  margin-bottom: 30px

  &__title
    margin-bottom: 20px
    font-size: 24px
    line-height: 150%

  &__description
    margin-bottom: 15px
    font-size: 16px
    line-height: 20px

  &__details
    max-height: 0
    overflow: hidden
    transition: all 0.4s ease-in-out
    line-height: 150%

    &.active
      margin-bottom: 15px
      max-height: 500px

  &__steps
    margin-bottom: 15px

  &__tips
    margin-bottom: 15px

  &__show-more
    cursor: pointer
    background-color: transparent
    color: inherit
    font-size: 16px
    line-height: 20px
    font-weight: 100

  &__calculate-link
    color: inherit
    font-weight: 100

</style>
