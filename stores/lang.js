import {
  defineStore
} from "pinia";
import textlibrary from "../assets/texts.js";
import Cookie from "js-cookie";

export const useStore = defineStore("LangStore", {
  state() {
    return {
      lang: null,
      texts: null,
      backgroundColor: "#E6B325",
      navColor: "#61481C",
    };
  },
  actions: {
    getLang() {
      Cookie.get("lang") != "hu" ?
        (this.texts = textlibrary.hun) :
        (this.texts = textlibrary.eng);
    },
    setLang() {
      Cookie.get("lang") != "hu" ?
        Cookie.set("lang", "hu") :
        Cookie.set("lang", "en-GB");
      this.getLang();
    },
  },
});