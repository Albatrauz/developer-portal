// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
    ['@nuxtjs/google-fonts', {
      families: {
        'Outfit': [400, 700]
      }
    }]
  ],
  css: ['~/assets/css/main.css']
})