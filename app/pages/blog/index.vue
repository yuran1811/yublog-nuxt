<script setup lang="ts">
definePageMeta({
  icon: 'lucide:book-open-text',
  description: 'All my latest, interested, useful posts',
});

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all(),
);

const { app } = useAppConfig();

useSeoMeta({
  title: 'all posts',
  description: `Hi there! I'm ${app.author}, a software engineer and open source enthusiast. I love to share my knowledge, experience, my life, and the things I love. I hope you find something that resonates with you.`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <LayoutDefault>
    <section class="space-y-12">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap justify-center">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span
                class="mb-2 block text-lg font-semibold text-(--ui-primary)"
              >
                yublog
              </span>
              <h2
                class="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px]"
              >
                {{ $t('all my posts') }}
              </h2>
              <p class="text-dark-6 text-base">
                {{
                  $t(
                    `I write about my life, work, and the things I love. I hope you find something that resonates with you.`,
                  )
                }}
              </p>
            </div>
          </div>
        </div>

        <PostList :posts="posts" />
      </div>
    </section>
  </LayoutDefault>
</template>
