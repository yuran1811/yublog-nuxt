<script setup lang="ts">
const open = ref(false);

defineShortcuts({
  '?': () => (open.value = !open.value),
});

const shortcuts = [
  {
    key: '?',
    label: 'Open help modal',
  },
  {
    key: 'ctrl+shift+f',
    label: 'Search posts',
  },
  {
    key: 'ctrl+shift+k',
    label: 'Site settings',
  },
];
</script>

<template>
  <UModal v-model:open="open">
    <UButton label="Open" color="neutral" variant="subtle" class="hidden" />

    <template #content>
      <div class="container px-10 py-8">
        <template v-for="shortcut in shortcuts" :key="shortcut.key">
          <div class="flex-center gap-4">
            <p class="flex-1/2 text-right">{{ shortcut.label }}</p>
            <div class="flex flex-1/2 items-center justify-start gap-1">
              <UKbd v-for="_ in shortcut.key.split('+')" :key="_" :value="_" />
            </div>
          </div>
        </template>
      </div>
    </template>

    <template #title>
      <VisuallyHidden>Title</VisuallyHidden>
    </template>
    <template #description>
      <VisuallyHidden>Description</VisuallyHidden>
    </template>
  </UModal>
</template>
