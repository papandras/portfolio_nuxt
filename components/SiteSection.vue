<template>
    <section :style="{ 'align-items': sectionAlignment }">
        <div class="section-header"
            :style="{ 'flex-direction': sectionAlignment === 'flex-start' ? 'row' : 'row-reverse' }">
            <h1>{{ $t(title) }}</h1>
            <div>
                <NuxtLink :to="props.href" class="nuxt-link forward" v-if="props.href">
                    Tovább
                </NuxtLink>
            </div>
        </div>
        <div class="content" :style="{ 'flex-direction': sectionAlignment === 'flex-start' ? 'row' : 'row-reverse' }">
            <div class="content-slot" :style="{ 'justify-content': sectionAlignment }">
                <slot />
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    alignment: string,
    href?: string
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

.section-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.content {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 100%;
}

.content-slot {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.forward {
    background-color: var(--secondary-color);
    color: var(--text-color);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    border: 1px solid var(--text-color);
}

.forward:hover {
    border-radius: 8px;
}
</style>