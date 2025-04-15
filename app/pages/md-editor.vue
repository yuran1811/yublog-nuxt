<script setup lang="ts">
definePageMeta({
  name: 'Markdown Editor',
  icon: 'lucide:pen-line',
  description: 'A simple markdown editor using @nuxt/content',
});

const input = ref<string>('');
const output = ref<any>();

const { data } = await useAsyncData(`examples-md`, () =>
  queryCollection('examples').path(`/examples/md-example`).first(),
);
if (data.value) {
  const parsed = data.value.rawbody.replace(/\\n/g, '\n');
  input.value = parsed;
  output.value = parsed;
}

const debouncedFn = useDebounceFn(() => {
  output.value = input.value;
}, 400);
</script>

<template>
  <div class="h-screen w-full overflow-hidden">
    <h1 class="pb-6 text-center text-2xl font-bold">Markdown Editor</h1>

    <div class="xs:grid-cols-2 grid *:p-2">
      <textarea
        v-model="input"
        class="xs:h-full h-72 resize-none bg-(--ui-bg-muted) outline-none"
        @input="debouncedFn"
      />
      <UContainer
        class="xs:h-full h-72 overflow-y-auto outline-none"
        :style="{ 'max-height': 'calc(100dvh - 11rem)' }"
      >
        <MDC class="prose prose-invert container mx-auto" :value="output" />
      </UContainer>
    </div>
  </div>
</template>
