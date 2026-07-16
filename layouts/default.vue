<template>
    <div class="layout-root">
        <!-- Custom Cursor -->
        <div class="custom-cursor" aria-hidden="true" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>

        <!-- Grain Overlay -->
        <div class="grain-overlay" aria-hidden="true"></div>

        <!-- Navigation Overlay -->
        <NavOverlay />

        <!-- Page Content -->
        <div class="page-wrapper">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)

const updateCursor = (e: MouseEvent) => {
    cursorX.value = e.clientX
    cursorY.value = e.clientY
}

onMounted(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', updateCursor)
    }
})

onUnmounted(() => {
    window.removeEventListener('mousemove', updateCursor)
})
</script>

<style>
.layout-root {
    position: relative;
    width: 100%;
}
.page-wrapper {
    width: 100%;
    position: relative;
}
</style>
