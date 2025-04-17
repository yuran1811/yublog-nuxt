<script setup lang="ts">
/**
 * @credits Full Stack Heroes <https://fullstackheroes.com/>
 */

withDefaults(
  defineProps<{
    title?: string;
    logo?: string;
  }>(),
  {
    title: 'title',
    logo: 'https://nuxt.com/assets/design-kit/logo-white.png',
  },
);
</script>

<template>
  <div
    :style="{
      backgroundImage: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
    }"
    class="flex h-full w-full items-start justify-start"
  >
    <div class="flex h-full items-start justify-start">
      <div class="flex h-full w-full flex-col justify-between p-20">
        <img :src="logo" height="50" />
        <h1 class="text-left text-[60px] font-bold text-white">
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>
