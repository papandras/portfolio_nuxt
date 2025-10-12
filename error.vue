<template>
    <div class="error-container">
        <div class="error-content">
            <h1 v-if="error.statusCode === 404">
                404 - Az oldal nem található
            </h1>
            <h1 v-else>
                {{ error.statusCode }} - Hiba történt
            </h1>
            <p class="error-message">Sajnáljuk, valami hiba lépett fel. Próbálja meg később!</p>
            <NuxtLink to="/" class="error-button">
                Vissza a főoldalra
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    error: Object
})
</script>

<style scoped>
.error-container {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    background-color: var(--bg-color);
    color: var(--text-color);
    animation: fadeIn 2s ease-in-out;
}

/* Letisztult tartalom-konténer */
.error-content {
    padding: 2rem 3rem;
    max-width: 90%;
    box-sizing: border-box;
}

/* Cím stílusa */
h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-color);
}

/* Leírás stílusa */
.error-message {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 2rem;
    opacity: 0.8;
}

/* Elegáns gomb stílusa */
.error-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-color);
    background-color: var(--bg-color);
    border: 1px solid var(--text-color);
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.error-button:hover {
    border-radius: 8px;
}

/* Animációk */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>