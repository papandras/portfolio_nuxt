<template>
    <div class="noir-page">
        <NuxtLink :to="localePath('/')" class="back-link">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') }}
        </NuxtLink>

        <!-- Hero -->
        <section class="page-hero">
            <h1 class="hero-title">
                <span class="outline-text" data-aos="fade-down">MY</span>
                <span class="text-accent" data-aos="fade-up">{{ $t('experience') }}.</span>
            </h1>
        </section>

        <!-- Timeline -->
        <section class="section timeline-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">01</span>
                    <h2 class="section-label">TIMELINE</h2>
                </div>
                <div class="split-content">
                    <div class="timeline">
                        <div v-for="exp in experience" :key="exp.year" class="timeline-item" data-aos="fade-up">
                            <div class="timeline-dot"></div>
                            <div class="timeline-card">
                                <div class="timeline-header">
                                    <h3 class="timeline-title">{{ $t(exp.placeKey) || exp.place }}</h3>
                                    <span class="timeline-year">{{ exp.year }}</span>
                                </div>
                                <p v-if="exp.description" class="timeline-desc">{{ exp.description }}</p>
                                <div class="timeline-skills">
                                    <span v-for="skill in exp.skills" :key="skill" class="skill-chip">
                                        {{ skill }}
                                    </span>
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
import { definePageMeta, useLocalePath } from '#imports'

definePageMeta({ layout: 'default' })
const localePath = useLocalePath()

const experience = [{
    year: '2022 — PRESENT',
    type: 'work',
    place: 'HMSoft Zrt.',
    placeKey: 'company',
    description: 'Fullstack / Backend Developer',
    skills: ['Node.JS', 'PHP', 'React', 'WordPress', 'GraphQL', 'PostgreSQL']
}, {
    year: '2017 — 2022',
    type: 'school',
    place: 'BMSZC Neumann János Informatikai Technikum',
    placeKey: 'neumann',
    description: '',
    skills: ['HTML', 'CSS', 'JS', 'PHP', 'C#', 'VUE']
}]
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

/* Timeline */
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
    border: 3px solid var(--bg);
    z-index: 1;
    box-shadow: 0 0 15px var(--accent-glow);
    transition: transform 0.3s var(--ease-out-expo);
}

.timeline-item:hover .timeline-dot {
    transform: scale(1.5);
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

.timeline-desc {
    font-size: 1.1rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
}

.timeline-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-chip {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.4rem 0.8rem;
    border: 1px solid var(--border);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: all 0.3s ease;
}

.timeline-card:hover .skill-chip {
    border-color: var(--accent-start);
    color: var(--text);
}

@media (max-width: 768px) {
    .timeline-header {
        flex-direction: column;
    }
}
</style>
