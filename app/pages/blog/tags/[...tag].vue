<script setup lang="ts">
import { useRouteParams } from '@vueuse/router';

const tags = useRouteParams('tag');
const tag = (tags.value || ['all'])[0];

const { data: rawPosts } = await useAsyncData('blog-tags', () =>
  queryCollection('blog')
    .select('title', 'date', 'tags', 'path')
    .order('date', 'DESC')
    .all(),
);

const posts = computed(() =>
  tags.value
    ? rawPosts.value?.filter((post) => post.tags?.includes(tag as string)) || []
    : rawPosts.value,
);

const allTags = computed(() => {
  const allTagsSet = new Set<string>();
  rawPosts.value?.forEach((post) => {
    post.tags?.forEach((tag) => allTagsSet.add(tag));
  });
  return Array.from(allTagsSet).sort();
});

const breadCrumbItems = ref([
  { label: 'Home', icon: 'lucide:house', to: '/' },
  { label: 'Blog', icon: 'lucide:book-open', to: '/blog' },
  { label: 'Tags', icon: 'lucide:tags', to: '/blog/tags' },
  { label: tag, icon: 'lucide:tag' },
]);

useSeoMeta({
  title: `#${tag}`,
  description: `yublog tags - ${tag}`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <article
    class="mx-auto max-w-2xl space-y-6 bg-(--ui-bg) px-6 pt-8 pb-24 text-(--ui-text) md:space-y-12"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />
    <div v-if="tags !== undefined" class="flex-center">
      <NuxtLink to="/blog/tags" class="group flex-center cursor-pointer gap-3">
        <div
          class="inline-flex items-center rounded-full bg-(--ui-bg-elevated) p-1.5 ring ring-(--ui-border-accented) transition group-hover:-translate-x-0.5 group-hover:bg-(--ui-primary)/10 group-hover:ring-(--ui-primary)/50"
        >
          <Icon
            name="lucide:arrow-left"
            class="size-3.5 shrink-0 text-(--ui-text-highlighted) transition-[color,translate] group-hover:text-(--ui-primary) group-active:-translate-x-0.5"
          />
        </div>

        <span class="text-lg">See all tags</span>
      </NuxtLink>
    </div>

    <template v-if="tags === undefined">
      <h2 class="text-center text-2xl font-bold">All tags</h2>
      <div
        class="container mx-auto flex flex-wrap items-start justify-center gap-4"
      >
        <template v-for="_ in allTags" :key="_">
          <UButton
            :label="`#${_}`"
            :to="`/blog/tags/${_}`"
            color="neutral"
            variant="subtle"
          />
        </template>
      </div>
    </template>

    <template v-if="tags?.length === 1">
      <h2 class="text-center text-2xl font-bold">#{{ tag }}</h2>
      <PostList :posts="posts" />
    </template>
  </article>
</template>
