<template>
    <div class="grid-container">
        <transition name="fade">
            <div class="grid-item" id="item1" v-if="!isLoading">
                <SiteSection title="about">
                    <p>
                        Valami tartalom
                    </p>
                </SiteSection>
            </div>
        </transition>

        <transition name="fade">
            <div class="grid-item" id="item2" v-if="!isLoading">
                <SiteSection title="experience" alignment="flex-end">
                    <p>
                        Valami tartalom
                    </p>
                </SiteSection>
            </div>
        </transition>

        <transition name="fade">
            <div class="grid-item" id="item3" v-if="!isLoading">
                <SiteSection title="skills">
                    <p>
                        Valami tartalom
                    </p>
                </SiteSection>
            </div>
        </transition>

        <transition name="fade">
            <div class="grid-item" id="item4" v-if="!isLoading">
                <SiteSection title="contact" alignment="flex-end">
                    <p>
                        Valami tartalom
                    </p>
                </SiteSection>
            </div>
        </transition>

        <div class="grid-item" id="item5">
            <transition name="fade">
                <SvgLogoLoader />
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
    // A setTimeout csak egy példa, a valóságban a tartalom betöltése után kell elrejteni a loadert.
    setTimeout(() => {
        isLoading.value = false
    }, 1000)
})
</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity .5s ease-in;
}

.grid-container {
    height: 100%;
    display: grid;
    grid-template-columns: 5fr 100px 5fr;
    grid-template-rows: 5fr 100px 5fr;
    grid-template-areas:
        "top-left . top-right"
        ". center ."
        "bottom-left . bottom-right";
}

.grid-item {
    background-color: var(--bg-color);
    /* border: 1px solid var(--text-color); */
}

#item1 {
    grid-area: top-left;
}

#item2 {
    grid-area: top-right;
}

#item3 {
    grid-area: bottom-left;
}

#item4 {
    grid-area: bottom-right;
}

#item5 {
    /* background-color: var(--primary-color); */
    grid-area: center;
    height: 50vh;
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>