<template>
    <div class="page-section" id="about-section">
        <h1>{{ $t('about') }}</h1>
        <SiteSectionContentAbout />

        <div id="cv-download">
            <i class="fa-solid fa-download"></i>
            <p>{{ $t('download_cv') }}</p>
        </div>

        <h2>{{ $t('hobbies') }}</h2>

        <h3>{{ $t('game_translations') }}</h3>
        <p></p>
        <div class="game-list">
            <div class="game-item" v-for="game in gameTranslations" :key="game.title">
                <div>
                    <img :src="game.img" :alt="game.title" class="game-image" />
                    <h4 class="game-title">{{ game.title }}</h4>
                    <p v-if="game.status" class="game-status">{{ $t('status') }}: {{ $t(game.status) }}</p>
                    <p v-if="game.year">{{ $t('year') }}: {{ game.year }}</p>
                    <p class="game-description">{{ $t(game.description) }}</p>

                    <a v-if="game.link" :href="game.link" target="_blank" rel="noopener noreferrer" class="link">
                        <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>Magyarítás adatlapja
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
    layout: 'subpage'
})

const gameTranslations = [{
    title: 'Assassin\'s Creed Odyssey',
    description: 'The Lost Tales of Greece, Crossover Story, Legacy of the First Blade és The Fate of Atlantis kiegészítők magyarítása.',
    img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg?t=1758656673',
    link: 'https://magyaritasok.hu/games/assassins-creed-odyssey',
    status: 'completed',
    year: "2020 - 2022"
},
{
    title: 'Assassin\'s Creed Valhalla',
    description: 'Alapjáték, Crossover Story, The Last Chapter és a Dawn of Ragnarök kiegészítő magyarítása.',
    img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg?t=1754572990',
    link: 'https://magyaritasok.hu/games/assassins-creed-valhalla',
    status: 'in_progress',
    year: "2022 - jelenleg is"
},
{
    title: 'Assassin\'s Creed Shadows',
    description: '',
    img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3159330/ead4c06eb30d88cd4a231d0a3550ca055b6f89c2/header_alt_assets_0.jpg',
    link: null,
    status: 'futured'
}
];
</script>

<style scoped>
h1,
h2,
h3,
h4 {
    margin: 2rem 0 1rem 0;
}

.game-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.game-item {
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    width: max(400px, 20%);
}

.game-item:hover {
    transform: scale(1.05);
}

.game-image {
    width: 100%;
    height: auto;
}

.game-title {
    font-size: 1.2rem;
}

.game-status {
    font-style: italic;
    color: var(--secondary-color);
}

.link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: bold;
    transition: color 0.3s ease;
    display: inline-block;
    margin-top: .5rem;
    text-align: center;
}

.link:hover {
    color: var(--secondary-color);
}

.link div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
}

.game-description {
    text-align: justify;
}

#cv-download {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    width: fit-content;
    padding: .5rem 1rem;
    border: 1px solid var(--text-color);
    border-radius: 8px;
    transition: background-color 0.3s ease, border-radius 0.3s ease;
}

#cv-download:hover {
    background-color: var(--text-color);
    color: var(--bg-color);
}
</style>