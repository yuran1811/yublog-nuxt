<script setup lang="ts">
const props = defineProps<{
  author: AuthorData;
}>();

const avatar = computed(() => {
  if (props.author.avatar.length > 0) return props.author.avatar;

  return ['/images/male.png', '/images/female.png'][+props.author.gender];
});
</script>

<template>
  <div class="border-y border-(--ui-text-dimmed) px-8 py-6">
    <div
      class="flex flex-col space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-6"
    >
      <NuxtImg
        :src="avatar"
        alt="avatar"
        class="size-16 min-h-16 min-w-16 flex-shrink-0 self-center rounded-full border border-(--ui-text-dimmed) bg-gray-500 md:size-24 md:justify-self-start"
      />

      <div class="flex w-full flex-col gap-2">
        <div
          class="xs:flex-row flex flex-col flex-wrap justify-between gap-4 text-center text-lg font-semibold md:text-left"
        >
          <p>
            {{ author.name }}
          </p>
          <div class="flex-center flex-wrap gap-4 *:scale-125 *:transition">
            <template
              v-for="account in [
                { icon: 'lucide:mail', url: author.mail },
                { icon: 'lucide:linkedin', url: author.linkedin },
                { icon: 'lucide:github', url: author.github },
                { icon: 'lucide:facebook', url: author.facebook },
                { icon: 'lucide:instagram', url: author.instagram },
                { icon: 'lucide:youtube', url: author.youtube },
                { icon: 'lucide:dribbble', url: author.dribbble },
                { icon: 'ic:round-discord', url: author.discord },
              ].filter((_) => _.url.trim().length > 0) || []"
              :key="account"
            >
              <NuxtLink
                class="flex-center size-4 rounded-md text-(--ui-bg-revert) transition-transform hover:scale-150 hover:text-violet-400"
                :to="account.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon :name="account.icon" class="size-4 fill-current" />
              </NuxtLink>
            </template>
          </div>
        </div>
        <p class="text-(--ui-text-muted)">
          {{ author.bio }}
        </p>
      </div>
    </div>
  </div>
</template>
