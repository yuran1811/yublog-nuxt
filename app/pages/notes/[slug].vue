<script setup lang="ts">
import { DefaultDateFormat } from '@/constants';
import { parseAuthorData } from '@/shared/utils';
import { useRouteParams } from '@vueuse/router';

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
    class="bg-default text-default relative mx-auto max-w-2xl space-y-12 px-6 pt-8 pb-24"
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
      <p class="text-xs font-semibold tracking-wider uppercase">
        <template v-for="tag in noteData.tags" :key="tag">
          <span
            class="bg-default hover:text-default text-muted inline-block rounded-md px-2 py-1 text-xs font-semibold tracking-wider lowercase"
          >
            #{{ tag }}
          </span>
        </template>
      </p>

      <h1 class="text-4xl leading-tight font-bold md:text-5xl">
        {{ noteData.title }}
      </h1>

      <p class="text-toned">
        by
        <span itemprop="name" class="text-violet-400">{{
          noteData.author
        }}</span>
        on
        <time datetime="2021-02-12 15:34:18-0200">{{
          useDateFormat(noteData.date, DefaultDateFormat).value
        }}</time>
      </p>
    </div>

    <AuthorInfo :author="parseAuthorData(authorData)" />

    <div>
      <TOC :tocs="tocLinks" />

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
