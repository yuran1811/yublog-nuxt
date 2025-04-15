<script setup lang="ts">
useSeoMeta({
  title: 'about',
  description: `yublog's about page`,
});
</script>

<template>
  <LayoutDefault>
    <section class="space-y-12 pb-24">
      <GlowGrid>
        <div class="flex-center-col mx-auto mb-8 gap-6">
          <h2 class="text-center text-2xl font-bold sm:text-4xl md:text-6xl">
            yublog
          </h2>
          <p class="mx-auto text-center text-base sm:text-lg md:text-xl">
            yuran1811's personal blog, built with Nuxt 3.
          </p>
        </div>
      </GlowGrid>
    </section>

    <Dock />
  </LayoutDefault>
</template>
