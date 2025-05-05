<script setup lang="ts">
const { app } = useAppConfig();

useSeoMeta({
  title: 'about',
  description: `Hi there! I'm ${app.author}, a software engineer and open source enthusiast. I love to share my knowledge, experience, my life, and the things I love. I hope you find something that resonates with you.`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <LayoutDefault>
    <LazyArtPlum :hydrate-after="1500" />
    <!-- <DesignTopBlob class="hidden lg:block" />
    <DesignBottomBlob class="hidden lg:block" /> -->

    <section class="space-y-12">
      <GlowGrid
        :list="[
          {
            title: '@nuxtjs/seo',
            description:
              'Nuxt SEO is a collection of modules that handle all of the technical aspects in growing your sites organic traffic.',
            color: '#10B981',
            fgClass: 'text-green-500',
            bgClass: 'bg-green-500/20',
            icon: 'local:nuxt-green',
          },
          {
            title: '@nuxtjs/i18n',
            description:
              'I18n (Internationalization) module for your Nuxt project powered by Vue I18n.',
            color: '#10B981',
            fgClass: 'text-green-500',
            bgClass: 'bg-green-500/20',
            icon: 'local:nuxt-green',
          },
          {
            title: '@nuxt/content',
            description:
              'Nuxt Content is a module for Nuxt that provides a simple way to manage content for your application.',
            color: '#10B981',
            fgClass: 'text-green-500',
            bgClass: 'bg-green-500/20',
            icon: 'local:nuxt-green',
          },
          {
            title: '@nuxt/image',
            description: 'Plug-and-play image optimization for Nuxt apps.',
            color: '#10B981',
            fgClass: 'text-green-500',
            bgClass: 'bg-green-500/20',
            icon: 'local:nuxt-green',
          },
          {
            title: '@nuxt/ui',
            description:
              'Create beautiful, responsive & accessible web apps quickly with Vue or Nuxt. ',
            color: '#10B981',
            fgClass: 'text-green-500',
            bgClass: 'bg-green-500/20',
            icon: 'local:nuxt-green',
          },
          {
            title: '@pinia/nuxt',
            description:
              'Type Safe, Extensible, and Modular by design. Forget you are even using a store.',
            color: '#F59E0B',
            fgClass: 'text-yellow-500',
            bgClass: 'bg-yellow-500/20',
            icon: 'lucide:package',
          },
        ]"
      >
        <div class="flex-center-col mx-auto my-4 gap-6">
          <h2 class="text-center text-2xl font-black sm:text-4xl md:text-5xl">
            yublog
          </h2>
          <p class="mx-auto text-center text-base sm:text-lg">
            <span> yuran1811's personal blog </span>
            <br />
            <span> built with Nuxt 3, deployed on Vercel. </span>
          </p>
        </div>
      </GlowGrid>
    </section>

    <Dock />
    <LazyCursorDot :hydrate-after="1500" />
  </LayoutDefault>
</template>
