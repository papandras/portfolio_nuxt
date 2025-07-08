import {
  defineStore
} from "pinia";
import Cookie from "js-cookie";
import textlibrary from "../assets/texts.js";

export const useStore = defineStore("LangStore", {
  state() {
    let lang = null;
    let texts = null;

    const langCookie = Cookie.get("lang");

    if (langCookie === 'hu' || !langCookie) {
      lang = 'hu'
      texts = textlibrary.hun;
    }

    if (langCookie === 'en-GB') {
      lang = 'en-GB';
      texts = textlibrary.eng;
    }

    return {
      lang: lang,
      texts: texts,
      backgroundColor: "#E6B325",
      navColor: "#61481C",
    };
  },
  actions: {
    toggleLang() {
      const langCookie = Cookie.get("lang");

      if (langCookie === 'hu' || !langCookie) {
        this.lang = 'en-GB';
        this.texts = textlibrary.eng;
        Cookie.set("lang", "en-GB");
      }

      if (langCookie === 'en-GB') {
        this.lang = 'hu'
        this.texts = textlibrary.hun;
        Cookie.set("lang", "hu");
      }
    },
  },
});