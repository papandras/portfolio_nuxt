<template>
    <div class="avant-garde-page">
        <NuxtLink :to="localePath('/')" class="back-btn">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') || 'BACK TO HOME' }}
        </NuxtLink>

        <section class="section exp-hero">
            <h1 class="huge-text outline-text" data-aos="fade-down">MY</h1>
            <h1 class="huge-text text-accent" data-aos="fade-up">{{ $t('experience') || 'EXPERIENCE' }}.</h1>
        </section>

        <section class="section timeline-section">
            <div class="grid-layout">
                <div class="col-left">
                    <h2 class="section-title">THE TIMELINE</h2>
                </div>
                <div class="col-right">
                    <div class="brutal-timeline">
                        <div v-for="exp in experience" :key="exp.year" class="timeline-item" data-aos="fade-up">
                            <div class="timeline-header">
                                <h3 class="timeline-place">{{ $t(exp.placeKey) || exp.place }}</h3>
                                <div class="timeline-year">{{ exp.year }}</div>
                            </div>
                            <p v-if="exp.description" class="timeline-desc">{{ exp.description }}</p>
                            
                            <div class="timeline-skills mt-small">
                                <span v-for="skill in exp.skills" :key="skill" class="brutal-tag">
                                    {{ skill }}
                                </span>
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
    year: "2017 - 2022",
    type: "school",
    description: "",
    place: "BMSZC Neumann János Informatikai Technikum",
    placeKey: "neumann",
    skills: ["HTML", "CSS", "JS", "PHP", "C#", "VUE"]
}, {
    year: "2022 - PRESENT",
    type: "work",
    place: "HMSoft Zrt.",
    placeKey: "company",
    description: "Fullstack / Backend Developer",
    skills: ["Node.JS", "PHP", "React", "WordPress"]
}]
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

.exp-hero {
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

.brutal-timeline {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    border-left: 4px solid #333;
    padding-left: 2rem;
}

.timeline-item {
    position: relative;
    padding: 2rem;
    border: 2px solid #333;
    background-color: var(--bg-color);
    transition: all 0.3s ease;
}

.timeline-item:hover {
    border-color: var(--text-color);
    transform: translateX(10px);
}

.timeline-item::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -2.2rem;
    width: 2rem;
    height: 4px;
    background-color: #333;
    transition: background-color 0.3s ease;
}

.timeline-item:hover::before {
    background-color: var(--text-color);
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.timeline-place {
    font-size: 2rem;
    font-family: var(--font-display);
    font-weight: 700;
    text-transform: uppercase;
}

.timeline-year {
    font-size: 1.2rem;
    font-family: var(--font-body);
    color: var(--accent);
    font-weight: bold;
}

.timeline-desc {
    font-size: 1.2rem;
    font-family: var(--font-body);
    color: #ccc;
    margin-bottom: 1.5rem;
}

.timeline-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.brutal-tag {
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border: 1px solid #555;
    color: #aaa;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.timeline-item:hover .brutal-tag {
    border-color: var(--accent);
    color: var(--text-color);
}

.mt-small { margin-top: 1rem; }

@media (max-width: 768px) {
    .grid-layout { grid-template-columns: 1fr; gap: 2rem; }
    .timeline-header { flex-direction: column; gap: 0.5rem; }
}
</style>