<template>
    <div class="noir-page">
        <NuxtLink :to="localePath('/')" class="back-link">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') }}
        </NuxtLink>

        <!-- Hero -->
        <section class="page-hero">
            <h1 class="hero-title">
                <span class="outline-text" data-aos="fade-down">{{ $t('hero_about_1') }}</span>
                <span class="text-accent" data-aos="fade-up">{{ $t('hero_about_2') }}</span>
            </h1>
        </section>

        <!-- Bio / Summary -->
        <section class="section bio-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">01</span>
                    <h2 class="section-label">BIO</h2>
                </div>
                <div class="split-content" data-aos="fade-up">
                    <p class="role-badge">{{ $t('role') }} <span class="role-sub">{{ $t('role_subtitle') }}</span></p>
                    <p class="big-text">{{ $t('about_summary_1') }}</p>
                    <p class="body-text">{{ $t('about_summary_2') }}</p>
                    <p class="body-text highlight-text">{{ $t('about_summary_3') }}</p>
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

        <!-- Soft Skills -->
        <section class="section soft-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">03</span>
                    <h2 class="section-label">{{ $t('soft_skills_title') }}</h2>
                </div>
                <div class="split-content" data-aos="fade-up">
                    <div class="soft-grid">
                        <div v-for="soft in softSkills" :key="soft.icon" class="soft-card">
                            <div class="soft-icon"><i :class="soft.icon"></i></div>
                            <div class="soft-body">
                                <h4 class="soft-title">{{ soft.title }}</h4>
                                <p class="soft-desc">{{ $t(soft.descKey) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats -->
        <section class="section stats-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">04</span>
                    <h2 class="section-label">{{ $t('stats_title') }}</h2>
                </div>
                <div class="split-content" data-aos="fade-up">
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
                        <div class="stat-card" data-aos="zoom-in" data-aos-delay="300">
                            <span class="stat-value text-accent">~1300</span>
                            <span class="stat-label">Top repo commits</span>
                        </div>
                    </div>
                    <p class="stats-domains">{{ $t('stats_domains') }}</p>
                </div>
            </div>
        </section>

        <!-- Growth Directions -->
        <section class="section growth-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">05</span>
                    <h2 class="section-label">{{ $t('growth_title') }}</h2>
                </div>
                <div class="split-content" data-aos="fade-up">
                    <ul class="growth-list">
                        <li><i class="fa-solid fa-arrow-trend-up"></i> {{ $t('growth_1') }}</li>
                        <li><i class="fa-solid fa-arrow-trend-up"></i> {{ $t('growth_2') }}</li>
                        <li><i class="fa-solid fa-arrow-trend-up"></i> {{ $t('growth_3') }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Hobbies / Translations -->
        <section class="section hobbies-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">06</span>
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
    { icon: 'fa-solid fa-coins', title: 'Finance & Domain', descKey: 'comp_finance' },
    { icon: 'fa-solid fa-gears', title: 'Background Processing', descKey: 'comp_background' },
    { icon: 'fa-solid fa-layer-group', title: 'Full-stack', descKey: 'comp_fullstack' },
    { icon: 'fa-solid fa-robot', title: 'AI-Assisted Dev', descKey: 'comp_ai' },
    { icon: 'fa-solid fa-code-branch', title: 'Workflow', descKey: 'comp_workflow' },
]

const softSkills = [
    { icon: 'fa-solid fa-robot', title: 'AI-asszisztált fejlesztés', descKey: 'soft_ai' },
    { icon: 'fa-solid fa-bullseye', title: 'Domain-fókusz', descKey: 'soft_domain' },
    { icon: 'fa-solid fa-people-group', title: 'Csapatmunka', descKey: 'soft_team' },
    { icon: 'fa-solid fa-shield-halved', title: 'Megbízhatóság', descKey: 'soft_reliability' },
    { icon: 'fa-solid fa-truck-fast', title: 'Release-orientált szállítás', descKey: 'soft_delivery' },
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
    min-height: 100svh;
    padding-bottom: 6rem;
}

.back-link {
    position: fixed; top: 2rem; left: 2rem; z-index: 100;
    font-family: var(--font-display); font-weight: 600; font-size: 0.85rem;
    letter-spacing: 0.1em; color: var(--text); mix-blend-mode: difference;
    transition: color 0.3s ease; display: flex; align-items: center; gap: 0.5rem;
}
.back-link:hover { color: var(--accent-start); }

.page-hero {
    min-height: 55vh; display: flex; align-items: flex-end;
    padding: 0 var(--section-padding) 4rem;
}
.hero-title {
    display: flex; flex-direction: column;
    font-size: clamp(4rem, 12vw, 10rem);
    letter-spacing: -0.04em; line-height: 0.88;
}

.section { padding: 5rem var(--section-padding); border-top: 1px solid var(--border); }

/* Splits */
.split-label { display: flex; flex-direction: column; gap: 0.5rem; }
.section-number { font-family: var(--font-body); font-size: 0.8rem; color: var(--text-dim); letter-spacing: 0.15em; }
.section-label { font-size: 1.1rem; letter-spacing: 0.1em; font-weight: 600; background: var(--gradient-accent); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

/* Bio */
.bio-section { border-top: 1px solid var(--border); }

.role-badge {
    font-family: var(--font-display); font-size: 1.1rem; font-weight: 700;
    margin-bottom: 1.5rem; color: var(--text);
}
.role-sub {
    font-size: 0.85rem; font-weight: 400; color: var(--text-muted);
    margin-left: 0.5rem;
}

.big-text {
    font-family: var(--font-display); font-size: clamp(1.3rem, 2.5vw, 2rem);
    font-weight: 600; line-height: 1.4; margin-bottom: 1.5rem;
}
.body-text { font-size: 1.05rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 1.2rem; }
.highlight-text {
    border-left: 3px solid var(--accent-start); padding-left: 1.2rem;
    background: linear-gradient(90deg, var(--accent-glow), transparent);
    padding: 1rem 1.2rem; margin: 1.5rem 0;
}
.mt-lg { margin-top: 2rem; }

/* Competencies */
.competencies-section { background: var(--bg-elevated); }
.comp-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.comp-card {
    border: 1px solid var(--border); padding: 1.8rem; background: var(--bg-card);
    transition: all 0.4s var(--ease-out-expo);
}
.comp-card:hover { border-color: var(--accent-start); transform: translateY(-4px); box-shadow: 0 8px 30px var(--accent-glow); }
.comp-icon { font-size: 1.5rem; margin-bottom: 1rem; background: var(--gradient-accent); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.comp-title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: none; letter-spacing: 0; }
.comp-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; }

/* Soft Skills */
.soft-section { background: var(--bg); }
.soft-grid { display: flex; flex-direction: column; gap: 0; }
.soft-card {
    display: flex; gap: 1.2rem; padding: 1.3rem 0; border-bottom: 1px solid var(--border);
    transition: all 0.3s var(--ease-out-expo);
}
.soft-card:first-child { border-top: 1px solid var(--border); }
.soft-card:hover { padding-left: 0.8rem; }
.soft-icon { font-size: 1.1rem; min-width: 2rem; padding-top: 0.2rem; background: var(--gradient-accent); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.soft-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; margin-bottom: 0.3rem; text-transform: none; letter-spacing: 0; }
.soft-desc { font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; }

/* Stats */
.stats-section { background: var(--bg-elevated); }
.stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 1.5rem; }
.stat-card { border: 1px solid var(--border); padding: 2rem 1rem; text-align: center; background: var(--bg-card); transition: all 0.4s var(--ease-out-expo); }
.stat-card:hover { border-color: var(--accent-start); transform: translateY(-4px); }
.stat-value { display: block; font-family: var(--font-display); font-size: 2.2rem; font-weight: 700; line-height: 1; margin-bottom: 0.4rem; }
.stat-label { font-family: var(--font-body); font-size: 0.75rem; color: var(--text-dim); letter-spacing: 0.1em; text-transform: uppercase; }
.stats-domains { font-size: 0.9rem; color: var(--text-muted); text-align: center; font-style: italic; }

/* Growth */
.growth-section { background: var(--bg); }
.growth-list { display: flex; flex-direction: column; gap: 0; border-top: 1px solid var(--border); }
.growth-list li {
    font-family: var(--font-body); font-size: 1rem; color: var(--text-muted);
    display: flex; align-items: flex-start; gap: 1rem; padding: 1rem 0;
    border-bottom: 1px solid var(--border); line-height: 1.5;
}
.growth-list li i { color: var(--accent-start); margin-top: 0.2rem; min-width: 1.2rem; }

/* Hobbies */
.hobbies-section { background: var(--bg-elevated); }
.subsection-title { font-family: var(--font-display); font-size: 2rem; font-weight: 700; margin-bottom: 2rem; text-transform: none; letter-spacing: 0; }
.card-list { display: flex; flex-direction: column; gap: 1.5rem; }
.hobby-card { border: 1px solid var(--border); padding: 2rem; background: var(--bg-card); transition: all 0.4s var(--ease-out-expo); }
.hobby-card:hover { border-color: var(--accent-start); transform: translateX(8px); box-shadow: -4px 0 20px var(--accent-glow); }
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.card-title { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; text-transform: none; letter-spacing: 0; }
.card-year { font-family: var(--font-body); font-size: 0.85rem; color: var(--text-dim); }
.card-desc { font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; }
.card-footer { display: flex; justify-content: space-between; align-items: center; }
.card-status { font-family: var(--font-body); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.05em; }
.card-link { font-family: var(--font-display); font-weight: 600; font-size: 0.85rem; letter-spacing: 0.1em; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem; transition: color 0.3s ease; }
.card-link:hover { color: var(--accent-start); }

/* ===== Responsive ===== */

@media (max-width: 1024px) {
    .page-hero { min-height: 40vh; padding-top: 6rem; }
    .stats-row { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
    .back-link { top: 1.2rem; left: 1.2rem; font-size: 0.75rem; }
    .page-hero { min-height: 35vh; padding: 6rem var(--section-padding) 2rem; }
    .hero-title { font-size: clamp(3rem, 12vw, 5rem); }
    .section { padding: 3rem var(--section-padding); }

    .role-badge { font-size: 1rem; }
    .role-sub { display: block; margin-left: 0; margin-top: 0.3rem; }
    .big-text { font-size: 1.15rem; }
    .body-text { font-size: 0.95rem; }

    .comp-grid { grid-template-columns: 1fr; gap: 1rem; }
    .comp-card { padding: 1.3rem; }
    .comp-card:hover { transform: translateY(-2px); }

    .stats-row { grid-template-columns: repeat(2, 1fr); gap: 0.8rem; }
    .stat-value { font-size: 1.6rem; }
    .stat-label { font-size: 0.65rem; }

    .soft-card { gap: 0.8rem; padding: 1rem 0; }
    .soft-desc { font-size: 0.85rem; }

    .growth-list li { font-size: 0.9rem; gap: 0.8rem; }

    .subsection-title { font-size: 1.5rem; }
    .hobby-card { padding: 1.5rem; }
    .hobby-card:hover { transform: translateX(4px); }
    .card-header { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
    .card-title { font-size: 1.2rem; }
    .card-desc { font-size: 0.9rem; }
    .card-footer { flex-direction: column; align-items: flex-start; gap: 1rem; }
}

@media (max-width: 480px) {
    .stats-row { grid-template-columns: 1fr 1fr; }
    .stat-card { padding: 1.2rem 0.8rem; }
    .hobby-card { padding: 1.2rem; }
    .card-title { font-size: 1.1rem; }
    .comp-card { padding: 1rem; }
}
</style>
