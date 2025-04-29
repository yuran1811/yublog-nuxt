<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-tag-all', () =>
  queryCollection('blog')
    .select('title', 'date', 'tags', 'path')
    .order('date', 'DESC')
    .all(),
);

const allTags = computed(() => {
  const allTagsSet = new Set<string>();
  posts.value?.forEach((post) => {
    post.tags?.forEach((tag) => allTagsSet.add(tag));
  });
  return Array.from(allTagsSet).sort();
});

const breadCrumbItems = ref([
  { label: 'Home', icon: 'lucide:house', to: '/' },
  { label: 'Blog', icon: 'lucide:book-open', to: '/blog' },
  { label: 'Tags', icon: 'lucide:tags', to: '/blog/tags' },
  { label: '#all', icon: 'lucide:tag' },
]);

useSeoMeta({
  title: `all tags`,
  description: `yublog - all tags`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <article
    class="mx-auto max-w-2xl space-y-6 bg-(--ui-bg) px-6 pt-8 pb-24 text-(--ui-text) md:space-y-12"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

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
  </article>
</template>
