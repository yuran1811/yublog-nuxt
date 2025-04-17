<script setup lang="ts">
/**
 * @credits Full Stack Heroes <https://fullstackheroes.com/>
 */

withDefaults(
  defineProps<{
    emoji?: string;
    title?: string;
  }>(),
  {
    title: 'title',
    emoji: '👋',
  },
);
</script>

<template>
  <div class="flex h-full w-full items-start justify-start bg-sky-50">
    <div class="flex h-full items-start justify-start">
      <div
        class="flex h-full w-full flex-col items-center justify-center px-20 text-center"
      >
        <p class="mx-auto mb-0 text-center text-[120px] font-bold">
          {{ emoji }}
        </p>
        <h1 class="text-[60px] font-bold">
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>
