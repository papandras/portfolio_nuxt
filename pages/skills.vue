<template>
    <div class="avant-garde-page">
        <NuxtLink :to="localePath('/')" class="back-btn">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') || 'BACK TO HOME' }}
        </NuxtLink>

        <section class="section skills-hero">
            <h1 class="huge-text outline-text" data-aos="fade-down">TECH</h1>
            <h1 class="huge-text text-accent" data-aos="fade-up">STACK.</h1>
        </section>

        <section class="section skills-content">
            <div class="grid-layout">
                <div class="col-left">
                    <h2 class="section-title">{{ $t('skills') || 'ARSENAL' }}</h2>
                </div>
                <div class="col-right">
                    <div class="brutal-tag-cloud">
                        <span v-for="skill in allSkills" :key="skill.name" class="brutal-tag" data-aos="zoom-in">
                            {{ skill.name }}
                        </span>
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

const allSkills = [
    { name: "Node.js" }, { name: "TypeScript" }, { name: "Vue.js" },
    { name: "Nuxt 3" }, { name: "React.js" }, { name: "PHP" },
    { name: "C#" }, { name: "PostgreSQL" }, { name: "MongoDB" },
    { name: "GraphQL" }, { name: "Docker" }, { name: "Git" },
    { name: "WordPress" }, { name: "Microservices" }, { name: "HTML & CSS" }
]
</script>

<style scoped>
.avant-garde-page {
    background-color: var(--bg-color);
    min-height: 100vh;
    padding-bottom: 5rem;
}

.back-btn {
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 100;
    color: var(--text-color);
    font-family: var(--font-body);
    font-weight: 600;
    letter-spacing: 0.1em;
    mix-blend-mode: difference;
    transition: color 0.3s ease;
}

.back-btn:hover {
    color: var(--accent);
}

.section {
    padding: 2rem 5vw;
}

.skills-hero {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10rem;
}

.huge-text {
    font-size: clamp(3rem, 10vw, 8rem);
    letter-spacing: -0.04em;
    line-height: 0.9;
}

.outline-text {
    color: transparent;
    -webkit-text-stroke: 2px var(--text-color);
}

.grid-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    font-family: var(--font-body);
    font-weight: 500;
    color: var(--accent);
}

.brutal-tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    border-top: 2px solid #333;
    padding-top: 2rem;
}

.brutal-tag {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-weight: 700;
    padding: 1rem 2rem;
    border: 2px solid #333;
    color: var(--text-color);
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.brutal-tag:hover {
    border-color: var(--accent);
    color: var(--bg-color);
    background-color: var(--accent);
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .grid-layout { grid-template-columns: 1fr; gap: 2rem; }
    .brutal-tag { padding: 0.5rem 1rem; font-size: 1.5rem; }
}
</style>