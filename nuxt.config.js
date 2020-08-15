export default {
  mode: 'spa',
  target: 'static',
  head: {
    title: 'Grzegorz Perun',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no',
        hid: 'viewport',
      },
      {
        name: 'title',
        content: 'Grzegorz Perun',
        hid: 'title',
      },
      {
        name: 'theme-color',
        content: '#4A5568',
        hid: 'theme-color',
      },
      {
        name: 'description',
        content: 'Aspiring web developer from Poland.',
        hid: 'description',
      },
      {
        property: 'og:title',
        content: 'Grzegorz Perun',
        hid: 'og:title',
      },
      {
        property: 'og:description',
        content: 'Aspiring web developer from Poland.',
        hid: 'og:description',
      },
      { property: 'og:type', content: 'website', hid: 'og:type' },
      {
        property: 'og:url',
        content: 'https://mensix.netlify.app/',
        hid: 'og:url',
      },
      {
        property: 'og:image',
        content: 'https://i.imgur.com/ZtNMqwD.png',
        hid: 'og:image',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: 'site.webmanifest',
      },
    ],
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      brands: ['faGithub', 'faFacebook'],
      solid: ['faDownload', 'faArrowsAltH', 'faPlus', 'faCode'],
    },
  },
  build: {},
}
