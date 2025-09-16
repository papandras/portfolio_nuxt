<template>
    <div>
        <Header />

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>

<style scoped>
main {
    height: 90vh;
    /* padding: 2rem; */
    background-color: var(--bg-color);
    color: var(--text-color);
}
</style>