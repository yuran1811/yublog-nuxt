<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content';
import { DefaultDateFormat } from '@/constants';

defineProps<{
  posts?: Pick<
    BlogCollectionItem,
    'title' | 'date' | 'path' | 'tags' | 'lang'
  >[];
}>();
</script>

<template>
  <div
    class="mx-auto grid max-w-220 auto-rows-fr grid-cols-1 justify-items-center-safe gap-8 py-6 md:grid-cols-2"
  >
    <template v-for="post in posts" :key="post.path">
      <article
        class="group border-accented/60 from-accented/20 to-accented/5 relative m-4 w-full max-w-105 cursor-pointer overflow-hidden rounded-lg border-1 bg-gradient-to-br shadow-lg transition-all hover:brightness-90"
      >
        <!-- Lang -->
        <div
          class="absolute top-2 right-4 left-4 z-10 flex h-10 items-center justify-end"
        >
          <span class="bg-warning absolute size-6 rounded-full blur-2xl" />
          <Icon
            v-if="!!post.lang && post.lang.includes('vi')"
            name="local:flag-vi"
            class="absolute size-6"
          />
          <Icon
            v-if="!post.lang || post.lang.includes('en')"
            name="local:flag-en"
            class="absolute size-6"
          />
        </div>

        <div
          class="relative flex h-[calc(100%-2px)] flex-col items-start justify-end overflow-hidden rounded-[10px] p-4 !pt-18 sm:p-6"
        >
          <!-- Datetime -->
          <p class="block text-xs text-gray-400">
            {{ useDateFormat(post.date || new Date(), DefaultDateFormat) }}
          </p>

          <!-- Title -->
          <NuxtLink
            :to="post.path"
            class="mt-0.5 line-clamp-2 text-lg font-medium text-white"
          >
            {{ post.title || 'Untitled' }}
          </NuxtLink>

          <!-- Tags -->
          <div class="mt-4 flex flex-wrap gap-1">
            <template v-for="tag in post.tags || []" :key="tag">
              <NuxtLink :to="`/blog/tags/${tag}`">
                <UBadge
                  class="text-toned rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap transition-transform hover:scale-105"
                  variant="outline"
                  color="neutral"
                >
                  #{{ tag }}
                </UBadge>
              </NuxtLink>
            </template>
          </div>
        </div>

        <div
          class="via-primary absolute bottom-0 m-auto h-2 w-full rounded bg-gradient-to-l blur-2xl transition-all group-hover:blur-xl"
        />
        <div
          class="group-hover:via-primary via-primary-950 m-auto h-0.5 w-[70%] rounded bg-gradient-to-l transition-all group-hover:w-full"
        />
      </article>
    </template>

    <div v-if="posts?.length === 0" class="col-span-full">
      <p class="text-center">No posts found.</p>
    </div>
  </div>
</template>
