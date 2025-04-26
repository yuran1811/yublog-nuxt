<script setup lang="ts">
import type { NotesCollectionItem } from '@nuxt/content';
import { DefaultDateFormat } from '@/constants';

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
        external
        :to="note.path"
        class="hover:animate-background w-full max-w-105 scale-100 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:scale-[1.02] hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s] dark:shadow-gray-700/25"
      >
        <div
          class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-[10px] bg-white p-4 !pt-18 sm:p-6 dark:bg-gray-900"
        >
          <p class="block text-xs text-gray-500 dark:text-gray-400">
            {{ useDateFormat(note.date || new Date(), DefaultDateFormat) }}
          </p>

          <p
            class="mt-0.5 line-clamp-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            {{ note.title || 'Untitled' }}
          </p>
        </div>
      </NuxtLink>
    </template>

    <div v-if="notes?.length === 0" class="col-span-full">
      <p class="text-center">No notes found.</p>
    </div>
  </div>
</template>
