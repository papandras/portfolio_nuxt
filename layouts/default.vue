<template>
    <div>
        <Header :withNav="false" />

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>
