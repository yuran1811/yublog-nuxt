<script setup lang="ts">
const { data: posts, status } = await useAsyncData('blog-tag-all', () =>
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
    class="bg-default text-default max-xs:min-h-[calc(100dvh-72px-72px-136px)] mx-auto min-h-[calc(100dvh-88px-88px-48px)] max-w-2xl space-y-6 px-6 pt-8 pb-24 md:space-y-12"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

    <h2 class="text-center text-2xl font-bold">{{ $t('all tags') }}</h2>

    <div
      v-if="status === 'success'"
      class="container mx-auto flex flex-wrap items-start justify-center gap-4"
    >
      <template v-for="_ in allTags" :key="_">
        <FancyButton :to="`/blog/tags/${_}`" :label="`#${_}`" />
      </template>
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
