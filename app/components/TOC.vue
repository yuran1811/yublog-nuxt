<script setup lang="ts">
const { tocs = [] } = defineProps<{ tocs?: TOC[] }>();
const scrollDir = useScrollDir();
</script>

<template>
  <UDrawer direction="right" inset>
    <UButton
      label="TOC"
      title="Toggle TOC"
      color="neutral"
      variant="subtle"
      trailing-icon="lucide:list"
      class="fixed top-19 right-2.5 z-50 transition-opacity md:top-25 xl:right-1/5"
      :class="{
        'opacity-0': scrollDir,
      }"
    />

    <template #content>
      <nav
        class="bg-default/75 w-full max-w-md transition **:text-base lg:bg-[initial]"
      >
        <div
          class="relative top-1/2 right-0 flex max-h-[calc(100%-8rem)] -translate-y-1/2 flex-col px-4"
        >
          <p
            class="focus-visible:outline-primary -mt-1.5 flex flex-1 items-center gap-1.5 py-1.5 text-sm font-semibold"
          >
            <span class="truncate">{{ $t('Table of Contents') }}</span>
          </p>

          <div
            class="scrollbar-hidden relative flex overflow-y-auto pb-24 focus:outline-none"
          >
            <ul class="min-w-0">
              <li v-for="toc in tocs" :key="toc.id">
                <a
                  :href="`#${toc.id}`"
                  :title="toc.id"
                  class="group hover:text-default text-muted focus-visible:outline-primary relative flex items-center py-1 text-sm transition-colors"
                >
                  <span class="truncate">
                    {{ toc.text }}
                  </span>
                </a>

                <ul class="ms-3">
                  <li
                    v-for="child in toc.children"
                    :key="child.id"
                    class="min-w-0"
                  >
                    <a
                      :href="`#${child.id}`"
                      :title="child.id"
                      class="group hover:text-default text-muted focus-visible:outline-primary relative flex items-center py-1 text-sm transition-colors"
                    >
                      <span class="truncate">
                        {{ child.text }}
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </template>
  </UDrawer>
</template>
