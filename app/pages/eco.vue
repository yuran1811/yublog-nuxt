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
    <section class="hidden space-y-12">
      <GlowGrid
        :list="[
          {
            title: 'yuran1811',
            description: '(WIP) yuran1811\'s portfolio website.',
            color: '#00a6f4',
            fgClass: 'text-sky-500',
            bgClass: 'bg-sky-500/20',
            icon: 'lucide:user-round',
          },
          {
            title: 'yublog-nuxt',
            description: 'yuran1811\'s blog built with Nuxt3.',
            color: '#10B981',
            fgClass: 'text-green-500',
            bgClass: 'bg-green-500/20',
            icon: 'local:logo',
            link: 'https://yublog-nuxt.vercel.app',
          },
          {
            title: 'yumelody',
            description:
              '(WIP) A sharing site that provides free music sheets/tabs for guitar, flute, and piano.',
            color: '#ff2056',
            fgClass: 'text-rose-500',
            bgClass: 'bg-rose-500/20',
            icon: 'lucide:music-2',
          },
        ]"
      >
        <div class="flex-center-col mx-auto my-2 gap-6 md:mb-6">
          <p
            class="flex-center-col gap-2 text-center text-2xl sm:text-4xl md:text-5xl"
          >
            <span class="font-bold"> yuran1811's </span>
            <span class="aurora-text"> products </span>
          </p>
        </div>
      </GlowGrid>
    </section>

    <section class="space-y-12 md:space-y-22">
      <p
        class="flex-center-col mx-auto gap-2 text-center text-2xl sm:text-3xl md:text-4xl"
      >
        <span class="font-bold"> yuran1811's </span>
        <span class="aurora-text"> products </span>
      </p>

      <ProjectList />
    </section>

    <LazyCursorFluid :hydrate-after="1500" />
  </LayoutDefault>
</template>
