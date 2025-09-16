import VueCookieAcceptDecline from "vue-cookie-accept-decline";
import "vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css";
import Cookie from "js-cookie";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  if (Cookie.get("lang") === undefined) {
    Cookie.set("lang", "hun");
  }

  nuxtApp.vueApp.component("vue-cookie-accept-decline", VueCookieAcceptDecline);
});
