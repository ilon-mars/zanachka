<template>
  <Teleport to="#app">
    <Transition name="fade">
      <div v-if="props.isOpen" class="overlay" @click.self="emit('close')">
        <div class="modal">
          <button class="modal__close-button" @click="emit('close')">
            <CloseIcon />
          </button>

          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

watch(
  () => props.isOpen,
  async () => {
    if (props.isOpen) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }
  },
  { immediate: true }
);
</script>

<style lang="sass">
.overlay
  position: fixed
  z-index: 10
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba($dark-color, $opacity-m)
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  backdrop-filter: blur(10px)
  padding: $ui-step * 5

  +breakpoint('sm')
    padding: 0

  .modal
    position: relative
    max-width: 800px
    min-height: 400px
    padding: $ui-step * 10
    background-color: $dark-background
    display: flex

    +breakpoint('sm')
      width: calc(100% - $env-verlical-space)
      height: calc(100vh - $env-horizontal-space)

    &__close-button
      position: absolute
      top: -($ui-step * 10)
      right: 0
      width: rem($ui-step * 5)
      height: rem($ui-step * 5)
      cursor: pointer
      color: $light-color

      +breakpoint('sm')
        top: $ui-step * 5
        right: $ui-step * 5
</style>
