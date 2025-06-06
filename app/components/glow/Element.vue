<script setup lang="ts">
const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  style: {
    type: Object,
    default: () => ({}),
  },
  color: {
    type: String,
    default: '#f50057',
  },
  debug: {
    type: Boolean,
    default: false,
  },
  rest: {
    type: Object,
    default: () => ({}),
  },
  link: {
    type: String,
    default: '',
    required: false,
  },
});

const element = ref<HTMLDivElement | null>(null);

const mask = computed(() => {
  return `
    radial-gradient(var(--glow-size) circle at calc(var(--glow-x, -99999px) - var(--glow-left, 0px))
    calc(var(--glow-y, -99999px) - var(--glow-top, 0px)), ${props.color} 0%, transparent 100%)
  `;
});

const openLink = () => {
  if (props.link && props.link.length > 0) {
    window.open(props.link, '_blank');
  }
};

onMounted(() => {
  if (!element.value) return;

  const elem = element.value;
  elem.style.setProperty('--glow-top', `${elem.offsetTop}px`);
  elem.style.setProperty('--glow-left', `${elem.offsetLeft}px`);

  const observer = new ResizeObserver(() => {
    requestAnimationFrame(() => {
      elem.style.setProperty('--glow-top', `${elem.offsetTop}px`);
      elem.style.setProperty('--glow-left', `${elem.offsetLeft}px`);
    });
  });

  const capture = elem.closest('.glow-capture');
  if (capture) observer.observe(capture);

  onUnmounted(() => observer.disconnect());
});
</script>

<template>
  <div
    ref="element"
    class="glow grid"
    :class="{
      'cursor-pointer': props.link && props.link.length > 0,
    }"
    @click="openLink"
  >
    <div
      :class="className"
      :style="{ ...style, gridArea: '1/1/1/1' }"
      v-bind="rest"
    >
      <slot />
    </div>

    <div
      class="glow-mask"
      :class="className"
      :glow="true"
      :style="{
        ...style,
        '--glow-color': color,
        gridArea: '1/1/1/1',
        pointerEvents: 'none',
        mask: debug ? undefined : mask,
        WebkitMask: debug ? undefined : mask,
      }"
      v-bind="rest"
    >
      <slot />
    </div>
  </div>
</template>
