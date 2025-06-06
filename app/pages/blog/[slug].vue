<script setup lang="ts">
import { useRouteParams } from '@vueuse/router';
import { estimateReadingTime, parseAuthorData } from '@/shared/utils';

const { y } = useWindowScroll();
const { height } = useWindowSize();
const isHighEnough = useMediaQuery('(min-height: 500px)');
const scrollObserve = useTemplateRef<HTMLElement>('scrollObserve');

const slug = useRouteParams('slug');

const { data: post } = await useAsyncData(`blog-post-${slug.value}`, () =>
  queryCollection('blog').path(`/blog/${slug.value}`).first(),
);

const postData = computed(() => ({
  title: post.value?.title || 'Untitled',
  author: post.value?.author || 'anonymous',
  date: post.value?.date || new Date(),
  tags: post.value?.tags || [],
  series: post.value?.series || [],
  desc: post.value?.description || 'No description available',
  image: post.value?.image || '',
}));

const { data: authorData } = await useAsyncData(
  `blog-author-${postData.value.author}-post`,
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

const { words, minutes } = estimateReadingTime(post.value?.rawbody || '');

const tocLinks = computed(() => post.value?.body?.toc?.links || []);

const breadCrumbItems = ref([
  { label: 'Home', icon: 'lucide:house', to: '/' },
  { label: 'Blog', icon: 'lucide:book-open', to: '/blog' },
  { label: post.value?.title ?? 'Post', icon: 'lucide:file' },
]);

useSeoMeta(post.value?.seo || {});
useHead(post.value?.head || {});
defineOgImageComponent('Nuxt', post.value?.ogImage);
</script>

<template>
  <article v-if="post">
    <div
      ref="scrollObserve"
      class="bg-default text-default relative mx-auto max-w-2xl space-y-12 px-6"
    >
      <UBreadcrumb :items="breadCrumbItems" class="max-md:hidden" />

      <NuxtImg
        v-slot="{ src, isLoaded, imgAttrs }"
        :src="postData.image"
        :alt="`${postData.title} cover image`"
        :title="`${postData.title} cover image`"
        sizes="100vw sm:64vw md:480px"
        fit="contain"
        class="mx-auto"
        :custom="true"
      >
        <img v-if="isLoaded" v-bind="imgAttrs" :src="src" />
        <USkeleton
          v-else
          class="w-100vw sm:w-64vw mx-auto aspect-video md:w-[480px]"
        />
      </NuxtImg>

      <div class="mx-auto w-full space-y-4 text-center">
        <div class="text-xs font-semibold tracking-wider uppercase">
          <template v-for="tag in postData.tags" :key="tag">
            <NuxtLink
              :to="`/blog/tags/${tag}`"
              class="bg-default hover:text-default text-muted inline-block rounded-md px-2 py-1 text-xs font-semibold tracking-wider lowercase"
            >
              #{{ tag }}
            </NuxtLink>
          </template>
        </div>

        <h1 class="text-2xl leading-tight font-bold md:text-4xl lg:text-5xl">
          {{ postData.title }}
        </h1>

        <p class="text-toned">
          by
          <NuxtLink
            :to="`/blog/authors/${postData.author}`"
            class="text-violet-400 underline"
          >
            <span itemprop="name">{{ postData.author }}</span>
          </NuxtLink>
          on
          <time>{{ formatDate(postData.date) }}</time>
        </p>

        <p class="text-muted text-sm">
          <span class="inline-flex items-center gap-1">
            <Icon name="lucide:a-large-small" class="inline-block size-4" />
            {{ `${words} ${$t('words')},` }}
          </span>
          <span class="ml-1 inline-flex items-center gap-1">
            <Icon name="lucide:clock" class="inline-block size-4" />
            {{ `${minutes} ${$t('min read')}` }}
          </span>
        </p>

        <div
          v-if="postData.series.length > 0"
          class="mt-10 flex w-full items-center justify-center"
        >
          <div class="flex items-center gap-2">
            <Icon name="lucide:book-open" class="size-4" />
            <span class="text-sm font-semibold">In series:</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <template v-for="seri in postData.series" :key="seri">
              <NuxtLink
                :to="`/blog/series/${seri}`"
                class="bg-default hover:text-default text-toned inline-block rounded-md px-2 py-1 text-xs font-semibold tracking-wider lowercase"
              >
                {{ seri }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>

      <AuthorInfo :author="parseAuthorData(authorData)" />

      <div>
        <TOC :tocs="tocLinks" />

        <UProgress
          data-allow-mismatch="class"
          :model-value="
            Math.min(
              100,
              Math.max(
                0,
                100 *
                  (y /
                    ((scrollObserve?.offsetHeight ?? 1) +
                      (scrollObserve?.offsetTop ?? 0) -
                      230 -
                      height)),
              ),
            )
          "
          orientation="vertical"
          class="after:via-primary fixed top-1/2 right-2.5 z-50 h-full max-h-[calc(100dvh-60%)] w-1 -translate-x-9 -translate-y-1/2 transition after:absolute after:inset-0 after:h-full after:w-3 after:origin-center after:scale-0 after:rounded after:bg-gradient-to-b after:blur-2xl after:transition-all after:content-[''] max-md:hidden xl:right-1/5"
          :class="{
            hidden: !isHighEnough,
            '!h-0': !y,
            'after:scale-100':
              y /
                ((scrollObserve?.offsetHeight ?? 1) +
                  (scrollObserve?.offsetTop ?? 0) -
                  230 -
                  height) >=
              1,
          }"
          :color="
            y /
              ((scrollObserve?.offsetHeight ?? 1) +
                (scrollObserve?.offsetTop ?? 0) -
                230 -
                height) >=
            1
              ? 'primary'
              : 'neutral'
          "
        />

        <ContentRenderer
          class="prose prose-invert container mx-auto"
          :prose="true"
          :value="post"
        />
      </div>

      <SurroundPosts
        v-if="relatedPosts"
        :left="relatedPosts[0]"
        :right="relatedPosts[1]"
      />
    </div>

    <ToTop />
  </article>
  <div
    v-else
    class="max-xs:min-h-[calc(100dvh-72px-72px-136px)] mx-auto min-h-[calc(100dvh-88px-88px-48px)] py-12"
  >
    <p class="p-4 text-center text-2xl font-bold">
      {{ $t('Post not found.') }}
    </p>

    <div class="flex-center mx-auto mt-2">
      <FancyButton to="/blog" :label="$t('See all posts')" />
    </div>
  </div>
</template>
