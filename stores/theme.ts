import { defineStore } from "pinia";
import { ref } from "vue";

const useThemeStore = defineStore("theme", () => {
  const currentTheme = ref<"light" | "dark">("light");

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
  };

  return { currentTheme, toggleTheme };
});

export { useThemeStore };
export default useThemeStore;
