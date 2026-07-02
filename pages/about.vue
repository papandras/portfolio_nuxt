<template>
    <div class="avant-garde-page">
        <NuxtLink :to="localePath('/')" class="back-btn">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') || 'BACK TO HOME' }}
        </NuxtLink>

        <section class="section about-hero">
            <h1 class="huge-text outline-text" data-aos="fade-down">{{ $t('about') || 'ABOUT' }}</h1>
            <h1 class="huge-text text-accent" data-aos="fade-up">ME.</h1>
        </section>

        <section class="section about-content">
            <div class="grid-layout">
                <div class="col-left">
                    <h2 class="section-title">{{ $t('about') || 'THE BIO' }}</h2>
                </div>
                <div class="col-right">
                    <p class="big-paragraph">
                        {{ $t('introduction') || 'Backend fejlesztő vagyok, főként Node.js alapú microservice architektúrákban szerzett tapasztalattal.' }}
                    </p>
                    <p class="standard-paragraph">
                        Dolgoztam <strong>GraphQL API</strong>-kon, <strong>PostgreSQL</strong> és <strong>MongoDB</strong>
                        adatbázisokkal. Részt vettem <strong>Symfony</strong> alapú legacy rendszerek fejlesztésében, és kisebb
                        <strong>React</strong> feladatok révén frontend tapasztalatot is szereztem.
                    </p>
                    <p class="standard-paragraph">
                        Fontos számomra a minőségi, határidőre elvégzett munka és a folyamatos szakmai fejlődés.
                    </p>
                    <div class="mt-normal">
                        <a href="#" class="brutal-btn">
                            <i class="fa-solid fa-download"></i> {{ $t('download_cv') || 'DOWNLOAD CV' }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="section hobbies-section">
            <div class="grid-layout">
                <div class="col-left">
                    <h2 class="section-title">{{ $t('hobbies') || 'PROJECTS / HOBBIES' }}</h2>
                </div>
                <div class="col-right">
                    <h3 class="mb-normal">{{ $t('game_translations') || 'GAME TRANSLATIONS' }}</h3>
                    
                    <div class="brutal-list">
                        <div v-for="game in gameTranslations" :key="game.title" class="list-item">
                            <div class="item-header">
                                <h4>{{ game.title }}</h4>
                                <span class="year">{{ game.year }}</span>
                            </div>
                            <p class="standard-paragraph mt-small">{{ game.description }}</p>
                            <p class="status-text mt-small">{{ $t('status') || 'STATUS' }}: <span class="text-accent">{{ $t(game.statusKey) || game.status }}</span></p>
                            
                            <a v-if="game.link" :href="game.link" target="_blank" class="brutal-link mt-small">
                                VIEW DETAILS <i class="fa-solid fa-arrow-up-right-from-square"></i>
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

const gameTranslations = [{
    title: 'Assassin\'s Creed Odyssey',
    description: 'The Lost Tales of Greece, Crossover Story, Legacy of the First Blade és The Fate of Atlantis kiegészítők magyarítása.',
    link: 'https://magyaritasok.hu/games/assassins-creed-odyssey',
    status: 'COMPLETED',
    statusKey: 'completed',
    year: "2020 - 2022"
},
{
    title: 'Assassin\'s Creed Valhalla',
    description: 'Alapjáték, Crossover Story, The Last Chapter és a Dawn of Ragnarök kiegészítő magyarítása.',
    link: 'https://magyaritasok.hu/games/assassins-creed-valhalla',
    status: 'IN PROGRESS',
    statusKey: 'in_progress',
    year: "2022 - PRESENT"
},
{
    title: 'Assassin\'s Creed Shadows',
    description: 'Future project.',
    link: null,
    status: 'FUTURE',
    statusKey: 'futured',
    year: "TBA"
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

.about-hero {
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

.big-paragraph {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    line-height: 1.3;
    font-family: var(--font-display);
    font-weight: 600;
    margin-bottom: 2rem;
}

.standard-paragraph {
    font-size: 1.2rem;
    line-height: 1.6;
    font-family: var(--font-body);
    color: #ccc;
    margin-bottom: 1.5rem;
}

.brutal-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: transparent;
    border: 2px solid currentColor;
    color: inherit;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.brutal-btn:hover {
    background-color: var(--accent);
    color: var(--bg-color);
    border-color: var(--accent);
}

.brutal-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-top: 2px solid #333;
    padding-top: 2rem;
}

.list-item {
    border-bottom: 2px solid #333;
    padding-bottom: 2rem;
}

.item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item-header h4 {
    font-size: 1.5rem;
    font-family: var(--font-display);
}

.year {
    font-family: var(--font-body);
    color: #888;
}

.status-text {
    font-family: var(--font-body);
    font-weight: bold;
    font-size: 0.9rem;
    letter-spacing: 0.1em;
}

.brutal-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-color);
    font-family: var(--font-body);
    font-weight: 600;
    letter-spacing: 0.1em;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
}

.brutal-link:hover {
    color: var(--accent);
    border-bottom-color: var(--accent);
}

.mt-small { margin-top: 1rem; }
.mt-normal { margin-top: 3rem; }
.mb-normal { margin-bottom: 2rem; font-size: 2rem; font-family: var(--font-display); }

@media (max-width: 768px) {
    .grid-layout { grid-template-columns: 1fr; gap: 2rem; }
    .item-header { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
}
</style>