<script setup lang="ts">
import { DefaultDateFormat } from '@/constants';
import { parseAuthorData } from '@/shared/utils';
import { useRouteParams } from '@vueuse/router';

const slug = useRouteParams('slug');

const { data: post } = await useAsyncData(`blog-${slug.value}`, () =>
  queryCollection('blog').path(`/blog/${slug.value}`).first(),
);

const postData = computed(() => ({
  title: post.value?.title || 'Untitled',
  author: post.value?.author || 'anonymous',
  date: post.value?.date || new Date(),
  tags: post.value?.tags || [],
  desc: post.value?.description || 'No description available',
}));

const { data: authorData } = await useAsyncData(
  `blog-author-${postData.value.author}`,
  () =>
    queryCollection('authors')
      .where('name', '=', postData.value.author)
      .first(),
);

const { data: relatedPosts } = await useAsyncData(
  `blog-${slug.value}-surround`,
  () =>
    queryCollectionItemSurroundings('blog', `/blog/${slug.value}`, {
      fields: ['title', 'description'],
    }),
);

const tocLinks = computed(() => post.value?.body?.toc?.links || []);

const breadCrumbItems = ref([
  { label: 'Home', icon: 'lucide:house', to: '/' },
  { label: 'Blog', icon: 'lucide:book-open', to: '/blog' },
  {
    label: post.value?.title ? post.value.title : 'Post',
    icon: 'lucide:file',
  },
]);

useSeoMeta(post.value?.seo || {});
useHead(post.value?.head || {});
defineOgImageComponent('Nuxt', post.value?.ogImage);
</script>

<template>
  <article
    class="relative mx-auto max-w-2xl space-y-12 bg-(--ui-bg) px-6 pt-8 pb-24 text-(--ui-text)"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

    <div class="mx-auto w-full space-y-4 text-center">
      <p class="text-xs font-semibold tracking-wider uppercase">
        <template v-for="tag in postData.tags" :key="tag">
          <NuxtLink
            :to="`/blog/tags/${tag}`"
            class="inline-block rounded-md bg-(--ui-bg) px-2 py-1 text-xs font-semibold tracking-wider text-(--ui-text-muted) lowercase hover:text-(--ui-text)"
          >
            #{{ tag }}
          </NuxtLink>
        </template>
      </p>

      <h1 class="text-4xl leading-tight font-bold md:text-5xl">
        {{ postData.title }}
      </h1>

      <p class="text-sm text-(--ui-text-muted)">
        by
        <NuxtLink
          :to="`/blog/authors/${postData.author}`"
          class="text-violet-400 underline"
        >
          <span itemprop="name">{{ postData.author }}</span>
        </NuxtLink>
        on
        <time datetime="2021-02-12 15:34:18-0200">{{
          useDateFormat(postData.date, DefaultDateFormat).value
        }}</time>
      </p>
    </div>

    <AuthorInfo :author="parseAuthorData(authorData)" />

    <div>
      <TOC :tocs="tocLinks" />

      <ContentRenderer
        v-if="post"
        class="prose prose-invert container mx-auto"
        :prose="true"
        :value="post"
      />
      <div v-else>
        <p class="p-4 text-center font-bold">Post not found.</p>
      </div>
    </div>

    <SurroundPosts
      v-if="relatedPosts"
      :left="relatedPosts[0]"
      :right="relatedPosts[1]"
    />
  </article>
</template>
