<script setup lang="ts">
import * as locales from '@nuxt/ui/locale';

const { locale } = useI18n();

const lang = computed(() => locales[locale.value].code);
const dir = computed(() => locales[locale.value].dir);

useHead({
  htmlAttrs: { lang, dir },
});
</script>

<template>
  <Html class="dark overflow-x-hidden">
    <Body class="font-sans antialiased">
      <UApp :locale="locales[locale]">
        <UToaster>
          <NuxtLoadingIndicator />
          <NuxtLayout>
            <NuxtErrorBoundary>
              <NuxtPage />
              <Footer />

              <HelpModal />

              <template #error="{ error }">
                <Error :error="error" />
              </template>
            </NuxtErrorBoundary>
          </NuxtLayout>
        </UToaster>
      </UApp>
    </Body>
  </Html>
</template>
