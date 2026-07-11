<template>
    <div class="error-page">
        <div class="grain-overlay"></div>
        <div class="error-content">
            <h1 class="error-code">
                <span class="outline-text-accent">4</span>
                <span class="text-accent">0</span>
                <span class="outline-text-accent">4</span>
            </h1>
            <p class="error-msg">Az oldal nem található</p>
            <NuxtLink to="/" class="btn-outline">
                <i class="fa-solid fa-arrow-left"></i> VISSZA A FŐOLDALRA
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    error: Object
})
</script>

<style scoped>
.error-page {
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg);
}

.error-content {
    text-align: center;
}

.error-code {
    font-size: clamp(8rem, 20vw, 20rem);
    letter-spacing: -0.04em;
    line-height: 0.85;
    margin-bottom: 2rem;
}

.error-msg {
    font-family: var(--font-body);
    font-size: 1.5rem;
    color: var(--text-muted);
    margin-bottom: 3rem;
}
</style>
