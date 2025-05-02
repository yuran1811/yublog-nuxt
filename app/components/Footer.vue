<script setup lang="ts">
import { DockItems } from '@/constants';

const items: NavigationMenuItem[] = [
  [
    {
      label: 'yublog',
      icon: 'local:logo',
      disabled: true,
    },
  ],
  [
    ...DockItems.filter((_) => _.link.length > 0).map((item) => ({
      to: item.link,
      icon: item.icon,
      target: '_blank',
    })),
  ],
  [
    {
      label: 'All Rights Reserved.',
      icon: 'lucide:copyright',
      badge: new Date().getFullYear(),
      disabled: true,
    },
  ],
];
</script>

<template>
  <div>
    <USeparator class="mt-12 h-px" />
    <div>
      <UNavigationMenu :items="items" variant="link" />
    </div>
  </div>
</template>
