<script setup lang="ts">
import type { NotesCollectionItem } from '@nuxt/content';

defineProps<{
  notes?: Pick<NotesCollectionItem, 'title' | 'date' | 'path' | 'tags'>[];
}>();
</script>

<template>
  <div
    class="mx-auto grid max-w-220 auto-rows-fr grid-cols-1 justify-items-center-safe gap-8 py-6 md:grid-cols-2"
  >
    <template v-for="note in notes" :key="note.path">
      <NuxtLink
        :to="note.path"
        class="group max-sm:bg-muted sm:border-accented/60 sm:from-accented/20 sm:to-accented/5 relative w-full max-w-105 cursor-pointer overflow-hidden rounded-lg transition-all hover:brightness-90 sm:border-1 sm:bg-gradient-to-br"
      >
        <div
          class="relative flex h-[calc(100%-2px)] flex-col items-start justify-end overflow-hidden rounded-[10px] p-4 !pt-18 sm:p-6"
        >
          <p class="block text-xs text-gray-400">
            {{ formatDate(note.date) }}
          </p>

          <p class="mt-0.5 line-clamp-2 text-lg font-medium text-white">
            {{ note.title || 'Untitled' }}
          </p>
        </div>

        <div
          class="via-primary-300 absolute bottom-0 m-auto h-2 w-full rounded bg-gradient-to-l blur-2xl transition-all group-hover:blur-xl max-sm:hidden"
        />
        <div
          class="group-hover:via-primary-300 via-primary-950 m-auto h-0.5 w-[70%] rounded bg-gradient-to-l transition-all group-hover:w-full max-sm:hidden"
        />
      </NuxtLink>
    </template>

    <div v-if="notes?.length === 0" class="col-span-full">
      <p class="text-center">{{ $t('No notes found.') }}</p>
    </div>
  </div>
</template>
