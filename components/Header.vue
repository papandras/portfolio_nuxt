<template>
    <header>
        <div class="header-wrapper">
            <nav v-if="withNav" class="nav">
                <NuxtLink :to="page.path" v-for="page in pages" class="nav-link">{{ $t(page.name) }}</NuxtLink>
            </nav>
            <div class="menu">
                <i class="menu-icon fa-solid fa-bars" @click="toggleMenu" :class="{ 'rotated': isMenuOpen }"></i>

                <div :class="{ 'menu-open': isMenuOpen, 'menu-closed': !isMenuOpen }">
                    <LangSwitcher />
                    <ThemeSwitcher />
                </div>
                <!-- <Cookiebar /> -->
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    withNav?: boolean
}>();

const withNav = props.withNav;

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const pages = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'experience', path: '/experience' },
    { name: 'skills', path: '/skills' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' }
];
</script>

<style scoped>
header {
    position: sticky;
    top: 0;
    height: 5vh;
}

.header-wrapper {
    position: relative;
    background-color: var(--bg-color);
    width: 100%;
    height: 100%;
    background: rgba(var(--bg-color-r), var(--bg-color-g), var(--bg-color-b), 0.2);
    box-shadow: 0 4px 30px rgba(var(--bg-color-r), var(--bg-color-g), var(--bg-color-b), 0.1);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
}

.menu {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translate(-50%, -50%);
}

.menu-open {
    width: 15vw;
    position: absolute;
    top: 200%;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid var(--text-color);
    background-color: var(--bg-color);
    padding: 10px;
    border-radius: 8px;

    z-index: 999 !important;
}

.menu-closed {
    display: none;
}

.menu-icon {
    position: relative;
    top: 100%;
    right: 0;
    color: var(--text-color);
    transition: transform 0.3s ease-in-out;
}

.rotated {
    transform: rotate(360deg) scale(2);
}

.nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: var(--text-color);
    text-decoration: none;
}

.nav-link:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    font-weight: bold;
    transition: all 0.3s ease;
    cursor: pointer;
}
</style>