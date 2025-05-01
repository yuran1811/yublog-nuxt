<script setup lang="ts">
definePageMeta({
  name: 'Markdown Editor',
  layout: 'fixnav',
  icon: 'lucide:pen-line',
  description: 'A simple markdown editor using @nuxt/mdc',
});

const input = ref<string>('');
const output = ref<any>();

const { data } = await useAsyncData(`examples-md`, () =>
  queryCollection('examples').path(`/examples/md-example`).first(),
);
if (data.value) {
  const parsed = data.value.rawbody.replace(/\\n/g, '\n');
  input.value = parsed;
  output.value = await parseMarkdown(parsed);
}

const debouncedFn = useDebounceFn(async () => {
  output.value = await parseMarkdown(input.value);
}, 400);

useSeoMeta({
  title: 'md editor',
  description: `yublog markdown editor - a simple markdown editor with live preview using @nuxt/mdc`,
});
defineOgImageComponent('Nuxt');
</script>

<template>
  <div class="mt-18 w-full md:mt-22">
    <h1 class="pb-6 text-center text-2xl font-bold">
      {{ $t('markdown editor') }}
    </h1>

    <div
      class="container mx-auto grid overflow-hidden *:h-full *:p-2 *:outline-none sm:h-screen sm:max-h-[calc(100dvh-11rem)] sm:grid-cols-2"
    >
      <textarea
        v-model="input"
        class="bg-muted resize-none max-sm:h-72"
        @input="debouncedFn"
      />
      <ContentRenderer
        class="prose prose-invert overflow-y-auto max-sm:h-72"
        :prose="true"
        :value="output"
      />
    </div>
  </div>
</template>
