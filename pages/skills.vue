<template>
    <div class="page-section" id="about-section">
        <h1>{{ $t('skills') }}</h1>
        <SiteSectionContentSkills />

    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
    layout: 'subpage'
})

</script>

<style scoped></style>