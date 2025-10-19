<template>
    <div :class="`section-content ${isProtected ? 'protected' : 'public'}`" id="about-section">
        <div class="project-container">
            <div v-for="project in projects" :key="project.title" class="project-item">
                <div class="project-content">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-year" v-if="project.year">{{ project.year }}</p>
                    <p class="project-description">{{ project.description }}</p>
                    <p class="project-technologies" v-if="project.technologies && project.technologies.length">
                        <strong>{{ $t('technologies_used') }}:</strong> {{ project.technologies.join(', ') }}
                    </p>
                    <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
                        class="link">
                        <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> {{ $t('view_project') }}
                        </div>
                    </a>
                    <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="link">
                        <div>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> {{ $t('visit_website') }}
                        </div>
                    </a>
                </div>
                <div class="project-img">
                    <img :src="project.img_thumbnail_url" :alt="project.title" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    protected?: boolean
}>();

const isProtected = props.protected || false;

const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A personal portfolio website built using Nuxt 3 and TypeScript to showcase my skills, experience, and projects.",
        github: "https://github.com/papandras/portfolio_nuxt",
        link: "https://papandras.hu/",
        year: "2023",
        technologies: ["Nuxt 3", "TypeScript", "Vue 3", "CSS"],
        img_thumbnail_url: "https://i.kek.sh/Cnt92uGyo6G.png"
    },
    {
        title: "BDR Honlap",
        description: "A professional company showcase website built on WordPress using PHP, jQuery, and JavaScript technologies to manage painting, decorating, and home renovation services, and administer customer reviews and reference images.",
        github: "",
        link: "https://bdrandbdr.hu/",
        year: "2025",
        technologies: ["WordPress", "PHP", "jQuery", "JavaScript"],
        img_thumbnail_url: "https://i.kek.sh/it2B3p4z5Sc.png"
    },
    {
        title: "Értem magamat Honlap",
        description: "",
        github: "",
        link: "https://ertemmagamat.hu/",
        year: "2025",
        technologies: ["WordPress"],
        img_thumbnail_url: "https://i.kek.sh/37c0FEdHset.png"
    },
    {
        title: "DAKA Möbel Produkt WebShop",
        description: "A professional e-commerce platform, implemented on a WordPress and WooCommerce foundation, built on core PHP and JavaScript/jQuery technologies, and customized with unique CSS styles for the online sales interface.",
        github: "",
        link: "https://mobelprodukt.eu/",
        year: "2025",
        technologies: ["WordPress", "WooCommerce"],
        img_thumbnail_url: "https://i.kek.sh/V51w5UWC6E9.jpg"
    },
]
</script>

<style scoped>
.protected {
    height: max(100%, 100%);
    overflow: hidden;
    position: relative;
    padding: .5rem 0;
}

.protected::after {
    content: "";
    height: 50%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom,
            rgba(var(--bg-color-r), var(--bg-color-g), var(--bg-color-b), 0) 0%,
            rgb(var(--bg-color-r), var(--bg-color-g), var(--bg-color-b)) 50%);
}

.protected p {
    text-align: justify;
}

.public p {
    padding: .5rem 0;
}

.project-container {
    display: flex;
    /* flex-direction: column; */
    /* gap: 2rem; */
    flex-wrap: wrap;
    width: 100%;
}

.public .project-item {
    width: 50%;
}

.project-item {
    padding: 1rem;
    display: flex;
    gap: 1.5rem;
    background-color: var(--secondary-bg-color);
    transition: transform 0.3s ease;
}

.project-content {
    flex: 1;
    display: flex;
    gap: .1rem;
    flex-direction: column;
    min-width: 60%;
}

.project-img {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    max-width: 30vw;
    height: auto;
}

.project-img img {
    max-width: 100%;
    border-radius: 8px;
    object-fit: cover;
    mix-blend-mode: luminosity;
    z-index: 1 !important;
    aspect-ratio: 16 / 9;
}

.project-item:hover .project-img img {
    mix-blend-mode: normal;
}

@media (max-width: 768px) {
    .project-item {
        flex-direction: column;
        align-items: center;
    }

    .project-img img {
        max-width: 100%;
    }
}
</style>