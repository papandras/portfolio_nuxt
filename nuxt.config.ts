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
      title: 'Portfolio',
      link: [
        { rel: 'icon', href: '~/assets/img/logo.png' },
        { rel: 'canonical', href: 'https://www.papadev.hu' } // Canonical link
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/7b26586b2f.js",
          defer: true,
          crossorigin: "anonymous"
        }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Pap András Fullstack fejlesztő' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },  // Engedélyezett indexelés
        { hid: 'og:title', property: 'og:title', content: 'Pap András portfolio' }, // Open Graph
        { hid: 'og:description', property: 'og:description', content: 'Pap András Fullstack fejlesztő' }, // Open Graph
        { hid: 'og:url', property: 'og:url', content: 'https://www.papadev.hu' }, // Open Graph
      ],
    }
  }

})