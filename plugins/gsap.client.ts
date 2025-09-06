// plugins/gsap.client.js

import { gsap } from "gsap";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$gsap = gsap;
});
