<script setup lang="ts">
import { parseAuthorData } from '@/shared/utils';
import { useRouteParams } from '@vueuse/router';

const rawAuthor = useRouteParams('author');
const author = (rawAuthor.value || ['all'])[0];

const { data: authorData } = await useAsyncData(`blog-author-${author}`, () =>
  rawAuthor.value
    ? queryCollection('authors').where('name', '=', author).all()
    : queryCollection('authors').order('name', 'ASC').all(),
);

const { data: rawPosts } = await useAsyncData(`blog-authors-posts`, () =>
  queryCollection('blog')
    .select('title', 'date', 'tags', 'path', 'author')
    .order('date', 'DESC')
    .all(),
);

const posts = computed(() =>
  rawAuthor.value
    ? rawPosts.value?.filter((post) => post.author === author) || []
    : rawPosts.value,
);

const breadCrumbItems = ref([
  { label: 'Home', icon: 'lucide:house', to: '/' },
  { label: 'Blog', icon: 'lucide:book-open', to: '/blog' },
  { label: 'Author', icon: 'lucide:users-round', to: '/blog/authors' },
  {
    label: rawAuthor.value ? author : 'All authors',
    icon: 'lucide:user-round',
  },
]);

useSeoMeta({
  title: `@${author}`,
  description: `yublog author - ${author}`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <article
    class="mx-auto max-w-2xl space-y-6 bg-(--ui-bg) px-6 pt-8 pb-24 text-(--ui-text) md:space-y-12"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />
    <div
      v-if="rawAuthor !== undefined && authorData?.length === 1"
      class="flex-center"
    >
      <NuxtLink
        to="/blog/authors"
        class="group flex-center cursor-pointer gap-3"
      >
        <div
          class="inline-flex items-center rounded-full bg-(--ui-bg-elevated) p-1.5 ring ring-(--ui-border-accented) transition group-hover:-translate-x-0.5 group-hover:bg-(--ui-primary)/10 group-hover:ring-(--ui-primary)/50"
        >
          <Icon
            name="lucide:arrow-left"
            class="size-3.5 shrink-0 text-(--ui-text-highlighted) transition-[color,translate] group-hover:text-(--ui-primary) group-active:-translate-x-0.5"
          />
        </div>

        <span class="text-lg">See all authors</span>
      </NuxtLink>
    </div>

    <AuthorInfo
      v-if="authorData?.length === 1 && authorData?.at(0)"
      :author="parseAuthorData(authorData.at(0))"
    />

    <template v-if="authorData?.length && authorData.length > 1">
      <h2 class="text-center text-2xl font-bold">All authors</h2>
      <div
        class="container mx-auto flex flex-wrap items-start justify-center gap-4"
      >
        <template v-for="_ in authorData" :key="_.name">
          <UButton
            :label="`@${_.name}`"
            :to="`/blog/authors/${_.name}`"
            color="neutral"
            variant="subtle"
          />
        </template>
      </div>
    </template>

    <template v-if="rawAuthor !== undefined && authorData?.length === 1">
      <PostList :posts="posts" />
    </template>
  </article>
</template>
