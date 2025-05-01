<template>
  <div class="flex-center relative size-36" :class="$props.class">
    <SvgoLogo
      :filled="true"
      :font-controlled="false"
      class="size-20 sm:size-32"
    />
    <div class="flex-center absolute inset-0 z-[-1]">
      <div class="pulse-ring to-primary/10 size-32" />
      <div class="pulse-ring to-primary/8 size-48 delay-100" />
      <div class="pulse-ring to-primary/6 size-72 delay-150" />
      <div class="pulse-ring to-primary/4 size-100 delay-200" />
      <div class="pulse-ring to-primary/2 size-132 delay-250" />
      <div class="pulse-ring to-primary/1 size-168 delay-300" />
    </div>
  </div>
</template>
