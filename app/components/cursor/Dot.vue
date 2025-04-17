<script setup lang="ts">
import { useMouse } from '@vueuse/core';

const { x, y } = usePointer();
</script>

<template>
  <div
    class="pointer-events-none fixed top-0 left-0 z-[9999] size-3.5 rounded-full bg-(--ui-primary) mix-blend-difference"
    :style="{
      top: `${y}px`,
      left: `${x}px`,
      transform: 'translate(-50%, -50%)',
    }"
  ></div>
</template>
