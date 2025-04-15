<script setup lang="ts">
const { pages } = usePages();
const { showSidebar } = useSidebar();

const mobileItems = ref<any[]>([
  [
    {
      avatar: {
        size: '2xl',
        icon: 'local:logo',
        ui: {
          root: 'group bg-transparent',
          icon: 'size-8 min-h-8 min-w-8',
        },
      },
      to: '/',
    },
  ],
  [
    {
      icon: 'lucide:menu',
      onSelect: () => (showSidebar.value = true),
    },
  ],
]);

const desktopItems = ref([
  [
    {
      avatar: {
        size: '2xl',
        icon: 'local:logo',
        ui: {
          root: 'group bg-transparent',
          icon: 'size-8 min-h-8 min-w-8 opacity-70 group-hover:opacity-100 transition-colors',
        },
      },
      to: '/',
    },
  ],
  ...pages,
]);
</script>

<template>
  <header class="top-0 z-10">
    <UContainer class="md:py-2">
      <UNavigationMenu
        variant="link"
        :items="mobileItems"
        :ui="{
          root: 'md:hidden',
        }"
      />
      <UNavigationMenu
        variant="link"
        :items="desktopItems"
        :ui="{
          root: 'hidden md:flex',
          viewportWrapper: 'max-w-2xl absolute-center-h',
          list: 'md:gap-x-2',
        }"
      />
    </UContainer>
  </header>
</template>
