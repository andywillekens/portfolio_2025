// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()]
  },
  modules: ['@nuxt/image', '@nuxt/icon'],
  css: ['~/assets/styles/main.css'],
  image: {
    dir: 'assets/images'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})
