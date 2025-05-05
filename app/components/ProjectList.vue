<script setup lang="ts">
import { PROJECTS } from '@/constants';
</script>

<template>
  <UContainer
    class="grid grid-cols-1 gap-4 max-md:justify-items-center sm:grid-cols-2 *:odd:md:justify-self-end *:even:md:justify-self-start"
  >
    <ProjectCard v-for="project in PROJECTS" :key="project.name" :project />
  </UContainer>
</template>
