<script setup lang="ts">
const { pages } = usePages();
const { showSidebar } = useSidebar();
const { y, directions } = useWindowScroll();

const prevDirection = ref(0);

const mobileItems = ref([
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
      title: 'home',
      to: '/',
    },
  ],
  [
    {
      icon: 'lucide:menu',
      title: 'menu',
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
      title: 'home',
      to: '/',
    },
  ],
  ...pages,
]);

const updateScrollDirection = () => {
  if (directions.bottom) {
    prevDirection.value = 1;
  } else if (directions.top) {
    prevDirection.value = 0;
  }
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollDirection);
});
onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollDirection);
});
</script>

<template>
  <header
    class="top-0 z-10 origin-top transition-all"
    :class="{
      'scale-y-0': y > 100 && prevDirection,
    }"
  >
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
      >
        <template #search>
          <PostSearch />
        </template>
        <template #settings>
          <LangSwitcher />
        </template>
      </UNavigationMenu>
    </UContainer>
  </header>
</template>
