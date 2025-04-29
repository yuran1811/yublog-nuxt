<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Html class="dark overflow-x-hidden">
    <Body class="font-sans antialiased">
      <UApp>
        <UToaster>
          <NuxtLoadingIndicator />
          <NuxtLayout>
            <NuxtErrorBoundary>
              <NuxtPage />
              <ToTop />

              <template #error="{ error }">
                <Error :error="error" />
              </template>
            </NuxtErrorBoundary>
          </NuxtLayout>
        </UToaster>
      </UApp>
    </Body>

    <Analytics />
  </Html>
</template>
