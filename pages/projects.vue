<template>
    <div class="avant-garde-page">
        <NuxtLink :to="localePath('/')" class="back-btn">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') || 'BACK TO HOME' }}
        </NuxtLink>

        <section class="section projects-hero">
            <h1 class="huge-text outline-text" data-aos="fade-down">{{ $t('projects') || 'SELECTED' }}</h1>
            <h1 class="huge-text text-accent" data-aos="fade-up">WORKS.</h1>
        </section>

        <section class="section projects-list">
            <div v-for="(project, index) in projects" :key="project.title" class="project-item" data-aos="fade-up">
                <div class="project-number">{{ String(index + 1).padStart(2, '0') }}</div>
                
                <div class="project-content">
                    <h2 class="project-title">{{ project.title }}</h2>
                    <p class="project-year">{{ project.year }}</p>
                    <p class="project-desc">{{ project.description }}</p>
                    
                    <div class="project-tech mt-small">
                        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                            {{ tech }}
                        </span>
                    </div>
                    
                    <div class="project-links mt-normal">
                        <a v-if="project.link" :href="project.link" target="_blank" class="brutal-link">
                            LIVE SITE <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a v-if="project.github" :href="project.github" target="_blank" class="brutal-link">
                            GITHUB <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                
                <div class="project-img-wrapper">
                    <img :src="project.img_thumbnail_url" :alt="project.title" class="project-img" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta, useLocalePath } from '#imports'

definePageMeta({ layout: 'default' })
const localePath = useLocalePath()

const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A personal portfolio website built using Nuxt 3 and TypeScript to showcase my skills, experience, and projects.",
        github: "https://github.com/papandras/portfolio_nuxt",
        link: "https://papandras.hu/",
        year: "2023",
        technologies: ["Nuxt 3", "TypeScript", "Vue 3", "CSS"],
        img_thumbnail_url: "https://i.kek.sh/Cnt92uGyo6G.png"
    },
    {
        title: "BDR Honlap",
        description: "A professional company showcase website built on WordPress using PHP, jQuery, and JavaScript technologies to manage painting, decorating, and home renovation services.",
        github: "",
        link: "https://bdrandbdr.hu/",
        year: "2025",
        technologies: ["WordPress", "PHP", "jQuery", "JavaScript"],
        img_thumbnail_url: "https://i.kek.sh/it2B3p4z5Sc.png"
    },
    {
        title: "Értem magamat Honlap",
        description: "Professional coaching and psychology related website setup.",
        github: "",
        link: "https://ertemmagamat.hu/",
        year: "2025",
        technologies: ["WordPress"],
        img_thumbnail_url: "https://i.kek.sh/37c0FEdHset.png"
    },
    {
        title: "DAKA Möbel Produkt WebShop",
        description: "A professional e-commerce platform, implemented on a WordPress and WooCommerce foundation, built on core PHP and JavaScript/jQuery technologies.",
        github: "",
        link: "https://mobelprodukt.eu/",
        year: "2025",
        technologies: ["WordPress", "WooCommerce"],
        img_thumbnail_url: "https://i.kek.sh/V51w5UWC6E9.jpg"
    }
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

.projects-hero {
    min-height: 60vh;
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

.projects-list {
    display: flex;
    flex-direction: column;
    gap: 10rem;
    max-width: 1600px;
    margin: 0 auto;
}

.project-item {
    display: grid;
    grid-template-columns: 100px 1fr 1fr;
    gap: 4rem;
    align-items: center;
    border-top: 2px solid #333;
    padding-top: 4rem;
}

.project-number {
    font-size: 4rem;
    font-family: var(--font-display);
    color: transparent;
    -webkit-text-stroke: 1px #555;
    align-self: flex-start;
}

.project-title {
    font-size: clamp(2rem, 4vw, 4rem);
    font-family: var(--font-display);
    line-height: 1;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.project-year {
    font-family: var(--font-body);
    color: var(--accent);
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.project-desc {
    font-family: var(--font-body);
    font-size: 1.2rem;
    line-height: 1.6;
    color: #ccc;
    margin-bottom: 2rem;
}

.tech-tag {
    display: inline-block;
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: var(--text-color);
    color: var(--bg-color);
    text-transform: uppercase;
}

.project-links {
    display: flex;
    gap: 2rem;
}

.brutal-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-color);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.brutal-link:hover {
    color: var(--accent);
    border-bottom-color: var(--accent);
}

.project-img-wrapper {
    width: 100%;
    overflow: hidden;
    border: 2px solid #333;
    transition: border-color 0.3s ease;
}

.project-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 16 / 9;
    filter: grayscale(100%);
    transition: all 0.5s ease;
    transform: scale(1.05);
}

.project-item:hover .project-img-wrapper {
    border-color: var(--text-color);
}

.project-item:hover .project-img {
    filter: grayscale(0%);
    transform: scale(1);
}

.mt-small { margin-top: 1rem; }
.mt-normal { margin-top: 3rem; }

@media (max-width: 1024px) {
    .project-item {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    .project-number { display: none; }
}
</style>