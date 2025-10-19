<template>
    <div :class="`section-content ${isProtected ? 'protected' : 'public'}`" id="about-section">
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    protected?: boolean
}>();

const isProtected = props.protected || false;
</script>

<style scoped>
.protected {
    height: max(100%, 100%);
    overflow: hidden;
    position: relative;
    padding: .5rem 0;
}

.protected::after {
    content: "";
    height: 50%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom,
            rgba(var(--bg-color-r), var(--bg-color-g), var(--bg-color-b), 0) 0%,
            rgb(var(--bg-color-r), var(--bg-color-g), var(--bg-color-b)) 50%);
}

.protected p {
    text-align: justify;
}

.public p {
    padding: .5rem 0;
}
</style>