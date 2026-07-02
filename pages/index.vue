<template>
    <div class="avant-garde-container" ref="container">
        <!-- Sticky Hero Section -->
        <section class="section hero-section">
            <div class="hero-content">
                <h1 class="massive-text" data-aos="fade-up">ANDRÁS</h1>
                <h1 class="massive-text text-accent" data-aos="fade-up" data-aos-delay="200">PAP.</h1>
                <p class="role-text" data-aos="fade-left" data-aos-delay="400">CREATIVE DEVELOPER</p>
            </div>
            <div class="scroll-down">
                <span>SCROLL</span>
                <div class="line"></div>
            </div>
        </section>

        <!-- About Section (Overlaps Hero) -->
        <section class="section about-section">
            <div class="grid-layout">
                <div class="col-left" data-aos="fade-right">
                    <h2 class="section-title">01 / {{ $t('about') || 'ABOUT' }}</h2>
                </div>
                <div class="col-right" data-aos="fade-up">
                    <p class="big-paragraph">
                        I craft digital experiences that live at the intersection of bold design and flawless engineering. No compromises, just impact.
                    </p>
                    <NuxtLink :to="localePath('/about')" class="brutal-btn">READ FULL BIO</NuxtLink>
                </div>
            </div>
        </section>

        <!-- Experience & Skills Section -->
        <section class="section dark-section">
            <div class="marquee-wrapper">
                <div class="marquee">
                    <span>VUE • NUXT • TYPESCRIPT • GSAP • VUE • NUXT • TYPESCRIPT • GSAP •</span>
                </div>
            </div>
            
            <div class="grid-layout mt-large">
                <div class="col-left" data-aos="fade-right">
                    <h2 class="section-title text-accent">02 / {{ $t('experience') || 'EXPERTISE' }}</h2>
                </div>
                <div class="col-right" data-aos="fade-left">
                    <ul class="brutal-list">
                        <li>
                            <span class="year">2023-PRESENT</span>
                            <h3>Senior Frontend</h3>
                        </li>
                        <li>
                            <span class="year">2021-2023</span>
                            <h3>Fullstack Dev</h3>
                        </li>
                    </ul>
                    <NuxtLink :to="localePath('/experience')" class="brutal-btn mt-normal">VIEW TIMELINE</NuxtLink>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="section projects-section">
            <div class="full-width-content text-center" data-aos="zoom-in">
                <h2 class="massive-text outline-text">{{ $t('projects') || 'SELECTED' }}</h2>
                <h2 class="massive-text">WORKS</h2>
                <NuxtLink :to="localePath('/projects')" class="brutal-btn-massive mt-normal">EXPLORE ALL</NuxtLink>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="section contact-section">
            <div class="grid-layout h-full items-end">
                <div class="col-full" data-aos="fade-up">
                    <h2 class="huge-text">LET'S BUILD</h2>
                    <h2 class="huge-text text-accent">SOMETHING.</h2>
                    <div class="contact-footer">
                        <NuxtLink :to="localePath('/contact')" class="brutal-btn">SAY HELLO</NuxtLink>
                        <div class="socials">
                            <a href="#">GH</a>
                            <a href="#">LI</a>
                            <a href="#">TW</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta, useLocalePath } from '#imports'

definePageMeta({ layout: 'default' })
const localePath = useLocalePath()
</script>

<style scoped>
.avant-garde-container {
    background-color: var(--bg-color);
}

/* Sections */
.section {
    min-height: 100vh;
    padding: 2rem 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    top: 0;
    box-shadow: 0 -10px 30px rgba(0,0,0,0.5);
}

.hero-section {
    background-color: var(--bg-color);
    z-index: 1;
}

.about-section {
    background-color: #111; /* Slight contrast */
    z-index: 2;
}

.dark-section {
    background-color: var(--bg-color);
    z-index: 3;
    padding-top: 5rem;
}

.projects-section {
    background-color: var(--accent);
    color: var(--bg-color);
    z-index: 4;
}

.contact-section {
    background-color: #050505;
    z-index: 5;
    padding-bottom: 5rem;
}

/* Typography */
.massive-text {
    font-size: clamp(4rem, 15vw, 12rem);
    letter-spacing: -0.05em;
    line-height: 0.85;
}

.huge-text {
    font-size: clamp(3rem, 10vw, 8rem);
    letter-spacing: -0.04em;
    line-height: 0.9;
}

.outline-text {
    color: transparent;
    -webkit-text-stroke: 2px var(--bg-color);
}

.role-text {
    font-family: var(--font-body);
    font-size: clamp(1rem, 2vw, 1.5rem);
    letter-spacing: 0.2em;
    margin-top: 2rem;
    color: #888;
}

.section-title {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    font-family: var(--font-body);
    font-weight: 500;
}

.big-paragraph {
    font-size: clamp(1.5rem, 3vw, 3rem);
    line-height: 1.3;
    font-family: var(--font-display);
    font-weight: 600;
    margin-bottom: 3rem;
}

/* Layout */
.grid-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}

.col-full {
    grid-column: 1 / -1;
}

.h-full {
    height: 100%;
}

.items-end {
    align-content: end;
}

.text-center {
    text-align: center;
}

.mt-large { margin-top: 10rem; }
.mt-normal { margin-top: 3rem; }

/* Brutalist Buttons */
.brutal-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: transparent;
    border: 2px solid currentColor;
    color: inherit;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.3s ease;
    cursor: none;
}

.brutal-btn:hover {
    background-color: currentColor;
    color: var(--bg-color);
}

.contact-section .brutal-btn:hover {
    color: var(--accent) !important;
    background-color: var(--text-color);
    border-color: var(--text-color);
}

.brutal-btn-massive {
    display: inline-block;
    padding: 1.5rem 3rem;
    background-color: var(--bg-color);
    color: var(--accent);
    font-size: 2rem;
    font-family: var(--font-display);
    border: none;
    transition: transform 0.3s ease;
    cursor: none;
}

.brutal-btn-massive:hover {
    transform: scale(1.05);
}

/* Lists */
.brutal-list {
    list-style: none;
    border-top: 2px solid #333;
}

.brutal-list li {
    padding: 2rem 0;
    border-bottom: 2px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brutal-list h3 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
}

.year {
    font-family: var(--font-body);
    color: #888;
}

/* Marquee */
.marquee-wrapper {
    width: 100vw;
    margin-left: -5vw;
    overflow: hidden;
    white-space: nowrap;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    padding: 1rem 0;
}

.marquee {
    display: inline-block;
    animation: marquee 15s linear infinite;
    font-size: 2rem;
    font-family: var(--font-display);
    color: #555;
}

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

/* Scroll indicator */
.scroll-down {
    position: absolute;
    bottom: 3rem;
    right: 5vw;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: var(--font-body);
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    transform: rotate(90deg);
    transform-origin: right center;
}

.scroll-down .line {
    width: 50px;
    height: 1px;
    background-color: var(--text-color);
}

/* Contact Footer */
.contact-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
    border-top: 1px solid #333;
    padding-top: 2rem;
}

.socials {
    display: flex;
    gap: 2rem;
    font-family: var(--font-body);
}

@media (max-width: 768px) {
    .grid-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .scroll-down {
        display: none;
    }
}
</style>