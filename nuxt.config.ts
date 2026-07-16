// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [["@pinia/nuxt", { autoImports: ["defineStore"] }], "@nuxtjs/i18n"],
  plugins: [
    "~/plugins/aos.ts",
  ],
  css: ["aos/dist/aos.css", "./assets/style.css"],
  imports: {
    dirs: ["stores"],
  },
  app: {
    head: {
      title: "Portfolio",
      link: [
        { rel: "icon", type: "image/png", href: "/logo.png" },
        { rel: "canonical", href: "https://www.papadev.hu" }, // Canonical link
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/7b26586b2f.js",
          defer: true,
          crossorigin: "anonymous",
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Pap András Fullstack fejlesztő",
        },
        { hid: "robots", name: "robots", content: "index, follow" }, // Engedélyezett indexelés
        {
          hid: "og:title",
          property: "og:title",
          content: "Pap András portfolio",
        }, // Open Graph
        {
          hid: "og:description",
          property: "og:description",
          content: "Pap András Fullstack fejlesztő",
        }, // Open Graph
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.papadev.hu",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.papadev.hu/logo.png",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: "Pap András portfolio",
        },
        {
          name: "twitter:description",
          content: "Pap András Fullstack fejlesztő",
        },
      ],
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "hu",
        file: "hu.json",
      },
    ],
    langDir: "locales",
    defaultLocale: "hu",
  },
});
