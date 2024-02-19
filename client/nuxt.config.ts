// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    // exposeConfig: false,
    // exposeLevel: 2,
    // config: {},
    // injectPosition: 'first',
    // viewer: true,
  },
  image: {
    domains: ['nuxtjs.org']
  }
})
