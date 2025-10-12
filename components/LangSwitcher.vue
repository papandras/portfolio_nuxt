<template>
    <div class="custom-select" :tabindex="0" @blur="isDropdownOpen = false">
        <div class="selected" @click="isDropdownOpen = !isDropdownOpen">
            {{ $t(currentLocale) }}
        </div>
        <div class="items" :class="{ 'open': isDropdownOpen }">
            <div v-for="locale in locales" :key="locale.code" class="item" @click="selectLocale(locale.code)">
                {{ $t(locale.code) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, locales, setLocale } = useI18n();
const isDropdownOpen = ref(false);

const currentLocale = computed(() => locales.value.find(l => l.code === locale.value)?.code || '');

const selectLocale = (code: string) => {
    setLocale(code);
    isDropdownOpen.value = false;
};
</script>

<style scoped>
.custom-select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    line-height: 1.5;
}

.selected {
    background-color: var(--bg-color);
    color: var(--text-color);
    border: 1px solid var(--text-color);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    user-select: none;
}

.selected:hover {
    background-color: var(--text-color);
    color: var(--bg-color);
}

.items {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: var(--bg-color);
    border: 1px solid var(--text-color);
    border-top: none;
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: none;
}

.items.open {
    display: block;
}

.item {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-bottom: 1px solid var(--text-color);
    transition: background-color 0.3s ease;
}

.item:last-child {
    border-bottom: none;
}

.item:hover {
    background-color: var(--text-color);
    color: var(--bg-color);
}
</style>