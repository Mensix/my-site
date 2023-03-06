<script setup lang="ts">
defineProps<{
  date: string
  title: string
  description: string
  reverse?: boolean
}>()
</script>

<template>
  <div class="flex justify-between md:gap-4 w-full" :class="{ 'flex-row-reverse': reverse }">
    <div class="flex flex-col relative items-center">
      <div class="w-16 h-16 bg-indigo-600 rounded-full md:flex items-center justify-center hidden after:absolute after:w-1 after:h-full after:bg-indigo-600" :class="{ 'after:top-12': !reverse, 'after:-top-28': reverse }">
        <slot name="icon" />
      </div>
    </div>
    <div class="p-4 border bg-white w-full border-t-4 border-t-indigo-600 z-[1]">
      <span class="text-indigo-600 font-medium text-sm tracking-wide">{{ date }} </span>
      <h3 class="text-2xl font-semibold mb-2">
        {{ title }}
      </h3>
      <p class="text-gray-600">
        {{ description }}
      </p>
    </div>
  </div>
</template>
