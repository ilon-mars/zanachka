<template>
  <div class="add-field">
    <button class="add-field__button" type="button" @click.prevent="$emit('click')">
      <PlusIcon width="24" height="24" />
    </button>
  </div>
</template>

<script setup lang="ts">
import PlusIcon from '@/components/icons/CrossIcon.vue';

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style lang="sass">
.add-field
  width: 100%
  height: rem($ui-step * 7.5)
  position: relative
  display: flex
  justify-content: center

  &:hover
    &::before
      background-color: $light-opacity-l

    .add-field__button
      background-color: $success-hover

  &::before
    +transition(background-color)

    content: ''
    position: absolute
    width: 100%
    height: 1px
    background-color: $light-neutral-color
    top: 50%
    transform: translateY(-50%)
    z-index: -1

  &__button
    width: rem($ui-step * 7.5)
    height: rem($ui-step * 7.5)
    background-color: $success-color
</style>
