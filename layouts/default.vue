<template>
    <div>
        <!-- Global Cursor -->
        <div class="global-custom-cursor" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
        
        <!-- Global Navigation -->
        <MinimalHeader />

        <!-- Page Content -->
        <slot />
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
    // Only track if device has a fine pointer (mouse) to save resources
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', updateCursor)
    }
})

onUnmounted(() => {
    window.removeEventListener('mousemove', updateCursor)
})
</script>

<style>
/* Base layout styles if any */
</style>
