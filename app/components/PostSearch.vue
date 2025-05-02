<script setup lang="ts">
defineProps<{ hideText?: boolean }>();

const open = ref(false);

defineShortcuts({
  ctrl_shift_f: () => (open.value = !open.value),
});

const { data: files } = await useAsyncData('blog-post-search', () =>
  queryCollectionSearchSections('blog'),
);

const groups = ref([
  {
    id: 'blog-post-search',
    label: 'Posts',
    items: [
      ...(files.value?.map((item) => ({
        id: item.id,
        label: item.title,
        suffix: item.content.replace(/<[^>]+>/g, ''),
        to: item.id,
        level: item.level,
        icon: item.level === 1 ? 'lucide:file-text' : 'lucide:hash',
      })) || []),
    ],
    postFilter(searchTerm: string, items: any[]) {
      return searchTerm ? items : items?.filter((item) => item.level === 1);
    },
  },
]);

const searchTerm = ref('');
</script>

<template>
  <UModal v-model:open="open">
    <div class="flex w-full items-center gap-1.5">
      <Icon name="lucide:search" class="size-5" />
      <p v-if="!hideText">Search</p>
    </div>

    <template #content>
      <UCommandPalette
        v-model="searchTerm"
        class="h-80 flex-1"
        placeholder="Search for posts..."
        :groups="groups"
        :fuse="{ fuseOptions: { includeMatches: true } }"
        :highlight-on-hover="true"
        selected-icon="lucide:link-2"
      />
    </template>

    <template #title>
      <VisuallyHidden>Title</VisuallyHidden>
    </template>
    <template #description>
      <VisuallyHidden>Description</VisuallyHidden>
    </template>
  </UModal>
</template>
