<template>
  <Html class="overflow-x-hidden">
    <Body class="font-sans antialiased">
      <UApp>
        <UToaster>
          <NuxtLoadingIndicator />
          <NuxtLayout>
            <NuxtErrorBoundary>
              <NuxtPage />
              <CursorDot />

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
