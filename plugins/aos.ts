import AOS from "aos";
import "aos/dist/aos.css";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    AOS.init();
  });
});
