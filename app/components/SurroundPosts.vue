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
      class="group group block rounded-[calc(var(--ui-radius)*2)] border border-(--ui-border) px-6 py-8 transition-colors hover:bg-(--ui-bg-elevated)/50 focus-visible:outline-(--ui-primary)"
    >
      <div
        class="mb-4 inline-flex items-center rounded-full bg-(--ui-bg-elevated) p-1.5 ring ring-(--ui-border-accented) transition group-hover:-translate-x-0.5 group-hover:bg-(--ui-primary)/10 group-hover:ring-(--ui-primary)/50"
      >
        <Icon
          name="lucide:arrow-left"
          class="size-5 shrink-0 text-(--ui-text-highlighted) transition-[color,translate] group-hover:text-(--ui-primary) group-active:-translate-x-0.5"
        />
      </div>

      <p
        class="mb-1 truncate text-[15px] font-medium text-(--ui-text-highlighted)"
      >
        {{ left.title }}
      </p>

      <p class="line-clamp-2 text-sm text-(--ui-text-muted)">
        {{ left.description }}
      </p>
    </NuxtLink>

    <NuxtLink
      v-if="right"
      :to="right.path"
      class="group group block rounded-[calc(var(--ui-radius)*2)] border border-(--ui-border) px-6 py-8 text-right transition-colors hover:bg-(--ui-bg-elevated)/50 focus-visible:outline-(--ui-primary)"
    >
      <div
        class="mb-4 inline-flex items-center rounded-full bg-(--ui-bg-elevated) p-1.5 ring ring-(--ui-border-accented) transition group-hover:translate-x-0.5 group-hover:bg-(--ui-primary)/10 group-hover:ring-(--ui-primary)/50"
      >
        <Icon
          name="lucide:arrow-right"
          class="size-5 shrink-0 text-(--ui-text-highlighted) transition-[color,translate] group-hover:text-(--ui-primary) group-active:translate-x-0.5"
        />
      </div>

      <p
        class="mb-1 truncate text-[15px] font-medium text-(--ui-text-highlighted)"
      >
        {{ right.title }}
      </p>

      <p class="line-clamp-2 text-sm text-(--ui-text-muted)">
        {{ right.description }}
      </p>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
