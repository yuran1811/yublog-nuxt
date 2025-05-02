<script setup lang="ts">
withDefaults(
  defineProps<{
    list?: {
      title: string;
      description: string;
      color: string;
      fgClass: string;
      bgClass: string;
      icon: string;
      link?: string;
    }[];
  }>(),
  {
    list: () => [
      {
        title: 'Lightning Fast',
        description: 'Optimized performance for the best user experience',
        color: '#3B82F6',
        fgClass: 'text-blue-500',
        bgClass: 'bg-blue-500/20',
        icon: 'ic:twotone-offline-bolt',
      },
      {
        title: 'Secure',
        description: 'Enterprise-grade security for your peace of mind',
        color: '#10B981',
        fgClass: 'text-green-500',
        bgClass: 'bg-green-500/20',
        icon: 'ic:twotone-shield',
      },
      {
        title: 'Reliable',
        description: '99.9% uptime guarantee for your business',
        color: '#F59E0B',
        fgClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500/20',
        icon: 'ic:twotone-settings-backup-restore',
      },
      {
        title: 'Lightning Fast2',
        description: 'Optimized performance for the best user experience',
        color: '#ff2056',
        fgClass: 'text-rose-500',
        bgClass: 'bg-rose-500/20',
        icon: 'ic:twotone-offline-bolt',
      },
      {
        title: 'Secure2',
        description: 'Enterprise-grade security for your peace of mind',
        color: 'oklch(0.553 0.013 58.071)',
        fgClass: 'text-stone-500',
        bgClass: 'bg-stone-500/20',
        icon: 'ic:twotone-shield',
      },
      {
        title: 'Reliable2',
        description: '99.9% uptime guarantee for your business',
        color: 'oklch(0.606 0.25 292.717)',
        fgClass: 'text-violet-500',
        bgClass: 'bg-violet-500/20',
        icon: 'ic:twotone-settings-backup-restore',
      },
    ],
  },
);
</script>

<template>
  <GlowCapture :size="250">
    <slot />

    <div
      class="relative grid w-full grid-cols-1 gap-6 px-4 py-8 sm:px-8 md:grid-cols-2 md:px-20 md:py-16 lg:grid-cols-3"
    >
      <GlowElement
        v-for="feature in list"
        :key="feature.title"
        :color="feature.color"
        :link="feature?.link"
        class="group"
      >
        <div
          class="glow:border-glow group-hover:glow:bg-glow/[.12] h-full rounded-xl border-2 border-transparent p-6 ring-1 ring-gray-800 transition"
        >
          <div
            :class="`${feature.bgClass} flex-center mb-4 size-12 rounded-lg`"
          >
            <Icon :name="feature.icon" :class="`${feature.fgClass} size-7`" />
          </div>

          <h3 class="glow:text-glow mb-2 text-xl font-bold text-gray-200">
            {{ feature.title }}
          </h3>
          <p class="glow:text-glow/80 text-gray-400">
            {{ feature.description }}
          </p>
        </div>
      </GlowElement>
    </div>
  </GlowCapture>
</template>
