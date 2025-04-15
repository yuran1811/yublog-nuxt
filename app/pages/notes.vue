<script setup lang="ts">
useSeoMeta({
  title: 'notes',
  description: `yublog's notes page`,
});
</script>

<template>
  <LayoutDefault>
    <section class="space-y-12 pb-24">
      <div class="flex-center-col mx-auto mb-8 gap-6">
        <h2 class="text-center text-2xl font-bold sm:text-4xl md:text-6xl">
          Notes
        </h2>
        <p class="mx-auto text-center text-base sm:text-lg md:text-xl">
          My notes for the things I learn and want to remember.
        </p>
      </div>
    </section>
  </LayoutDefault>
</template>
