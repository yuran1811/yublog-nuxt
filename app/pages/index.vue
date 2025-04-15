<script setup lang="ts">
useSeoMeta({
  title: 'home',
});

definePageMeta({
  layout: 'home',
  description: 'yublog home page',
});

const { app } = useAppConfig();
</script>

<template>
  <UContainer class="relative h-screen overflow-hidden">
    <div class="grid size-full place-content-center gap-y-8">
      <SvgoLogo
        :filled="true"
        :font-controlled="false"
        class="mx-auto size-16 sm:size-24"
      />
    </div>

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
