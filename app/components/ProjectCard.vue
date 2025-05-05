<script setup lang="ts">
/**
 * Credit to [@HugoRCD](https://github.com/HugoRCD)
 * @see https://github.com/HugoRCD/canvas/blob/main/app/components/project/Card.vue
 *
 * Modified by [me (@yuran1811)](https://github.com/yuran1811)
 */
defineProps<{ project: ProjectDataType }>();
</script>

<template>
  <NuxtLink
    :to="project.link"
    :title="`${project.name} project link`"
    target="_blank"
    class="group relative flex aspect-video w-full max-w-105 cursor-pointer flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 backdrop-blur-sm sm:shadow-2xl sm:shadow-zinc-950/50"
  >
    <div class="flex gap-1 px-1 py-[2px]">
      <div
        class="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10"
      />
      <div
        class="size-2 rounded-full bg-yellow-500/90 transition-all delay-50 duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10"
      />
      <div
        class="size-2 rounded-full bg-green-500/90 transition-all delay-100 duration-300 group-hover:bg-green-500/90 sm:bg-white/10"
      />
    </div>

    <div
      class="flex w-full justify-center overflow-hidden rounded-lg *:aspect-video *:w-full"
    >
      <NuxtImg
        v-if="project.link"
        :src="`/images/projects/${project.name}.png`"
        :alt="`${project.name} project image`"
        :title="`${project.name} project image`"
        class="object-cover object-top transition-all duration-300 hover:scale-105"
      />
      <USkeleton v-else class="flex-center relative">
        <div class="absolute">
          <span>coming</span>
          <span class="aurora-text"> soon </span>
        </div>
      </USkeleton>
    </div>

    <div class="absolute bottom-0 flex w-full justify-center">
      <div
        class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] backdrop-blur-md sm:w-2/3 sm:shadow-md"
      >
        <div
          class="relative flex items-center justify-between gap-2 overflow-hidden"
        >
          <div class="flex-center w-full gap-2">
            <span class="text-sm font-semibold whitespace-nowrap text-white/90">
              {{ project.name }}
            </span>
            <span class="text-xs whitespace-nowrap text-neutral-500">
              {{ project.release }}
            </span>
          </div>

          <div
            class="flex-center rounded-full border border-transparent backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/10 sm:shadow-md"
          >
            <UIcon name="lucide:arrow-right" class="size-3 text-white" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
