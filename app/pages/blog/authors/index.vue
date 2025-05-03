<script setup lang="ts">
const { data: authors, status } = await useAsyncData(`blog-author-all`, () =>
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
    class="bg-default text-default max-xs:min-h-[calc(100dvh-72px-72px-136px)] mx-auto min-h-[calc(100dvh-88px-88px-48px)] max-w-2xl space-y-6 px-6 pt-8 pb-24 md:space-y-12"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

    <h2 class="text-center text-2xl font-bold">{{ $t('all authors') }}</h2>
    <div
      v-if="status === 'success'"
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
