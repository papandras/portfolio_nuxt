<template>
    <select :value="locale" @change="setLocale($event.target.value)">
        <option v-for="locale in locales" :key="locale.code" :value="locale.code">
            {{ $t(locale.code) }}
        </option>
    </select>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

</script>

<style scoped>
select {
    background-color: var(--bg-color);
    color: var(--text-color);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    border: 1px solid var(--text-color);
}
</style>