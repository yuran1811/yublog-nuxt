<script setup lang="ts">
definePageMeta({
  layout: 'fixnav',
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
  <UContainer class="relative py-36">
    <div class="mb-20">
      <SvgoLogo
        :filled="true"
        :font-controlled="false"
        class="mx-auto size-16 sm:size-24"
      />
      <p class="text-center text-3xl font-black tracking-wide">yublog</p>
    </div>

    <main
      class="mt-4 flex w-full flex-col items-center justify-start gap-20 md:mt-12"
    >
      <div class="container mx-auto">
        <p class="text-center text-2xl font-semibold">
          {{ $t('recent posts') }}
        </p>

        <PostsSkeleton v-if="loadPosts === 'pending'" />
        <PostList v-else :posts="posts" />
      </div>

      <div class="container mx-auto">
        <p class="text-center text-2xl font-semibold">
          {{ $t('recent notes') }}
        </p>

        <PostsSkeleton v-if="loadNotes === 'pending'" />
        <NoteList v-else :notes="notes" />
      </div>
    </main>
  </UContainer>
</template>
