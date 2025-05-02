<script setup lang="ts">
const { hideText = true } = defineProps<{ hideText?: boolean }>();

const locales = useLocales();

const items = ref([
  [...locales],
  [
    {
      label: 'Show help',
      icon: 'lucide:circle-help',
      slot: 'help' as const,
    },
  ],
  [
    {
      label: 'GitHub',
      icon: 'lucide:github',
      to: 'https://github.com/yuran1811/yublog-nuxt',
      target: '_blank',
    },
  ],
]);

const open = ref(false);

defineShortcuts({
  ctrl_shift_k: () => (open.value = !open.value),
});
</script>

<template>
  <UDropdownMenu
    v-model:open="open"
    :items="items"
    :content="{
      align: 'start',
      side: 'bottom',
      sideOffset: 8,
    }"
    :ui="{ content: 'w-48' }"
  >
    <div class="flex w-full items-center gap-1.5">
      <Icon name="lucide:settings" class="size-5" />
      <p v-if="!hideText">Settings</p>
    </div>

    <template #help-trailing>
      <UKbd value="?" />
    </template>
  </UDropdownMenu>
</template>
