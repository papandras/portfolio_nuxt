<template>
    <div class="page-section" id="about-section">
        <h1>{{ $t('experience') }}</h1>
        <SiteSectionContentExperience />

    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
    layout: 'subpage'
})

</script>

<style scoped></style>