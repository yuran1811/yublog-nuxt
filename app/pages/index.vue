<script setup lang="ts">
definePageMeta({
  description: 'yublog home page',
});

const { app } = useAppConfig();

const { status: loadPosts, data: latestPostsData } = await useLazyFetch(
  '/api/latest/blog?limit=6',
);
const { status: loadNotes, data: latestNotesData } = await useLazyFetch(
  '/api/latest/notes?limit=6',
);

const posts = ref<any[]>([...(latestPostsData.value || [])]);
const notes = ref<any[]>([...(latestNotesData.value || [])]);

watch(latestPostsData, (_: any) => {
  posts.value = [...(_ || [])];
});
watch(latestNotesData, (_: any) => {
  notes.value = [...(_ || [])];
});

useSeoMeta({
  title: 'home',
  description: `Hi there! I'm ${app.author}, a software engineer and open source enthusiast. I love to share my knowledge, experience, my life, and the things I love. I hope you find something that resonates with you.`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <div class="relative">
    <div class="my-16 sm:my-24">
      <RippleLogo class="mx-auto mb-4 sm:mb-8" />
      <p class="text-center text-2xl font-black tracking-wide sm:text-3xl">
        yublog
      </p>
    </div>

    <div
      class="mt-4 flex w-full flex-col items-center justify-start gap-16 md:mt-12 md:gap-20"
    >
      <div class="container mx-auto">
        <p class="text-center text-2xl font-semibold">
          {{ $t('recent posts') }}
        </p>

        <PostsSkeleton v-if="loadPosts === 'pending'" />
        <PostList v-else :posts="posts" />

        <div class="flex-center mx-auto mt-2 **:text-lg">
          <FancyButton to="/blog" :label="$t('See all posts')" />
        </div>
      </div>

      <div class="container mx-auto">
        <p class="text-center text-2xl font-semibold">
          {{ $t('recent notes') }}
        </p>

        <PostsSkeleton v-if="loadNotes === 'pending'" />
        <NoteList v-else :notes="notes" />

        <div class="flex-center mx-auto mt-2 **:text-lg">
          <FancyButton to="/notes" :label="$t('See all notes')" />
        </div>
      </div>
    </div>
  </div>
</template>
