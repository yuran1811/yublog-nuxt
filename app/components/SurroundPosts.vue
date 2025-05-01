<script setup lang="ts">
defineProps<{
  left?: {
    path: string;
    title: string;
    description: string;
  };
  right?: {
    path: string;
    title: string;
    description: string;
  };
}>();
</script>

<template>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
    <NuxtLink
      v-if="left"
      :to="left.path"
      class="group group hover:bg-elevated/50 focus-visible:outline-primary block rounded-[calc(var(--ui-radius)*2)] border border-(--ui-border) px-6 py-8 transition-colors"
    >
      <div
        class="bg-elevated group-hover:bg-primary/10 group-hover:ring-primary/50 mb-4 inline-flex items-center rounded-full p-1.5 ring ring-(--ui-border-accented) transition group-hover:-translate-x-0.5"
      >
        <Icon
          name="lucide:arrow-left"
          class="text-highlighted group-hover:text-primary size-5 shrink-0 transition-[color,translate] group-active:-translate-x-0.5"
        />
      </div>

      <p class="text-highlighted mb-1 truncate text-[15px] font-medium">
        {{ left.title }}
      </p>

      <p class="text-muted line-clamp-2 text-sm">
        {{ left.description }}
      </p>
    </NuxtLink>

    <NuxtLink
      v-if="right"
      :to="right.path"
      class="group group hover:bg-elevated/50 focus-visible:outline-primary block rounded-[calc(var(--ui-radius)*2)] border border-(--ui-border) px-6 py-8 text-right transition-colors"
    >
      <div
        class="bg-elevated group-hover:bg-primary/10 group-hover:ring-primary/50 mb-4 inline-flex items-center rounded-full p-1.5 ring ring-(--ui-border-accented) transition group-hover:translate-x-0.5"
      >
        <Icon
          name="lucide:arrow-right"
          class="text-highlighted group-hover:text-primary size-5 shrink-0 transition-[color,translate] group-active:translate-x-0.5"
        />
      </div>

      <p class="text-highlighted mb-1 truncate text-[15px] font-medium">
        {{ right.title }}
      </p>

      <p class="text-muted line-clamp-2 text-sm">
        {{ right.description }}
      </p>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
