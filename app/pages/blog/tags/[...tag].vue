<script setup lang="ts">
import { useRouteParams } from '@vueuse/router';

const tags = useRouteParams('tag');
const tag = (tags.value || ['all'])[0];

useSeoMeta({
  title: `#${tag}`,
  description: `yublog tags - ${tag}`,
});

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
</script>

<template>
  <article
    class="mx-auto max-w-2xl space-y-12 bg-(--ui-bg) px-6 pt-8 pb-24 text-(--ui-text)"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

    <template v-if="tags === undefined">
      <h2 class="text-center text-2xl font-bold">All tags</h2>
      <div
        class="container mx-auto flex flex-wrap items-start justify-center gap-4"
      >
        <template v-for="tag in allTags" :key="tag">
          <UButton
            :label="`#${tag}`"
            :to="`/blog/tags/${tag}`"
            color="neutral"
            variant="subtle"
          />
        </template>
      </div>
    </template>

    <PostList v-if="tags?.length === 1" :posts="posts" />
  </article>
</template>
