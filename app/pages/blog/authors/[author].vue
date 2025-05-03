<script setup lang="ts">
import { parseAuthorData } from '@/shared/utils';
import { useRouteParams } from '@vueuse/router';

const author = useRouteParams('author');

const { data: authorData } = await useAsyncData(
  `blog-author-${author.value}`,
  () => queryCollection('authors').where('name', '=', author.value).first(),
);

const { data: posts } = await useAsyncData(
  `blog-author-${author.value}-posts`,
  () =>
    queryCollection('blog')
      .select('title', 'date', 'tags', 'lang', 'path', 'author')
      .where('author', '=', author.value)
      .order('date', 'DESC')
      .all(),
);

const breadCrumbItems = ref([
  { label: 'Home', icon: 'lucide:house', to: '/' },
  { label: 'Blog', icon: 'lucide:book-open', to: '/blog' },
  { label: 'Author', icon: 'lucide:users-round', to: '/blog/authors' },
  { label: `@${author.value}`, icon: 'lucide:user-round' },
]);

useSeoMeta({
  title: `@${author.value}`,
  description: `yublog author - posts written by ${author.value}`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <article
    class="bg-default text-default mx-auto max-w-2xl space-y-6 px-6 pt-8 pb-24 md:space-y-12"
  >
    <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />
    <div class="flex-center">
      <NuxtLink
        to="/blog/authors"
        class="group flex-center cursor-pointer gap-3"
      >
        <div
          class="bg-elevated group-hover:bg-primary/10 group-hover:ring-primary/50 inline-flex items-center rounded-full p-1.5 ring ring-(--ui-border-accented) transition group-hover:-translate-x-0.5"
        >
          <Icon
            name="lucide:arrow-left"
            class="text-highlighted group-hover:text-primary size-3.5 shrink-0 transition-[color,translate] group-active:-translate-x-0.5"
          />
        </div>

        <span class="text-lg">{{ $t('See all authors') }}</span>
      </NuxtLink>
    </div>

    <template v-if="authorData">
      <AuthorInfo :author="parseAuthorData(authorData)" />
      <PostList :posts="posts" />
    </template>
    <template v-else>
      <p class="text-center text-xl">
        <span class="font-bold underline">@{{ author }} </span>
        {{ $t('not found') }}
      </p>
    </template>
  </article>
</template>
