<template>
    <div class="noir-page">
        <NuxtLink :to="localePath('/')" class="back-link">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') }}
        </NuxtLink>

        <!-- Hero -->
        <section class="page-hero">
            <h1 class="hero-title">
                <span class="outline-text" data-aos="fade-down">{{ $t('about') }}</span>
                <span class="text-accent" data-aos="fade-up">ME.</span>
            </h1>
        </section>

        <!-- Bio -->
        <section class="section bio-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">01</span>
                    <h2 class="section-label">BIO</h2>
                </div>
                <div class="split-content" data-aos="fade-up">
                    <p class="big-text">
                        {{ $t('about_bio_1') }}
                    </p>
                    <p class="body-text">
                        {{ $t('about_bio_2') }}
                    </p>
                    <p class="body-text">
                        {{ $t('about_bio_3') }}
                    </p>
                    <a href="#" class="btn-gradient mt-lg">
                        <i class="fa-solid fa-download"></i> {{ $t('download_cv') }}
                    </a>
                </div>
            </div>
        </section>

        <!-- Competencies -->
        <section class="section competencies-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">02</span>
                    <h2 class="section-label">{{ $t('competencies') }}</h2>
                </div>
                <div class="split-content">
                    <div class="comp-grid">
                        <div v-for="comp in competencies" :key="comp.icon" class="comp-card" data-aos="fade-up">
                            <div class="comp-icon"><i :class="comp.icon"></i></div>
                            <h4 class="comp-title">{{ comp.title }}</h4>
                            <p class="comp-desc">{{ $t(comp.descKey) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Work Method + Stats -->
        <section class="section stats-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">03</span>
                    <h2 class="section-label">{{ $t('about_method_title') }}</h2>
                </div>
                <div class="split-content" data-aos="fade-up">
                    <ul class="method-list">
                        <li><i class="fa-brands fa-git-alt"></i> {{ $t('about_method_1') }}</li>
                        <li><i class="fa-brands fa-jira"></i> {{ $t('about_method_2') }}</li>
                        <li><i class="fa-solid fa-robot"></i> {{ $t('about_method_3') }}</li>
                    </ul>

                    <div class="stats-row">
                        <div class="stat-card" data-aos="zoom-in">
                            <span class="stat-value text-accent">~2 300</span>
                            <span class="stat-label">Commits</span>
                        </div>
                        <div class="stat-card" data-aos="zoom-in" data-aos-delay="100">
                            <span class="stat-value text-accent">25</span>
                            <span class="stat-label">Repositories</span>
                        </div>
                        <div class="stat-card" data-aos="zoom-in" data-aos-delay="200">
                            <span class="stat-value text-accent">4+</span>
                            <span class="stat-label">{{ $t('year') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hobbies / Translations -->
        <section class="section hobbies-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">04</span>
                    <h2 class="section-label">{{ $t('hobbies') }}</h2>
                </div>
                <div class="split-content">
                    <h3 class="subsection-title" data-aos="fade-up">{{ $t('game_translations') }}</h3>

                    <div class="card-list">
                        <div v-for="game in gameTranslations" :key="game.title" class="hobby-card" data-aos="fade-up">
                            <div class="card-header">
                                <h4 class="card-title">{{ game.title }}</h4>
                                <span class="card-year">{{ game.year }}</span>
                            </div>
                            <p class="card-desc">{{ game.description }}</p>
                            <div class="card-footer">
                                <span class="card-status">
                                    {{ $t('status') }}: <span class="text-accent">{{ $t(game.statusKey) }}</span>
                                </span>
                                <a v-if="game.link" :href="game.link" target="_blank" rel="noopener" class="card-link">
                                    VIEW <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
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

const competencies = [
    { icon: 'fa-solid fa-server', title: 'Backend', descKey: 'comp_backend' },
    { icon: 'fa-solid fa-magnifying-glass', title: 'Search & Data', descKey: 'comp_search' },
    { icon: 'fa-solid fa-coins', title: 'Finance', descKey: 'comp_finance' },
    { icon: 'fa-solid fa-gears', title: 'Background Processing', descKey: 'comp_background' },
    { icon: 'fa-solid fa-layer-group', title: 'Full-stack', descKey: 'comp_fullstack' },
    { icon: 'fa-solid fa-robot', title: 'AI-Assisted Dev', descKey: 'comp_ai' },
]

const gameTranslations = [{
    title: 'Assassin\'s Creed Odyssey',
    description: 'The Lost Tales of Greece, Crossover Story, Legacy of the First Blade és The Fate of Atlantis kiegészítők magyarítása.',
    link: 'https://magyaritasok.hu/games/assassins-creed-odyssey',
    statusKey: 'completed',
    year: '2020 — 2022'
}, {
    title: 'Assassin\'s Creed Valhalla',
    description: 'Alapjáték, Crossover Story, The Last Chapter és a Dawn of Ragnarök kiegészítő magyarítása.',
    link: 'https://magyaritasok.hu/games/assassins-creed-valhalla',
    statusKey: 'in_progress',
    year: '2022 — PRESENT'
}, {
    title: 'Assassin\'s Creed Shadows',
    description: 'Future project.',
    link: null,
    statusKey: 'futured',
    year: 'TBA'
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

.back-link:hover {
    color: var(--accent-start);
}

/* Hero */
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

/* Section */
.section {
    padding: 5rem var(--section-padding);
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

.big-text {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 2.5vw, 2.2rem);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 2rem;
}

.body-text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
}

.body-text strong {
    color: var(--text);
    font-weight: 600;
}

.mt-lg { margin-top: 3rem; }

/* Competencies */
.competencies-section {
    border-top: 1px solid var(--border);
}

.comp-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.comp-card {
    border: 1px solid var(--border);
    padding: 1.8rem;
    background: var(--bg-elevated);
    transition: all 0.4s var(--ease-out-expo);
}

.comp-card:hover {
    border-color: var(--accent-start);
    transform: translateY(-4px);
    box-shadow: 0 8px 30px var(--accent-glow);
}

.comp-icon {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.comp-title {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    text-transform: none;
    letter-spacing: 0;
}

.comp-desc {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.5;
}

/* Stats + Method */
.stats-section {
    border-top: 1px solid var(--border);
}

.method-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
    border-top: 1px solid var(--border);
    padding-top: 1.5rem;
}

.method-list li {
    font-family: var(--font-body);
    font-size: 1.05rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--border);
}

.method-list li i {
    font-size: 1.2rem;
    min-width: 1.5rem;
    text-align: center;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.stat-card {
    border: 1px solid var(--border);
    padding: 2rem 1.5rem;
    text-align: center;
    background: var(--bg-card);
    transition: all 0.4s var(--ease-out-expo);
}

.stat-card:hover {
    border-color: var(--accent-start);
    transform: translateY(-4px);
}

.stat-value {
    display: block;
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-family: var(--font-body);
    font-size: 0.8rem;
    color: var(--text-dim);
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

/* Hobbies */
.bio-section {
    border-top: 1px solid var(--border);
}

.hobbies-section {
    border-top: 1px solid var(--border);
}

.subsection-title {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
}

.card-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.hobby-card {
    border: 1px solid var(--border);
    padding: 2rem;
    background: var(--bg-elevated);
    transition: all 0.4s var(--ease-out-expo);
}

.hobby-card:hover {
    border-color: var(--accent-start);
    transform: translateX(8px);
    box-shadow: -4px 0 20px var(--accent-glow);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.card-title {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;
}

.card-year {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--text-dim);
}

.card-desc {
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-status {
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.05em;
}

.card-link {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
}

.card-link:hover {
    color: var(--accent-start);
}

/* Responsive */

@media (max-width: 1024px) {
    .page-hero {
        min-height: 40vh;
        padding-top: 6rem;
    }

    .comp-grid {
        grid-template-columns: repeat(2, 1fr);
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

    .big-text {
        font-size: 1.2rem;
    }

    .body-text {
        font-size: 1rem;
    }

    .comp-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .comp-card {
        padding: 1.3rem;
    }

    .comp-card:hover {
        transform: translateY(-2px);
    }

    .stats-row {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.8rem;
    }

    .stat-value {
        font-size: 1.8rem;
    }

    .stat-label {
        font-size: 0.7rem;
    }

    .method-list li {
        font-size: 0.95rem;
        gap: 0.8rem;
    }

    .subsection-title {
        font-size: 1.5rem;
    }

    .hobby-card {
        padding: 1.5rem;
    }

    .hobby-card:hover {
        transform: translateX(4px);
    }

    .card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .card-title {
        font-size: 1.2rem;
    }

    .card-desc {
        font-size: 0.9rem;
    }

    .card-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .hobby-card {
        padding: 1.2rem;
    }

    .card-title {
        font-size: 1.1rem;
    }

    .stats-row {
        grid-template-columns: 1fr;
    }

    .stat-card {
        padding: 1.5rem 1rem;
    }
}
</style>
