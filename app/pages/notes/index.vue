<script setup lang="ts">
const { data } = await useAsyncData('notes', () =>
  queryCollection('notes').order('date', 'DESC').all(),
);

const { app } = useAppConfig();

useSeoMeta({
  title: 'notes',
  description: `Hi there! I'm ${app.author}, a software engineer and open source enthusiast. You can find my notes about tips and tricks or guide here.`,
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
                {{ $t('my notes') }}
              </h2>
              <p class="text-dark-6 text-base">
                {{
                  $t('My notes for the things I learn and want to remember.')
                }}
              </p>
            </div>
          </div>
        </div>

        <NoteList :notes="data" />
      </div>
    </section>
  </LayoutDefault>
</template>
