<script setup lang="ts">
definePageMeta({
  name: 'Brand',
  icon: 'lucide:atom',
  description: 'Branding page with logo and color palette',
});

const { app } = useAppConfig();
const { copy } = useClipboard();
const toast = useToast();

const palette = [
  {
    name: 'Green',
    color: '#00dc82',
  },
  {
    name: 'White',
    color: '#ffffff',
  },
  {
    name: 'Gray',
    color: '#020420',
  },
];

const copyToClipboard = (text: string) => {
  copy(text);
  toast.clear();
  toast.add({
    title: 'Copied to clipboard!',
    color: 'success',
    duration: 750,
  });
};

useSeoMeta({
  title: 'brand',
  description: `Hi there! I'm ${app.author}, a software engineer and open source enthusiast. I love to share my knowledge, experience, my life, and the things I love. I hope you find something that resonates with you.`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <main class="py-12">
    <div class="space-y-12">
      <UContainer>
        <h2 class="mb-8 text-center text-2xl font-black">logo</h2>
        <PulseLogo class="mx-auto mb-8 max-w-32 min-w-16" />
      </UContainer>

      <UContainer>
        <h2 class="mb-8 text-center text-2xl font-black">
          {{ $t('color palette') }}
        </h2>

        <UContainer class="flex flex-wrap items-center justify-center gap-8">
          <template v-for="{ name, color } of palette" :key="name">
            <div class="w-max">
              <div
                class="bg-default aspect-square w-32 max-w-32 divide-y divide-(--ui-border) rounded-[calc(var(--ui-radius)*2)] ring ring-(--ui-border)"
                :style="`background: ${color}`"
              />

              <div class="flex items-center justify-between pt-2">
                <p class="text-highlighted text-base font-semibold">
                  {{ name }}
                </p>

                <button
                  class="text-primary hover:text-primary/75 disabled:text-primary aria-disabled:text-primary focus-visible:ring-primary inline-flex cursor-pointer items-center gap-1.5 rounded-[calc(var(--ui-radius)*1.5)] px-2.5 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75"
                  @click="copyToClipboard(color)"
                >
                  <span class="truncate">Copy</span>
                </button>
              </div>
              <p class="text-muted text-sm">{{ color }}</p>
            </div>
          </template>
        </UContainer>
      </UContainer>
    </div>

    <CursorDot />
  </main>
</template>
