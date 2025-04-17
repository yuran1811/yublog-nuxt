<script setup lang="ts">
defineProps<{ fixed?: boolean }>();
</script>

<template>
  <div>
    <SiteNavbar
      class="bg-(--ui-bg) md:bg-(--ui-bg)/75 md:backdrop-blur"
      :class="fixed ? 'fixed w-full' : 'sticky'"
    />
    <SiteSidebar />

    <slot />
  </div>
</template>
