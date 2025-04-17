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
    class="mx-auto max-w-2xl space-y-8 bg-(--ui-bg) px-6 pt-8 pb-24 text-(--ui-text)"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

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

    <PostList v-if="rawAuthor !== undefined" :posts="posts" />
  </article>
</template>
