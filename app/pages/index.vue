<script setup lang="ts">
definePageMeta({
  layout: 'home',
  description: 'yublog home page',
});

const { app } = useAppConfig();

const { status: loadPosts, data: latestPostsData } = await useLazyFetch(
  '/api/latest-posts?limit=6',
);
const { status: loadNotes, data: latestNotesData } = await useLazyFetch(
  '/api/latest-notes?limit=6',
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
  <UContainer class="relative h-screen overflow-hidden">
    <section class="no-scrollbar mt-22 h-[calc(100dvh-10rem)] overflow-y-auto">
      <div class="pt-12 pb-24">
        <SvgoLogo
          :filled="true"
          :font-controlled="false"
          class="mx-auto size-16 sm:size-24"
        />
        <p class="text-center text-3xl font-black tracking-wide">yublog</p>
      </div>

      <div class="mt-12 flex w-full flex-col items-center justify-start gap-16">
        <div class="container mx-auto">
          <p class="text-center text-2xl font-semibold">Recent Posts</p>

          <USkeleton
            v-if="loadPosts === 'pending'"
            class="h-30 w-100 rounded-lg"
          />
          <PostList v-else :posts="posts" />
        </div>

        <div class="container mx-auto">
          <p class="text-center text-2xl font-semibold">Recent Notes</p>

          <USkeleton
            v-if="loadNotes === 'pending'"
            class="h-30 w-100 rounded-lg"
          />
          <NoteList v-else :notes="notes" />
        </div>
      </div>
    </section>

    <div class="absolute-center-h fixed bottom-6 text-sm">
      <div class="flex items-center gap-1 text-(--ui-text-muted)">
        <p class="text-sm">Made by</p>
        <ULink :to="app.repo" external target="_blank">
          {{ app.author }}
        </ULink>
      </div>
    </div>
  </UContainer>
</template>
