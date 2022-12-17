<template>
  <nav class="sticky top-0 left-0 right-0 z-10 border-b-2 bg-gray-50 bg-opacity-50 py-2 backdrop-blur-md backdrop-filter">
    <div class="m-auto flex items-center justify-between px-6 md:w-2/3 md:px-0">
      <nuxt-link to="/" class="font-body font-pacifico mb-2 text-3xl font-semibold">
        G
      </nuxt-link>
      <nuxt-link external to="/resume.pdf" class="font-bold text-gray-800 hover:underline">
        Resume
      </nuxt-link>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.font-pacifico {
  font-family: Pacifico, cursive;
}
</style>
