<script setup lang="ts">
definePageMeta({
  name: 'Ecosystem',
  icon: 'lucide:layers-2',
  description: 'Explore the ecosystem of yuran core',
});

useSeoMeta({
  title: 'ecosystem',
  description: `Explore the ecosystem of yuran core`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <LayoutDefault>
    <section class="space-y-12">
      <GlowGrid
        :list="[
          {
            title: 'yuran1811',
            description: '(WIP) yuran1811\'s portfolio website.',
            color: '#10B981',
            fgClass: 'text-green-500',
            bgClass: 'bg-green-500/20',
            icon: 'local:nuxt-green',
            // link: 'https://yublog-nuxt.vercel.app',
          },
          {
            title: 'yumelody',
            description:
              '(WIP) A sharing site that provides free music sheets/tabs for guitar, flute, and piano.',
            color: '#F59E0B',
            fgClass: 'text-yellow-500',
            bgClass: 'bg-yellow-500/20',
            icon: 'lucide:package',
            // link: 'https://yublog-nuxt.vercel.app',
          },
        ]"
      >
        <div class="flex-center-col mx-auto mb-4 gap-6 md:mb-8">
          <h2 class="text-center text-2xl font-black sm:text-4xl md:text-5xl">
            yuran1811
          </h2>
        </div>
      </GlowGrid>
    </section>

    <CursorDot />
  </LayoutDefault>
</template>
