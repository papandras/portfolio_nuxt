<template>
    <div>
        <!-- Floating Menu Button -->
        <button type="button" class="menu-toggle-btn" @click.stop.prevent="toggleMenu" :class="{ 'is-open': isOpen }">
            <span class="menu-text">{{ isOpen ? 'CLOSE' : 'MENU' }}</span>
        </button>

        <!-- Fullscreen Menu Overlay -->
        <Transition name="menu-fade">
            <div v-if="isOpen" class="fullscreen-menu">
                <div class="menu-content">
                    <nav class="main-nav">
                        <NuxtLink :to="localePath('/')" class="nav-link" @click="closeMenu">{{ $t('home') || 'HOME' }}</NuxtLink>
                        <NuxtLink :to="localePath('/about')" class="nav-link" @click="closeMenu">{{ $t('about') || 'ABOUT' }}</NuxtLink>
                        <NuxtLink :to="localePath('/experience')" class="nav-link" @click="closeMenu">{{ $t('experience') || 'EXPERIENCE' }}</NuxtLink>
                        <NuxtLink :to="localePath('/projects')" class="nav-link" @click="closeMenu">{{ $t('projects') || 'PROJECTS' }}</NuxtLink>
                        <NuxtLink :to="localePath('/skills')" class="nav-link" @click="closeMenu">{{ $t('skills') || 'SKILLS' }}</NuxtLink>
                        <NuxtLink :to="localePath('/contact')" class="nav-link" @click="closeMenu">{{ $t('contact') || 'CONTACT' }}</NuxtLink>
                    </nav>
                    
                    <div class="menu-footer">
                        <div class="lang-switcher">
                            <button type="button" @click.stop="changeLang('hu')" :class="{ active: locale === 'hu' }" class="lang-btn">HU</button>
                            <button type="button" @click.stop="changeLang('en')" :class="{ active: locale === 'en' }" class="lang-btn">EN</button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n, useLocalePath } from '#imports'

const isOpen = ref(false)
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const closeMenu = () => {
    isOpen.value = false
}

const changeLang = (lang: string) => {
    setLocale(lang)
}
</script>

<style scoped>
.menu-toggle-btn {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 9999999; /* Highest priority */
    background: transparent;
    border: 2px solid var(--text-color);
    color: var(--text-color);
    padding: 0.5rem 1.5rem;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 1.2rem;
    cursor: none;
    transition: all 0.3s ease;
    mix-blend-mode: difference;
}

.menu-toggle-btn:hover {
    background: var(--text-color);
    color: var(--bg-color);
}

.menu-toggle-btn.is-open {
    border-color: var(--accent);
    color: var(--accent);
    mix-blend-mode: normal; /* Disable mix-blend-mode when open to avoid visual glitches */
}

.menu-toggle-btn.is-open:hover {
    background: var(--accent);
    color: var(--bg-color);
}

.fullscreen-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(5, 5, 5, 0.98); /* Pitch black with slight transparency */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 9999998; /* Just below the button */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.menu-content {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    text-align: center;
}

.main-nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.nav-link {
    font-size: clamp(3rem, 8vw, 6rem);
    font-family: var(--font-display);
    font-weight: 800;
    color: transparent;
    -webkit-text-stroke: 2px var(--text-color);
    text-transform: uppercase;
    transition: all 0.3s ease;
    cursor: none;
    line-height: 1.1;
    text-decoration: none;
}

.nav-link:hover, .nav-link.router-link-active {
    color: var(--accent);
    -webkit-text-stroke: 0px transparent;
    transform: translateX(20px);
}

.menu-footer {
    display: flex;
    justify-content: center;
    gap: 2rem;
    border-top: 2px solid #333;
    padding-top: 2rem;
}

.lang-btn {
    background: transparent;
    border: none;
    color: #555;
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 800;
    cursor: none;
    transition: all 0.3s ease;
}

.lang-btn:hover {
    color: var(--text-color);
}

.lang-btn.active {
    color: var(--accent);
}

/* Vue Transition Classes */
.menu-fade-enter-active,
.menu-fade-leave-active {
    transition: opacity 0.4s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
    opacity: 0;
}
</style>
