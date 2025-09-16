import { defineNuxtPlugin } from "nuxt/app";

import { gsap } from "gsap";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$gsap = gsap;
});
