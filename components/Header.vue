<template>
    <header>
        <div class="header-wrapper">
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

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
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

    z-index: 999;
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
</style>