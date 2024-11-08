// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [['@pinia/nuxt', {autoImports: ['defineStore']}]],
  plugins: [
    '~/plugins/cookies.js',
    '~/plugins/aos.js'
  ],
  css: ['aos/dist/aos.css', './assets/style.css'],
  imports: {
    dirs: ['stores'],
  },
  app: {
    head: {
      title: 'Portfolio v2',
      link: [{ rel: 'icon', href: './assets/img/logo.png' }],
      script: [
        {
          src: "https://kit.fontawesome.com/7b26586b2f.js",
          defer: true,
          crossorigin: "anonymous"
        }
      ]
    }
  }

})