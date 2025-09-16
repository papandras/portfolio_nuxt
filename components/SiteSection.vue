<template>
    <section :style="{ 'align-items': sectionAlignment }">
        <h1>{{ $t(title) }}</h1>
        <div class="content" :style="{ 'flex-direction': sectionAlignment === 'flex-start' ? 'row' : 'row-reverse' }">
            <div>
                <slot />
            </div>
            <div>
                <button class="forward">Tovább</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    alignment: string
}>()

const sectionAlignment = props.alignment || 'flex-start'
</script>

<style scoped>
section {
    padding: 2rem;
    background-color: var(--bg-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

.content {
    display: flex;
    justify-content: space-between;
    width: 80%;
}

.forward {
    background-color: var(--secondary-color);
    color: var(--text-color);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    border: 1px solid var(--text-color);
}

.forward:hover {
    border-radius: 8px;
}
</style>