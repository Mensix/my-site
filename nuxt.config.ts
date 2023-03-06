export default defineNuxtConfig({
  app: {
    head: {
      title: 'Grzegorz Perun',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend developer from Poland.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Grzegorz Perun' },
        { property: 'og:url', content: 'https://mensix.xyz/' },
        { property: 'og:description', content: 'Frontend developer from Poland.' },
        { property: 'og:image', content: '~/assets/og.png' },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: ['@heroicons/vue'],
  },
})
