<script setup lang="ts">
import { CodeBracketIcon, LinkIcon } from '@heroicons/vue/20/solid'

defineProps<{
  title: string
  subtitle: string
  link?: string
  githubLink?: string
  technologies: string[]
}>()
</script>

<template>
  <div class="flex flex-col bg-white">
    <div class="flex flex-col flex-grow border-l border-r border-t-4 border-t-indigo-600 p-4">
      <div class="mb-1 inline-flex h-12 w-12 items-center justify-center bg-indigo-600">
        <slot name="icon" />
      </div>
      <p class="font-body mb-1 text-xl font-bold tracking-wide">
        {{ title }}
      </p>
      <div class="mb-4">
        <div v-if="link" class="flex items-center text-sm text-gray-600">
          <LinkIcon class="mr-1 h-4 w-4" />
          <a class="underline" :href="link" rel="noopener noreferer noreferrer" target="_blank">
            {{ link }}
          </a>
        </div>
        <div v-if="githubLink" class="flex items-center text-sm text-gray-600">
          <CodeBracketIcon class="mr-1 h-4 w-4" />
          <a class="underline" :href="githubLink" rel="noopener noreferer noreferrer" target="_blank">
            GitHub
          </a>
        </div>
      </div>
      <p class="mb-4 flex-grow text-sm text-gray-500">
        {{ subtitle }}
      </p>
    </div>
    <div class="flex flex-wrap gap-2 gap-y-1 bg-gray-50 px-4 py-2 border group-hover:shadow-lg group-hover:transition-all">
      <chip v-for="technology in technologies" :key="technology" wide>
        {{ technology }}
      </chip>
    </div>
  </div>
</template>
