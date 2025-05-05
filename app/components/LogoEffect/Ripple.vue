<template>
  <div class="flex-center absolute inset-0 z-[-1]">
    <template v-for="_ in Array.from({ length: 6 }, (_, i) => i)" :key="_">
      <div
        class="ripple-ring bg-primary/2"
        :class="`[--i:${_}]`"
        :style="{
          animationDelay: 'calc(var(--i, 0) * 0.06s)',
          width: 'calc(var(--i, 0) * 120px + 120px)',
          height: 'calc(var(--i, 0) * 120px + 120px)',
        }"
      />
    </template>
  </div>
</template>
