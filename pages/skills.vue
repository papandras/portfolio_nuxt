<template>
    <div class="noir-page">
        <NuxtLink :to="localePath('/')" class="back-link">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') }}
        </NuxtLink>

        <!-- Hero -->
        <section class="page-hero">
            <h1 class="hero-title">
                <span class="outline-text" data-aos="fade-down">TECH</span>
                <span class="text-accent" data-aos="fade-up">STACK.</span>
            </h1>
        </section>

        <!-- Skills -->
        <section class="section skills-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">01</span>
                    <h2 class="section-label">{{ $t('skills') }}</h2>
                </div>
                <div class="split-content">
                    <div class="skills-cloud">
                        <span v-for="(skill, i) in allSkills" :key="skill.name"
                            class="skill-tag"
                            :class="{ 'featured': skill.featured }"
                            data-aos="zoom-in"
                            :data-aos-delay="i * 40">
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
    // Primary Backend
    { name: 'Node.js', featured: true },
    { name: 'GraphQL', featured: true },
    { name: 'Apollo Federation', featured: true },
    { name: 'TypeScript', featured: true },
    { name: 'PHP', featured: true },
    { name: 'Symfony', featured: false },
    { name: 'Express', featured: false },
    // Search & Data
    { name: 'Elasticsearch', featured: true },
    { name: 'MARC21', featured: false },
    { name: 'Prisma', featured: true },
    // Databases
    { name: 'PostgreSQL', featured: true },
    { name: 'MongoDB', featured: false },
    { name: 'MySQL', featured: false },
    { name: 'Redis', featured: false },
    // Messaging / Workflow
    { name: 'RabbitMQ', featured: false },
    { name: 'Camunda', featured: false },
    // Frontend
    { name: 'React', featured: true },
    { name: 'Next.js', featured: false },
    { name: 'Material-UI', featured: false },
    { name: 'Vue.js', featured: false },
    { name: 'Nuxt', featured: false },
    { name: 'Gatsby', featured: false },
    // CMS
    { name: 'WordPress', featured: true },
    // Auth / Ops
    { name: 'Keycloak', featured: false },
    { name: 'Docker', featured: false },
    { name: 'Git', featured: true },
    { name: 'Electron', featured: false },
    // AI
    { name: 'AI-Assisted Dev', featured: true },
    // Web Standards
    { name: 'HTML & CSS', featured: false },
    { name: 'REST APIs', featured: false },
    { name: 'WCAG', featured: false },
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

.split-label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.section-number {
    font-family: var(--font-body);
    font-size: 0.8rem;
    color: var(--text-dim);
    letter-spacing: 0.15em;
}

.section-label {
    font-size: 1.1rem;
    letter-spacing: 0.1em;
    font-weight: 600;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Skills Cloud */
.skills-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    border-top: 1px solid var(--border);
    padding-top: 2rem;
}

.skill-tag {
    font-family: var(--font-display);
    font-size: clamp(1.2rem, 2.5vw, 2.5rem);
    font-weight: 700;
    padding: 0.8rem 1.8rem;
    border: 1px solid var(--border);
    color: var(--text-muted);
    text-transform: uppercase;
    transition: all 0.4s var(--ease-out-expo);
    position: relative;
    overflow: hidden;
}

.skill-tag::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient-accent);
    opacity: 0;
    transition: opacity 0.4s var(--ease-out-expo);
    z-index: -1;
}

.skill-tag:hover {
    border-color: transparent;
    color: #fff;
    transform: scale(1.08);
    box-shadow: 0 8px 30px var(--accent-glow);
}

.skill-tag:hover::before {
    opacity: 1;
}

.skill-tag.featured {
    border-color: var(--border-hover);
    color: var(--text);
}

/* Responsive */

@media (max-width: 1024px) {
    .page-hero {
        min-height: 40vh;
        padding-top: 6rem;
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

    .skills-cloud {
        gap: 0.6rem;
    }

    .skill-tag {
        padding: 0.5rem 1rem;
        font-size: 1rem;
    }

    .skill-tag:hover {
        transform: scale(1.03);
    }
}

@media (max-width: 480px) {
    .skill-tag {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
    }

    .skills-cloud {
        gap: 0.5rem;
    }
}
</style>
