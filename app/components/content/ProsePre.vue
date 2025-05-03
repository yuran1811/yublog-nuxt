<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const breadCrumbItems = computed(() =>
  props.filename
    ? props.filename.split('/').map((item) => ({
        label: item.trim(),
      }))
    : [],
);
</script>

<template>
  <CodeBlock>
    <div class="[&_ol]:mb-0 [&_ol]:gap-0 [&_ol]:ps-2">
      <div
        v-if="filename"
        class="bg-muted text-default rounded-t-md font-mono text-sm"
      >
        <UBreadcrumb :items="breadCrumbItems">
          <template #item-label="{ item, active }">
            <span
              :class="{
                'text-primary': active,
                'text-default': !active,
              }"
            >
              {{ item.label }}
            </span>
          </template>
          <template #separator>
            <span class="text-default">/</span>
          </template>
        </UBreadcrumb>
      </div>

      <pre
        class="!mt-0"
        :class="{
          [props.class as string]: true,
          'rounded-t-none': props.filename,
        }"
      ><slot /></pre>
    </div>
  </CodeBlock>
</template>

<style lang="postcss">
pre {
  code {
    display: inline-block;
    width: 100%;
    min-width: max-content;

    .line {
      display: block;

      span {
        background: transparent !important;
      }

      &.highlight,
      &.highlighted {
        background: color-mix(
          in srgb,
          var(--tw-prose-pre-bg) 75%,
          #808080
        ) !important;
      }

      &.diff.remove {
        background: color-mix(in srgb, var(--tw-prose-pre-bg) 65%, #f43f5e);
      }

      &.diff.add {
        background: color-mix(in srgb, var(--tw-prose-pre-bg) 75%, #10b981);
      }
    }
  }
}
</style>
