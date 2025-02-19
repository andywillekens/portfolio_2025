// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  vite: {
    plugins: [tailwindcss()]
  },
  modules: ['@nuxt/image'],
  css: ['~/assets/styles/main.scss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: ['~/plugins/setToken.ts'],
  image: {
    dir: 'assets/images'
  }
})
