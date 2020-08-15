<template>
  <div class="rounded shadow-lg h-full">
    <div class="bg-gray-900 h-48 flex justify-center items-center">
      <div class="font-bold text-gray-100 text-6xl">
        <font-awesome-icon v-if="iconTitle === true" :icon="title" />
        <span v-else>{{ title }}</span>
      </div>
    </div>
    <div class="bg-white p-4">
      <div class="flex justify-between items-center pb-2">
        <a
          v-if="link"
          :href="link"
          rel="noopener noreferer"
          target="_blank"
          class="block font-bold underline text-xl"
          >{{ name }}</a
        >
        <a v-else class="block font-bold text-xl">{{ name }}</a>
        <a :href="repoLink" rel="noopener noreferer" target="_blank"
          ><font-awesome-icon class="text-3xl" :icon="['fab', 'github']"
        /></a>
      </div>
      <p class="font-light text-gray-700 text-base pb-4">{{ description }}</p>
      <div class="flex flex-row flex-wrap">
        <div
          v-for="technology in technologies"
          :key="technology"
          class="rounded bg-gray-800 px-3 py-2 mr-1 mb-1"
        >
          <p class="font-semibold text-white text-base">
            {{ technology }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repoLink: { default: '', type: String },
    title: { default: '', type: String },
    iconTitle: { default: false, type: Boolean },
    name: { default: '', type: String },
    description: { default: '', type: String },
    technologies: { default: () => [], type: Array },
    link: { default: '', type: String },
  },
}
</script>
