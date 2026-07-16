<template>
    <div class="noir-page">
        <NuxtLink :to="localePath('/')" class="back-link">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') }}
        </NuxtLink>

        <!-- Hero -->
        <section class="page-hero">
            <h1 class="hero-title">
                <span class="outline-text" data-aos="fade-down">{{ $t('hero_exp_1') }}</span>
                <span class="text-accent" data-aos="fade-up">{{ $t('hero_exp_2') }}</span>
            </h1>
        </section>

        <!-- Main Employment -->
        <section class="section employer-section">
            <div class="employer-header" data-aos="fade-up">
                <div class="employer-meta">
                    <span class="employer-year">2022 — {{ $t('present').toUpperCase() }}</span>
                    <span class="employer-badge">{{ $t('present') }}</span>
                </div>
                <h2 class="employer-name">{{ $t('company') }}</h2>
                <p class="employer-role">{{ $t('company_role') }}</p>
                <p class="employer-desc">{{ $t('about_summary_1') }}</p>
            </div>

            <!-- Project Cards inside company -->
            <div class="projects-timeline">
                <div v-for="(proj, i) in companyProjects" :key="proj.title"
                    class="project-block"
                    data-aos="fade-up"
                    :data-aos-delay="i * 60">
                    <div class="project-indicator">
                        <span class="project-num">{{ String(i + 1).padStart(2, '0') }}</span>
                        <div class="project-line"></div>
                    </div>
                    <div class="project-card">
                        <div class="project-card-header">
                            <h3 class="project-card-title">{{ proj.title }}</h3>
                            <div class="project-card-meta">
                                <span class="project-card-year">{{ proj.year }}</span>
                                <span v-if="proj.commits" class="project-card-commits">
                                    <i class="fa-solid fa-code-commit"></i> {{ proj.commits }}
                                </span>
                            </div>
                        </div>
                        <p class="project-card-role">{{ proj.role }}</p>
                        <p class="project-card-desc">{{ proj.description }}</p>
                        <ul v-if="proj.highlights.length" class="project-highlights">
                            <li v-for="h in proj.highlights" :key="h">{{ h }}</li>
                        </ul>
                        <div class="project-card-skills">
                            <span v-for="skill in proj.skills" :key="skill" class="skill-chip">{{ skill }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education -->
        <section class="section education-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">02</span>
                    <h2 class="section-label">{{ $t('education').toUpperCase() }}</h2>
                </div>
                <div class="split-content">
                    <div class="timeline">
                        <div class="timeline-item" data-aos="fade-up">
                            <div class="timeline-dot"></div>
                            <div class="timeline-card">
                                <div class="timeline-header">
                                    <h3 class="timeline-title">{{ $t('neumann') }}</h3>
                                    <span class="timeline-year">2017 — 2022</span>
                                </div>
                                <div class="timeline-skills">
                                    <span v-for="skill in ['HTML', 'CSS', 'JavaScript', 'PHP', 'C#', 'Vue.js']" :key="skill" class="skill-chip">{{ skill }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta, useLocalePath, useI18n } from '#imports'

definePageMeta({ layout: 'default' })
const localePath = useLocalePath()
const { t } = useI18n()

const companyProjects = computed(() => [
    {
        title: t('exp_proj1_title'),
        year: '2022 — ' + t('present'),
        role: t('exp_proj1_role'),
        commits: '~1300',
        description: t('exp_proj1_desc'),
        highlights: [
            t('exp_proj1_h1'),
            t('exp_proj1_h2'),
            t('exp_proj1_h3'),
            t('exp_proj1_h4'),
            t('exp_proj1_h5'),
        ],
        skills: ['Apollo Federation', 'Prisma', 'PostgreSQL', 'Elasticsearch', 'RabbitMQ', 'Camunda', 'Billingo', 'ExcelJS', 'PDF']
    },
    {
        title: t('exp_proj2_title'),
        year: '2022 — ' + t('present'),
        role: t('exp_proj2_role'),
        commits: '~140+',
        description: t('exp_proj2_desc'),
        highlights: [
            t('exp_proj2_h1'),
            t('exp_proj2_h2'),
            t('exp_proj2_h3'),
        ],
        skills: ['GraphQL', 'AMQP', 'React', 'MUI', 'Gatsby', 'MongoDB', 'Elasticsearch', 'MARC21', 'i18n']
    },
    {
        title: t('exp_proj3_title'),
        year: '2022 — 2024',
        role: t('exp_proj3_role'),
        commits: '~150',
        description: t('exp_proj3_desc'),
        highlights: [
            t('exp_proj3_h1'),
            t('exp_proj3_h2'),
            t('exp_proj3_h3'),
            t('exp_proj3_h4'),
        ],
        skills: ['Symfony', 'PHP', 'Elasticsearch', 'Elastica', 'MARC21', 'HUNMARC', 'Query DSL']
    },
    {
        title: t('exp_proj4_title'),
        year: '2025 — ' + t('present'),
        role: t('exp_proj4_role'),
        commits: '~470',
        description: t('exp_proj4_desc'),
        highlights: [
            t('exp_proj4_h1'),
            t('exp_proj4_h2'),
            t('exp_proj4_h3'),
            t('exp_proj4_h4'),
        ],
        skills: ['WordPress', 'PHP', 'JavaScript', 'Keycloak', 'WCAG', 'GTM', 'Gemius']
    },
    {
        title: t('exp_proj5_title'),
        year: '2026',
        role: t('exp_proj5_role'),
        commits: null,
        description: t('exp_proj5_desc'),
        highlights: [
            t('exp_proj5_h1'),
            t('exp_proj5_h2'),
        ],
        skills: ['Next.js', 'TypeScript', 'React', 'MUI', 'Keycloak', 'React Query', 'ISR']
    },
    {
        title: t('exp_proj6_title'),
        year: '2022 — ' + t('present'),
        role: t('exp_proj6_role'),
        commits: null,
        description: t('exp_proj6_desc'),
        highlights: [
            t('exp_proj6_h1'),
        ],
        skills: ['Electron', 'React Native', 'ePub', 'PDF']
    },
    {
        title: t('exp_proj7_title'),
        year: '',
        role: t('exp_proj7_role'),
        commits: null,
        description: '',
        highlights: [
            t('exp_proj7_h1'),
            t('exp_proj7_h2'),
        ],
        skills: ['Keycloak', 'S3', 'MinIO', 'PDF']
    },
])
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
    padding: 5rem var(--section-padding);
    border-top: 1px solid var(--border);
}

/* ===== Employer Header ===== */
.employer-header {
    max-width: 1000px;
    margin-bottom: 4rem;
}

.employer-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.employer-year {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--text-dim);
    letter-spacing: 0.1em;
}

.employer-badge {
    font-family: var(--font-display);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.25rem 0.8rem;
    background: var(--gradient-accent);
    color: #fff;
    border-radius: 2px;
}

.employer-name {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 0.5rem;
}

.employer-role {
    font-family: var(--font-body);
    font-size: 1.1rem;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.employer-desc {
    font-size: 1.05rem;
    color: var(--text-muted);
    line-height: 1.7;
    max-width: 800px;
}

/* ===== Projects Timeline ===== */
.projects-timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1100px;
}

.project-block {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 0;
}

.project-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
}

.project-num {
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--text-dim);
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
}

.project-line {
    width: 2px;
    flex: 1;
    background: linear-gradient(180deg, var(--accent-start), transparent);
    opacity: 0.3;
}

.project-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 2rem 2.5rem;
    transition: all 0.4s var(--ease-out-expo);
}

.project-card:hover {
    border-color: var(--accent-start);
    box-shadow: 0 4px 30px var(--accent-glow);
    transform: translateX(4px);
}

.project-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.5rem;
}

.project-card-title {
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2vw, 1.6rem);
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;
    line-height: 1.2;
}

.project-card-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
}

.project-card-year {
    font-family: var(--font-body);
    font-size: 0.8rem;
    color: var(--text-dim);
    letter-spacing: 0.05em;
    white-space: nowrap;
}

.project-card-commits {
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    white-space: nowrap;
}

.project-card-role {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--accent-start);
    font-weight: 500;
    margin-bottom: 1rem;
    font-style: italic;
}

.project-card-desc {
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.project-highlights {
    margin-bottom: 1.5rem;
    padding-left: 0;
}

.project-highlights li {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.5;
    padding: 0.4rem 0;
    padding-left: 1.2rem;
    position: relative;
    border-bottom: 1px solid rgba(30, 30, 42, 0.5);
}

.project-highlights li:last-child {
    border-bottom: none;
}

.project-highlights li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent-start);
    font-weight: 700;
    font-size: 0.8rem;
}

.project-card-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
}

.skill-chip {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.35rem 0.7rem;
    border: 1px solid var(--border);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: all 0.3s ease;
}

.project-card:hover .skill-chip {
    border-color: var(--accent-start);
    color: var(--text);
}

/* ===== Education (grid-split reuse) ===== */
.education-section {
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

.timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    padding-left: 3rem;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, var(--accent-start), var(--accent-end), transparent);
}

.timeline-item {
    position: relative;
}

.timeline-dot {
    position: absolute;
    left: -3rem;
    top: 2rem;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--gradient-accent);
    border: 3px solid var(--bg-elevated);
    z-index: 1;
    box-shadow: 0 0 15px var(--accent-glow);
}

.timeline-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 2rem;
    transition: all 0.4s var(--ease-out-expo);
}

.timeline-card:hover {
    border-color: var(--accent-start);
    transform: translateX(8px);
    box-shadow: -4px 0 30px var(--accent-glow);
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;
}

.timeline-title {
    font-family: var(--font-display);
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;
    line-height: 1.2;
}

.timeline-year {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--text-dim);
    letter-spacing: 0.05em;
    white-space: nowrap;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
}

.timeline-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

/* ===== Responsive ===== */

@media (max-width: 1024px) {
    .page-hero {
        min-height: 40vh;
        padding-top: 6rem;
    }

    .project-card {
        padding: 1.5rem 2rem;
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

    .employer-name {
        font-size: 1.8rem;
    }

    .employer-desc {
        font-size: 0.95rem;
    }

    .project-block {
        grid-template-columns: 35px 1fr;
    }

    .project-num {
        font-size: 0.65rem;
    }

    .project-card {
        padding: 1.3rem;
    }

    .project-card:hover {
        transform: translateX(2px);
    }

    .project-card-header {
        flex-direction: column;
        gap: 0.3rem;
    }

    .project-card-title {
        font-size: 1.1rem;
    }

    .project-card-meta {
        gap: 0.8rem;
    }

    .project-card-desc {
        font-size: 0.9rem;
    }

    .project-highlights li {
        font-size: 0.85rem;
    }

    .skill-chip {
        font-size: 0.65rem;
        padding: 0.3rem 0.5rem;
    }

    .timeline {
        padding-left: 2rem;
    }

    .timeline::before {
        left: 4px;
    }

    .timeline-dot {
        left: -2rem;
        width: 10px;
        height: 10px;
    }

    .timeline-card {
        padding: 1.3rem;
    }

    .timeline-header {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    .project-block {
        grid-template-columns: 1fr;
    }

    .project-indicator {
        display: none;
    }

    .project-card {
        padding: 1.2rem;
    }
}
</style>
