import { watch } from "vue";
import { useThemeStore } from "../stores/theme";
import { themes } from "../assets/themes";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const themeStore = useThemeStore();

    watch(
      () => themeStore.currentTheme,
      (newTheme) => {
        const root = document.documentElement;
        const themeStyles = themes[newTheme];

        for (const [themeKey, themeVal] of Object.entries(themeStyles)) {
          root.style.setProperty(themeKey, themeVal);
        }
      },
      { immediate: true }
    );
  }
});
