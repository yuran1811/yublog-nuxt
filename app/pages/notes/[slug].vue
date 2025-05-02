<script setup lang="ts">
import { DefaultDateFormat } from '@/constants';
import { estimateReadingTime, parseAuthorData } from '@/shared/utils';
import { useRouteParams } from '@vueuse/router';

const { y } = useWindowScroll();
const { height } = useWindowSize();
const isHighEnough = useMediaQuery('(min-height: 500px)');
const scrollObserve = useTemplateRef<HTMLElement>('scrollObserve');

const slug = useRouteParams('slug');

const { data: note } = await useAsyncData(`note-${slug.value}`, () =>
  queryCollection('notes').path(`/notes/${slug.value}`).first(),
);

const noteData = computed(() => ({
  title: note.value?.title || 'Untitled',
  author: note.value?.author || 'anonymous',
  date: note.value?.date || new Date(),
  tags: note.value?.tags || [],
  desc: note.value?.description || 'No description available',
  image: note.value?.image || '',
}));

const { data: authorData } = await useAsyncData(
  `note-author-${noteData.value.author}`,
  () =>
    queryCollection('authors')
      .where('name', '=', noteData.value.author)
      .first(),
);

const { words, minutes } = estimateReadingTime(note.value?.rawbody || '');

const tocLinks = computed(() => note.value?.body?.toc?.links || []);

const breadCrumbItems = ref([
  { label: 'Home', icon: 'lucide:house', to: '/' },
  { label: 'Notes', icon: 'lucide:notebook-pen', to: '/notes' },
  {
    label: note.value?.title ? note.value.title : 'Note',
    icon: 'lucide:sticky-note',
  },
]);

useSeoMeta(note.value?.seo || {});
useHead(note.value?.head || {});
defineOgImageComponent('Nuxt', note.value?.ogImage);
</script>

<template>
  <article
    ref="scrollObserve"
    class="bg-default text-default relative mx-auto max-w-2xl space-y-12 px-6"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

    <NuxtImg
      :src="noteData.image"
      sizes="100vw sm:64vw md:480px"
      fit="contain"
      :title="`${noteData.title} cover image`"
      class="mx-auto"
    />

    <div class="mx-auto w-full space-y-4 text-center">
      <div class="text-xs font-semibold tracking-wider uppercase">
        <template v-for="tag in noteData.tags" :key="tag">
          <span
            class="bg-default hover:text-default text-muted inline-block rounded-md px-2 py-1 text-xs font-semibold tracking-wider lowercase"
          >
            #{{ tag }}
          </span>
        </template>
      </div>

      <h1 class="text-4xl leading-tight font-bold md:text-5xl">
        {{ noteData.title }}
      </h1>

      <p class="text-toned">
        by
        <NuxtLink
          :to="`/blog/authors/${noteData.author}`"
          class="text-violet-400 underline"
        >
          <span itemprop="name">{{ noteData.author }}</span>
        </NuxtLink>
        on
        <time>{{ useDateFormat(noteData.date, DefaultDateFormat).value }}</time>
      </p>

      <p class="text-muted text-sm">
        <span class="inline-flex items-center gap-1">
          <Icon name="lucide:a-large-small" class="inline-block size-4" />
          {{ `${words} ${$t('words')},` }}
        </span>
        <span class="ml-1 inline-flex items-center gap-1">
          <Icon name="lucide:clock" class="inline-block size-4" />
          {{ `${minutes} ${$t('min read')}` }}
        </span>
      </p>
    </div>

    <AuthorInfo :author="parseAuthorData(authorData)" />

    <div>
      <TOC :tocs="tocLinks" />

      <UProgress
        :model-value="
          Math.min(
            100,
            Math.max(
              0,
              100 *
                (y /
                  ((scrollObserve?.offsetHeight ?? 1) +
                    (scrollObserve?.offsetTop ?? 0) -
                    height)),
            ),
          )
        "
        orientation="vertical"
        class="max fixed top-1/2 right-2.5 z-50 h-full max-h-[calc(100dvh-60%)] w-1 -translate-x-9 -translate-y-1/2 transition max-md:hidden xl:right-1/5"
        :class="{
          hidden: !isHighEnough,
          '!h-0': !y,
        }"
        :color="
          y >=
          (scrollObserve?.offsetHeight ?? 0) +
            (scrollObserve?.offsetTop ?? 0) -
            height
            ? 'primary'
            : 'neutral'
        "
      />

      <ContentRenderer
        v-if="note"
        class="prose prose-invert container mx-auto"
        :prose="true"
        :value="note"
      />
      <div v-else>
        <p class="p-4 text-center font-bold">Note not found.</p>
      </div>
    </div>
  </article>
</template>
