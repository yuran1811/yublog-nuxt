<script setup lang="ts">
import { DefaultDateFormat } from '@/constants';

const { data: posts, status } = await useAsyncData('blog-series-all', () =>
  queryCollection('blog')
    .select('title', 'date', 'series', 'path', 'lang')
    .order('date', 'DESC')
    .all(),
);

const allSeries = computed(() => {
  const allSeriesSet = new Set<string>();
  const seriesMap = new Map<string, string[]>();

  posts.value?.forEach((post) => {
    post.series?.forEach((_) => {
      allSeriesSet.add(_);

      if (!seriesMap.has(_)) seriesMap.set(_, []);
      seriesMap.get(_)?.push({ ...post });
    });
  });

  const series = Array.from(allSeriesSet).sort();

  return {
    series,
    seriesMap,
    items: series.map((_) => ({ label: _ })),
  };
});

const breadCrumbItems = ref([
  { label: 'Home', icon: 'lucide:house', to: '/' },
  { label: 'Blog', icon: 'lucide:book-open', to: '/blog' },
  {
    label: 'Series',
    icon: 'lucide:gallery-horizontal-end',
    to: '/blog/series',
  },
  { label: 'all', icon: 'lucide:rectangle-vertical' },
]);

useSeoMeta({
  title: `all series`,
  description: `yublog - all series`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <article
    class="bg-default text-default max-xs:min-h-[calc(100dvh-72px-72px-136px)] mx-auto min-h-[calc(100dvh-88px-88px-48px)] max-w-2xl space-y-6 px-6 pt-8 pb-24 md:space-y-12"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

    <h2 class="text-center text-2xl font-bold">{{ $t('all series') }}</h2>
    <div
      v-if="status === 'success'"
      class="container mx-auto flex flex-wrap items-start justify-center gap-4"
    >
      <UAccordion :items="allSeries.items">
        <template #default="{ item: { label: _ } }">
          <div class="flex items-center justify-start">
            <span class="font-bold">{{ _ }}</span>
            <Icon name="lucide:dot" class="text-toned size-6" />
            <span class="text-muted">
              {{ allSeries.seriesMap.get(_)!.length }}
              {{
                $t(allSeries.seriesMap.get(_)!.length > 1 ? 'posts' : 'post')
              }}
            </span>
          </div>
        </template>

        <template #content="{ item: { label: _ } }">
          <ul class="space-y-2">
            <template
              v-for="item in allSeries.seriesMap.get(_)!"
              :key="item.path"
            >
              <li
                class="hover:bg-accented/40 rounded-md px-2 py-1 transition-colors"
              >
                <NuxtLink
                  :to="item.path"
                  class="flex w-full items-center justify-between"
                >
                  <div
                    class="flex w-2/3 items-center justify-start max-sm:w-full"
                  >
                    <Icon
                      v-if="!!item.lang && item.lang.includes('vi')"
                      name="local:flag-vi"
                      class="mr-2 size-4 min-w-4"
                    />
                    <Icon
                      v-if="!item.lang || item.lang.includes('en')"
                      name="local:flag-en"
                      class="mr-2 size-4 min-w-4"
                    />

                    <p class="line-clamp-1 text-left">
                      {{ item.title }}
                    </p>
                  </div>

                  <span class="text-right text-sm text-gray-400 max-sm:hidden">
                    {{
                      useDateFormat(item.date || new Date(), DefaultDateFormat)
                    }}
                  </span>
                </NuxtLink>
              </li>
            </template>
          </ul>
        </template>
      </UAccordion>
    </div>
    <div v-else-if="status === 'pending'">
      <UProgress
        modal-value=""
        class="mx-auto h-1 w-full max-w-42 [&>div>div]:!animate-[carousel_1s_ease-in-out_infinite]"
      />
    </div>
    <div v-else-if="status === 'error'">
      <p class="text-center text-red-500">{{ $t('error') }}</p>
    </div>
  </article>
</template>
