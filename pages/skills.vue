<template>
    <div class="noir-page">
        <NuxtLink :to="localePath('/')" class="back-link">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') }}
        </NuxtLink>

        <!-- Hero -->
        <section class="page-hero">
            <h1 class="hero-title">
                <span class="outline-text" data-aos="fade-down">{{ $t('hero_skills_1') }}</span>
                <span class="text-accent" data-aos="fade-up">{{ $t('hero_skills_2') }}</span>
            </h1>
        </section>

        <!-- Categorized Skills -->
        <section v-for="(cat, ci) in categories" :key="cat.key"
            class="section skill-section"
            :class="{ 'alt-bg': ci % 2 === 1 }">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">{{ String(ci + 1).padStart(2, '0') }}</span>
                    <h2 class="section-label">{{ $t(cat.key) }}</h2>
                </div>
                <div class="split-content">
                    <div class="skills-cloud">
                        <span v-for="(skill, i) in cat.items" :key="skill.name"
                            class="skill-tag"
                            :class="{ 'featured': skill.featured }"
                            data-aos="zoom-in"
                            :data-aos-delay="i * 30">
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

const categories = [
    {
        key: 'cat_languages',
        items: [
            { name: 'JavaScript', featured: true },
            { name: 'Node.js', featured: true },
            { name: 'PHP', featured: true },
            { name: 'TypeScript', featured: true },
            { name: 'SQL', featured: false },
        ]
    },
    {
        key: 'cat_backend',
        items: [
            { name: 'Apollo GraphQL Federation', featured: true },
            { name: 'Apollo Server', featured: true },
            { name: 'Express', featured: false },
            { name: 'GraphQL', featured: true },
            { name: 'REST', featured: false },
            { name: 'Symfony', featured: true },
        ]
    },
    {
        key: 'cat_search',
        items: [
            { name: 'Elasticsearch', featured: true },
            { name: 'Elastica', featured: false },
            { name: 'Query DSL', featured: false },
            { name: 'MARC21', featured: true },
            { name: 'HUNMARC', featured: false },
        ]
    },
    {
        key: 'cat_orm',
        items: [
            { name: 'Prisma', featured: true },
            { name: 'MongoDB Driver', featured: false },
            { name: 'Doctrine ODM', featured: false },
            { name: 'GraphQL Datasources', featured: false },
        ]
    },
    {
        key: 'cat_databases',
        items: [
            { name: 'PostgreSQL', featured: true },
            { name: 'MySQL', featured: false },
            { name: 'MongoDB', featured: true },
            { name: 'Elasticsearch', featured: false },
            { name: 'Redis (ioredis)', featured: false },
        ]
    },
    {
        key: 'cat_messaging',
        items: [
            { name: 'RabbitMQ', featured: true },
            { name: 'amqplib / rascal', featured: false },
            { name: 'Camunda', featured: true },
        ]
    },
    {
        key: 'cat_frontend',
        items: [
            { name: 'React', featured: true },
            { name: 'Material-UI (MUI)', featured: true },
            { name: 'Apollo Client', featured: false },
            { name: 'Next.js', featured: true },
            { name: 'Gatsby', featured: false },
            { name: 'React Native', featured: false },
            { name: 'Electron', featured: true },
            { name: 'Vue.js', featured: false },
            { name: 'Nuxt', featured: false },
            { name: 'Lexical', featured: false },
            { name: 'Final Form', featured: false },
            { name: 'i18next', featured: false },
        ]
    },
    {
        key: 'cat_cms',
        items: [
            { name: 'WordPress', featured: true },
            { name: 'PHP Themes', featured: false },
            { name: 'Custom Plugins', featured: false },
        ]
    },
    {
        key: 'cat_auth',
        items: [
            { name: 'Keycloak', featured: true },
            { name: 'JWT', featured: false },
            { name: 'graphql-shield', featured: false },
        ]
    },
    {
        key: 'cat_storage',
        items: [
            { name: 'MinIO / S3', featured: false },
            { name: 'PDF (react-pdf, pdf-merger)', featured: false },
            { name: 'ExcelJS', featured: true },
            { name: 'xlsx', featured: false },
            { name: 'ePub', featured: false },
        ]
    },
    {
        key: 'cat_integrations',
        items: [
            { name: 'Billingo', featured: true },
            { name: 'Nodemailer', featured: false },
            { name: 'GTM / Gemius', featured: false },
        ]
    },
    {
        key: 'cat_ops',
        items: [
            { name: 'Docker', featured: true },
            { name: 'New Relic', featured: false },
            { name: 'Git / Bitbucket', featured: true },
            { name: 'GraphQL Code Generator', featured: false },
            { name: 'OpenAPI / YAML', featured: false },
        ]
    },
    {
        key: 'cat_ai',
        items: [
            { name: 'Claude Code', featured: true },
            { name: 'AI-Assisted Workflow', featured: true },
        ]
    },
]
</script>

<style scoped>
.noir-page {
    background-color: var(--bg);
    min-height: 100vh;
    min-height: 100svh;
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
    padding: 3.5rem var(--section-padding);
    border-top: 1px solid var(--border);
}

.alt-bg {
    background: var(--bg-elevated);
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
    gap: 0.8rem;
    border-top: 1px solid var(--border);
    padding-top: 1.5rem;
}

.skill-tag {
    font-family: var(--font-display);
    font-size: clamp(0.85rem, 1.6vw, 1.4rem);
    font-weight: 700;
    padding: 0.6rem 1.4rem;
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
    transform: scale(1.05);
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
        padding: 2.5rem var(--section-padding);
    }

    .skills-cloud {
        gap: 0.5rem;
    }

    .skill-tag {
        padding: 0.4rem 0.9rem;
        font-size: 0.85rem;
    }

    .skill-tag:hover {
        transform: scale(1.03);
    }
}

@media (max-width: 480px) {
    .skill-tag {
        padding: 0.35rem 0.7rem;
        font-size: 0.8rem;
    }

    .skills-cloud {
        gap: 0.4rem;
    }
}
</style>
