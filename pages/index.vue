<template>
    <div class="grid-container">
        <transition name="fade">
            <div class="grid-item" id="item1" v-if="!isLoading">
                <SiteSection title="about" href="/about">
                    <SiteSectionContentAbout :protected="true" />
                </SiteSection>
            </div>
        </transition>

        <transition name="fade">
            <div class="grid-item" id="item2" v-if="!isLoading">
                <SiteSection title="experience" href="/experience" alignment="flex-end">
                    <SiteSectionContentExperience />
                </SiteSection>
            </div>
        </transition>

        <transition name="fade">
            <div class="grid-item" id="item3" v-if="!isLoading">
                <SiteSection title="skills" href="/skills">
                    <SiteSectionContentSkills />
                </SiteSection>
            </div>
        </transition>

        <transition name="fade">
            <div class="grid-item" id="item4" v-if="!isLoading">
                <SiteSection title="projects" href="/projects" alignment="flex-end">
                    <SiteSectionContentProjects />
                </SiteSection>
            </div>
        </transition>

        <div class="grid-item" id="item5">
            <transition name="fade">
                <SvgLogoLoader />
            </transition>
        </div>

        <transition name="fade">
            <div class="grid-item" id="item6" v-if="!isLoading">
                <SiteSection title="contact" alignment="flex-end">
                    <NuxtLink to="/contact" class="nuxt-link">
                        <p>
                            <i class="fa-solid fa-hand-point-right"></i>
                            {{ $t('send_me_a_message') }}
                        </p>
                    </NuxtLink>
                </SiteSection>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
    // A setTimeout csak egy példa, a valóságban a tartalom betöltése után kell elrejteni a loadert.
    setTimeout(() => {
        isLoading.value = false
    }, 1000)
})
</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity .5s ease-in;
}

.grid-container {
    height: 90vh;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: repeat(4, 1fr) 100px;
    grid-template-areas:
        "top-left . top-right"
        "top-left center top-right"
        "bottom-left center bottom-right"
        "bottom-left . bottom-right"
        ". . contact";
}

.grid-item {
    background-color: var(--bg-color);
}

#item1 {
    grid-area: top-left;
}

#item2 {
    grid-area: top-right;
}

#item3 {
    grid-area: bottom-left;
}

#item4 {
    grid-area: bottom-right;
}

#item5 {
    /* background-color: var(--primary-color); */
    grid-area: center;
    /* height: 50vh;
    width: 20vw; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    max-height: 50vh;
}

#item6 {
    grid-area: contact;
    /* background-color: var(--bg-color); */
}

.fa-hand-point-right {
    margin: 1rem;
    color: var(--text-color);
    animation: bounce-right 0.8s infinite ease-in-out;
}

.fa-arrow-right {
    margin: 1rem;
    color: var(--text-color);
    animation: bounce-right 0.8s infinite ease-in-out;
}

@keyframes bounce-right {

    0%,
    100% {
        transform: translateX(-5px);
        /* Kezdeti és végső pozíció */
    }

    50% {
        transform: translateX(5px);
        /* Az animáció közepén 5px-t jobbra mozdul */
    }
}
</style>