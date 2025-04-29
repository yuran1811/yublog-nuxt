<script setup lang="ts">
const { data: authors } = await useAsyncData(`blog-author-all`, () =>
  queryCollection('authors').select('name').order('name', 'ASC').all(),
);

const breadCrumbItems = ref([
  { label: 'Home', icon: 'lucide:house', to: '/' },
  { label: 'Blog', icon: 'lucide:book-open', to: '/blog' },
  { label: 'Author', icon: 'lucide:users-round', to: '/blog/authors' },
  { label: '@all', icon: 'lucide:user-round' },
]);

useSeoMeta({
  title: `all authors`,
  description: `yublog - all authors`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <article
    class="mx-auto max-w-2xl space-y-6 bg-(--ui-bg) px-6 pt-8 pb-24 text-(--ui-text) md:space-y-12"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

    <h2 class="text-center text-2xl font-bold">All authors</h2>
    <div
      class="container mx-auto flex flex-wrap items-start justify-center gap-4"
    >
      <template v-for="_ in authors" :key="_.name">
        <UButton
          :label="`@${_.name}`"
          :to="`/blog/authors/${_.name}`"
          color="neutral"
          variant="subtle"
        />
      </template>
    </div>
  </article>
</template>
