<template>
    <div>
        <!-- Floating Menu Toggle -->
        <button type="button" class="menu-toggle" @click.stop.prevent="toggleMenu" :class="{ 'is-open': isOpen }">
            <span class="menu-label">{{ isOpen ? $t('close') : $t('menu') }}</span>
            <span class="menu-dot"></span>
        </button>

        <!-- Fullscreen Overlay -->
        <Transition name="overlay-reveal">
            <div v-if="isOpen" class="nav-overlay">
                <div class="nav-overlay-inner">
                    <!-- Left: Navigation Links -->
                    <nav class="nav-links">
                        <NuxtLink v-for="(link, i) in navLinks" :key="link.path"
                            :to="localePath(link.path)"
                            class="nav-link"
                            :style="{ transitionDelay: (i * 0.06) + 's' }"
                            @click="closeMenu">
                            <span class="nav-number">0{{ i + 1 }}</span>
                            <span class="nav-text">{{ $t(link.key) || link.label }}</span>
                        </NuxtLink>
                    </nav>

                    <!-- Bottom bar -->
                    <div class="nav-bottom">
                        <div class="lang-switch">
                            <button type="button" @click.stop="switchLang('hu')" :class="{ active: locale === 'hu' }" class="lang-btn">HU</button>
                            <span class="lang-divider">/</span>
                            <button type="button" @click.stop="switchLang('en')" :class="{ active: locale === 'en' }" class="lang-btn">EN</button>
                        </div>
                        <div class="nav-socials">
                            <a href="https://github.com/papandras" target="_blank" rel="noopener">GH</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener">LI</a>
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

const navLinks = [
    { path: '/', key: 'home', label: 'HOME' },
    { path: '/about', key: 'about', label: 'ABOUT' },
    { path: '/experience', key: 'experience', label: 'EXPERIENCE' },
    { path: '/projects', key: 'projects', label: 'PROJECTS' },
    { path: '/services', key: 'services', label: 'SERVICES' },
    { path: '/skills', key: 'skills', label: 'SKILLS' },
    { path: '/contact', key: 'contact', label: 'CONTACT' },
]

const toggleMenu = () => {
    isOpen.value = !isOpen.value
    document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
    isOpen.value = false
    document.body.style.overflow = ''
}

const switchLang = (lang: string) => {
    setLocale(lang)
}
</script>

<style scoped>
/* ---- Toggle Button ---- */
.menu-toggle {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 100000;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: transparent;
    border: none;
    color: var(--text);
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.8rem 1.2rem;
    mix-blend-mode: difference;
    transition: all 0.4s var(--ease-out-expo);
}

.menu-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--gradient-accent);
    transition: transform 0.4s var(--ease-out-expo);
}

.menu-toggle:hover .menu-dot {
    transform: scale(1.8);
}

.menu-toggle.is-open {
    mix-blend-mode: normal;
}

.menu-toggle.is-open .menu-dot {
    background: var(--accent-end);
}

/* ---- Overlay ---- */
.nav-overlay {
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: rgba(5, 5, 5, 0.96);
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-overlay-inner {
    width: 100%;
    max-width: 900px;
    padding: 2rem var(--section-padding);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}

/* ---- Navigation Links ---- */
.nav-links {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.nav-link {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    padding: 0.5rem 0;
    text-decoration: none;
    transition: all 0.4s var(--ease-out-expo);
    border-bottom: 1px solid var(--border);
}

.nav-number {
    font-family: var(--font-body);
    font-size: 0.8rem;
    color: var(--text-dim);
    letter-spacing: 0.1em;
    min-width: 2rem;
    transition: color 0.4s ease;
}

.nav-text {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4.5vw, 4.5rem);
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1.5px var(--text-muted);
    text-transform: uppercase;
    line-height: 1.05;
    transition: all 0.4s var(--ease-out-expo);
}

.nav-link:hover .nav-text,
.nav-link.router-link-exact-active .nav-text {
    -webkit-text-stroke: 0px transparent;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateX(1rem);
}

.nav-link:hover .nav-number {
    color: var(--accent-start);
}

/* ---- Bottom Bar ---- */
.nav-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border);
    padding-top: 1.5rem;
}

.lang-switch {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.lang-btn {
    background: transparent;
    border: none;
    color: var(--text-dim);
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
    padding: 0.3rem;
}

.lang-btn:hover {
    color: var(--text);
}

.lang-btn.active {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.lang-divider {
    color: var(--text-dim);
    font-size: 1.1rem;
}

.nav-socials {
    display: flex;
    gap: 1.5rem;
}

.nav-socials a {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    color: var(--text-dim);
    transition: color 0.3s ease;
}

.nav-socials a:hover {
    color: var(--accent-start);
}

/* ---- Transition ---- */
.overlay-reveal-enter-active {
    transition: opacity 0.4s var(--ease-out-expo);
}

.overlay-reveal-leave-active {
    transition: opacity 0.3s ease;
}

.overlay-reveal-enter-from,
.overlay-reveal-leave-to {
    opacity: 0;
}

.overlay-reveal-enter-active .nav-link {
    animation: slideUp 0.5s var(--ease-out-expo) both;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ---- Responsive ---- */
@media (max-width: 1024px) {
    .nav-text {
        font-size: clamp(1.8rem, 3.5vw, 3.5rem);
    }

    .nav-link {
        padding: 0.4rem 0;
    }
}

@media (max-width: 768px) {
    .menu-toggle {
        top: 1.2rem;
        right: 1.2rem;
        padding: 0.8rem 1rem;
        font-size: 0.8rem;
    }

    .nav-overlay {
        align-items: flex-start;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .nav-overlay-inner {
        padding: 4.5rem var(--section-padding) 2rem;
        gap: 1rem;
    }

    .nav-link {
        padding: 0.45rem 0;
        gap: 1rem;
    }

    .nav-text {
        font-size: clamp(1.6rem, 7vw, 2.8rem);
    }

    .nav-number {
        font-size: 0.7rem;
        min-width: 1.5rem;
    }

    .nav-link:hover .nav-text,
    .nav-link.router-link-exact-active .nav-text {
        transform: translateX(0.5rem);
    }

    .nav-bottom {
        padding-top: 1rem;
    }

    .lang-btn {
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .nav-text {
        font-size: clamp(1.4rem, 8vw, 2rem);
    }

    .nav-link {
        padding: 0.4rem 0;
    }

    .nav-overlay-inner {
        padding: 4rem var(--section-padding) 1.5rem;
    }
}
</style>
