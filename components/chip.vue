<script setup lang="ts">
defineProps<{
  centered?: boolean
  solid?: boolean
  rounded?: boolean
  wide?: boolean
}>()
</script>

<template>
  <div class="border-1 inline-flex items-center justify-center gap-2 border bg-white py-1 text-sm font-medium text-gray-800" :class="{ 'border-gray-800': solid, 'rounded-full': rounded, 'px-4': wide }">
    <slot />
  </div>
</template>
