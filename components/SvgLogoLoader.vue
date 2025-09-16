<template>
    <div class="svg-container">
        <div v-html="svgContent"></div>
    </div>
</template>

<script setup lang="ts">

import { onMounted, watch } from 'vue'
import gsap from 'gsap'

import svgContent from '~/assets/svg/siluette.svg?raw' // <-- Itt importáljuk az SVG tartalmát

import { useThemeStore } from '../stores/theme';

const themeStore = useThemeStore();


onMounted(() => {
    // Gyűjtsd be az összes path-t ID alapján
    const outerPath = document.getElementById('outer-silhouette')
    const innerPath1 = document.getElementById('inner-detail')
    const innerPath2 = document.getElementById('another-detail')

    if (outerPath && innerPath1 && innerPath2) {
        // Hozd létre a timeline-t az animációk sorrendiségének kezelésére
        const tl = gsap.timeline()

        // Állítsd be a stroke tulajdonságokat az összes path-ra
        gsap.set([outerPath, innerPath1, innerPath2], {
            strokeDasharray: (i, target) => target.getTotalLength(),
            strokeDashoffset: (i, target) => target.getTotalLength(),
            stroke: themeStore.currentTheme === 'light' ? '#000' : '#fff',
            fill: 'none',
        })

        watch(
            () => themeStore.currentTheme,
            (newTheme) => {
                const strokeColor = newTheme === 'light' ? '#000' : '#fff';
                gsap.to([outerPath, innerPath1, innerPath2], {
                    stroke: strokeColor,
                    duration: 0,
                });
            },
            { immediate: true }
        );

        // Animáld az első (külső) path-t
        tl.to(outerPath, {
            strokeDashoffset: 0,
            duration: 1,
            ease: 'power2.inOut',
        })

        // Animáld a második (belső) path-t az előző után
        tl.to(innerPath1, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power1.inOut',
        }, ">-0.5") // Ez a sor azt jelenti, hogy 0.5 másodperccel az előző animáció vége előtt indul

        // Animáld a harmadik path-t a második után
        tl.to(innerPath2, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power1.inOut',
        }, "<0.2") // Ez a sor a második animáció kezdetéhez képest 0.2 másodperccel később indul
    }
})

</script>

<style scoped>
.svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: var(--bg-color); */
}

.svg-container {
    stroke-width: 20px;
}

.svg-container :deep(svg) {
    max-height: 100%;
    max-width: 100%;
}
</style>