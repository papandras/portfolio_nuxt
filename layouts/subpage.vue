<template>
    <div>
        <Header :withNav="true" />

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>
