<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    borderColor?: string;
  }>(),
  {
    title: 'title',
    borderColor: 'blue-500',
  },
);
</script>

<template>
  <div
    :class="[`border-${borderColor}`]"
    class="flex h-full w-full items-start justify-start border-[12px] border-solid bg-gray-50"
  >
    <div class="flex h-full items-start justify-start">
      <div class="flex h-full w-full flex-col justify-between">
        <h1 class="p-20 text-left text-[80px] font-black">
          {{ title }}
        </h1>
        <p class="mb-0 px-20 pb-10 text-2xl font-bold">yublog-nuxt.vercel.app</p>
      </div>
    </div>
  </div>
</template>
