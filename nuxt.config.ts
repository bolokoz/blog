// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Boloko`s Mind',
      titleTemplate: "%s - Boloko's mind",
      meta: [{ name: 'description', content: 'Boloko' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  typescript: {
    strict: true,
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image-edge',
    ['vue3-notion/nuxt', { css: true }],
    // '@nuxtjs/robots',
    // '@nuxtjs/fontaine',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
    ignores: ['archieve'],
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/boloko/image/upload/v1673372476/',
    },
  },
})
