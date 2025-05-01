<script setup lang="ts">
const isLarge = useMediaQuery('(min-width: 1024px)');
const { x, y } = usePointer();
</script>

<template>
  <div
    v-if="isLarge"
    class="bg-primary pointer-events-none fixed -top-full -left-full z-200 size-3.5 rounded-full mix-blend-difference"
    :style="{
      top: `${y}px`,
      left: `${x}px`,
      transform: 'translate(-50%, -50%)',
    }"
  />
</template>
