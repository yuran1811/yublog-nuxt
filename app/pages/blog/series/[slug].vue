<script setup lang="ts">
import { useRouteParams } from '@vueuse/router';

const serie = useRouteParams('slug');

const { data: posts } = await useAsyncData(`blog-serie-${serie.value}`, () =>
  queryCollection('blog')
    .select('title', 'date', 'tags', 'lang', 'path')
    .where('tags', 'LIKE', `%"${serie.value}"%`)
    .order('date', 'DESC')
    .all(),
);

const breadCrumbItems = ref([
  { label: 'Home', icon: 'lucide:house', to: '/' },
  { label: 'Blog', icon: 'lucide:book-open', to: '/blog' },
  { label: 'Series', icon: 'lucide:gallery-horizontal-end', to: '/blog/series' },
  { label: `${serie.value}`, icon: 'lucide:rectangle-vertical' },
]);

useSeoMeta({
  title: `${serie.value}`,
  description: `yublog series - posts in ${serie.value}`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <article
    class="bg-default text-default mx-auto max-w-2xl space-y-6 px-6 pt-8 pb-24 md:space-y-12"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

    <div class="flex-center">
      <NuxtLink to="/blog/series" class="group flex-center cursor-pointer gap-3">
        <div
          class="bg-elevated group-hover:bg-primary/10 group-hover:ring-primary/50 inline-flex items-center rounded-full p-1.5 ring ring-(--ui-border-accented) transition group-hover:-translate-x-0.5"
        >
          <Icon
            name="lucide:arrow-left"
            class="text-highlighted group-hover:text-primary size-3.5 shrink-0 transition-[color,translate] group-active:-translate-x-0.5"
          />
        </div>

        <span class="text-lg">{{ $t('See all series') }}</span>
      </NuxtLink>
    </div>

    <h2 class="text-center text-2xl font-bold">{{ serie }}</h2>
    <PostList :posts="posts" />
  </article>
</template>
