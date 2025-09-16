<template>
    <footer>
        <p>© {{ currentYear }} {{ $t('full_name') }}</p>
        <!-- <div>
                <a href="https://www.linkedin.com/in/andr%C3%A1s-pap-519a7b240/" target="_blank"><i
                        class="fa-brands fa-linkedin-in"></i></a>
                <a href="mailto:papandras01@gmail.com"><i class="fa-solid fa-at"></i></a>
            </div> -->
    </footer>
</template>

<script setup lang="ts">
const currentYear: number = new Date().getFullYear();
</script>


<style scoped>
footer {
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    background-color: var(--bg-color);
    color: var(--text-color);
    z-index: 1;
}
</style>