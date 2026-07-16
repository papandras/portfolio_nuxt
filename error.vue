<template>
    <div class="error-page">
        <div class="grain-overlay" aria-hidden="true"></div>
        <div class="error-content">
            <h1 class="error-code">
                <span class="outline-text-accent">{{ errorCode.charAt(0) }}</span>
                <span class="text-accent">{{ errorCode.charAt(1) }}</span>
                <span class="outline-text-accent">{{ errorCode.charAt(2) }}</span>
            </h1>
            <p class="error-msg">{{ $t('error_message') }}</p>
            <NuxtLink to="/" class="btn-outline" @click="handleClearError">
                <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> {{ $t('error_back_home') }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    error: { statusCode: number; message: string }
}>()

const errorCode = computed(() => String(props.error?.statusCode || 404))

const handleClearError = () => {
    clearError({ redirect: '/' })
}
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
