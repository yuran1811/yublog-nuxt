<template>
  <div
    class="mx-auto grid max-w-220 auto-rows-fr grid-cols-1 justify-items-center-safe gap-8 py-6 md:grid-cols-2"
  >
    <template v-for="_ in Array.from({ length: 4 }, (_, i) => i + 1)" :key="_">
      <article class="w-full max-w-105 scale-100 rounded-xl p-0.5">
        <USkeleton class="h-52 w-full rounded-lg" />
      </article>
    </template>
  </div>
</template>
