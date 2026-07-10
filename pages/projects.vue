<template>
    <div class="noir-page">
        <NuxtLink :to="localePath('/')" class="back-link">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') }}
        </NuxtLink>

        <!-- Hero -->
        <section class="page-hero">
            <h1 class="hero-title">
                <span class="outline-text" data-aos="fade-down">{{ $t('hero_projects_1') }}</span>
                <span class="text-accent" data-aos="fade-up">{{ $t('hero_projects_2') }}</span>
            </h1>
        </section>

        <!-- Project List -->
        <section class="section projects-section">
            <div class="projects-grid">
                <div v-for="(project, i) in projects" :key="project.title"
                    class="project-card"
                    data-aos="fade-up"
                    :data-aos-delay="i * 100">

                    <!-- Thumbnail -->
                    <div class="project-img-wrap">
                        <img :src="project.img_thumbnail_url" :alt="project.title" class="project-img" loading="lazy">
                        <div class="img-overlay">
                            <span class="overlay-number">0{{ i + 1 }}</span>
                        </div>
                    </div>

                    <!-- Info -->
                    <div class="project-info">
                        <div class="project-header">
                            <h3 class="project-title">{{ project.title }}</h3>
                            <span class="project-year">{{ project.year }}</span>
                        </div>

                        <p class="project-desc">{{ project.description }}</p>

                        <div class="project-tech">
                            <span v-for="tech in project.technologies" :key="tech" class="tech-chip">{{ tech }}</span>
                        </div>

                        <div class="project-links">
                            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="project-link">
                                <i class="fa-brands fa-github"></i> CODE
                            </a>
                            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="project-link">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> LIVE
                            </a>
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

const projects = [
    {
        title: "Portfolio Weboldal",
        description: "Personal developer portfolio website built with Nuxt 3 and TypeScript, featuring multi-language support and modern UI design.",
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
.noir-page {
    background-color: var(--bg);
    min-height: 100vh;
    padding-bottom: 6rem;
}

.back-link {
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 100;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    color: var(--text);
    mix-blend-mode: difference;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.back-link:hover { color: var(--accent-start); }

.page-hero {
    min-height: 55vh;
    display: flex;
    align-items: flex-end;
    padding: 0 var(--section-padding) 4rem;
}

.hero-title {
    display: flex;
    flex-direction: column;
    font-size: clamp(4rem, 12vw, 10rem);
    letter-spacing: -0.04em;
    line-height: 0.88;
}

.section {
    padding: 5rem var(--section-padding);
    border-top: 1px solid var(--border);
}

/* Projects Grid */
.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    max-width: 1400px;
    margin: 0 auto;
}

.project-card {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    align-items: center;
}

.project-card:nth-child(even) {
    direction: rtl;
}

.project-card:nth-child(even) > * {
    direction: ltr;
}

/* Image */
.project-img-wrap {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--bg-card);
    transition: border-color 0.4s ease;
}

.project-card:hover .project-img-wrap {
    border-color: var(--accent-start);
}

.project-img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    filter: grayscale(80%) brightness(0.7);
    transition: all 0.6s var(--ease-out-expo);
    transform: scale(1.05);
}

.project-card:hover .project-img {
    filter: grayscale(0%) brightness(1);
    transform: scale(1);
}

.img-overlay {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2;
}

.overlay-number {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
}

/* Info */
.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.project-title {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;
    line-height: 1.1;
}

.project-year {
    font-family: var(--font-body);
    font-size: 0.85rem;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
}

.project-desc {
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.tech-chip {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.4rem 0.8rem;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: all 0.3s ease;
}

.project-card:hover .tech-chip {
    border-color: var(--accent-start);
    color: var(--text);
}

.project-links {
    display: flex;
    gap: 2rem;
}

.project-link {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
    border-bottom: 1px solid transparent;
    padding-bottom: 2px;
}

.project-link:hover {
    color: var(--accent-start);
    border-bottom-color: var(--accent-start);
}

/* Responsive */

@media (max-width: 1024px) {
    .page-hero {
        min-height: 40vh;
        padding-top: 6rem;
    }

    .project-card,
    .project-card:nth-child(even) {
        grid-template-columns: 1fr;
        direction: ltr;
    }

    .projects-grid {
        gap: 4rem;
    }

    .project-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}

@media (max-width: 768px) {
    .back-link {
        top: 1.2rem;
        left: 1.2rem;
        font-size: 0.75rem;
    }

    .page-hero {
        min-height: 35vh;
        padding: 6rem var(--section-padding) 2rem;
    }

    .hero-title {
        font-size: clamp(3rem, 12vw, 5rem);
    }

    .section {
        padding: 3rem var(--section-padding);
    }

    .projects-grid {
        gap: 3rem;
    }

    .project-card {
        gap: 1.5rem;
    }

    .project-title {
        font-size: 1.3rem;
    }

    .project-desc {
        font-size: 0.9rem;
    }

    .project-img {
        filter: grayscale(0%) brightness(1);
    }

    .overlay-number {
        font-size: 2rem;
    }

    .tech-chip {
        font-size: 0.65rem;
        padding: 0.3rem 0.6rem;
    }

    .project-links {
        gap: 1.5rem;
    }

    .project-link {
        font-size: 0.8rem;
    }
}

@media (max-width: 480px) {
    .projects-grid {
        gap: 2.5rem;
    }
}
</style>
