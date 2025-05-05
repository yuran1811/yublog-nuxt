<template>
  <div class="flex-center relative size-36" :class="$props.class">
    <LazyLogoEffectRipple hydrate-on-idle />

    <SvgoLogo
      :filled="true"
      :font-controlled="false"
      class="size-24 sm:size-32"
    />
  </div>
</template>
