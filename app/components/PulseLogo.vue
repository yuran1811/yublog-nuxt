<template>
  <div class="flex-center relative size-36" :class="$props.class">
    <div class="flex-center absolute inset-0 z-[-1]">
      <div class="pulse-ring bg-primary/4 size-32" />
      <div class="pulse-ring bg-primary/3 size-48 delay-100" />
      <div class="pulse-ring bg-primary/2 size-72 delay-175" />
      <div class="pulse-ring bg-primary/2 size-100 delay-250" />
      <div class="pulse-ring bg-primary/2 size-132 delay-325" />
      <div class="pulse-ring bg-primary/1 size-168 delay-400" />
    </div>

    <SvgoLogo
      :filled="true"
      :font-controlled="false"
      class="size-24 sm:size-32"
    />
  </div>
</template>
