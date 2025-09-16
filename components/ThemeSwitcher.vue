<template>
    <button @click="themeStore.toggleTheme">
        <i class="fa-solid fa-moon" v-if="themeStore.currentTheme === 'dark'"></i>
        <i class="fa-solid fa-sun" v-if="themeStore.currentTheme === 'light'"></i>
        Váltás a {{ themeStore.currentTheme === 'light' ? 'Világos' : 'Sötét' }} Témára
    </button>
</template>

<script setup lang="ts">
import { useThemeStore } from '../stores/theme';

const themeStore = useThemeStore();
</script>

<style scoped>
button {
    background-color: var(--bg-color);
    color: var(--text-color);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}
</style>