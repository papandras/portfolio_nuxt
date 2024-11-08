<script setup>
import { useStore } from "@/stores/lang.js"

const store = useStore()
store.getLang()
</script>

<template>
    <div id="timeline">
        <div class="study-item">
            <img src="@/assets/img/school.svg" :alt="store.texts.experience.neumann" :title="store.texts.experience.neumann"
                class="study-img">
            <p class="study-detail">{{ store.texts.experience.neumann }}</p>
        </div>
        <div class="study-item">
            <img src="@/assets/img/work.svg" :alt="store.texts.experience.company" :title="store.texts.experience.company"
                class="study-img">
            <p class="study-detail">{{ store.texts.experience.company }}</p>
        </div>
    </div>
</template>

<style scoped>
#timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.study-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
    width: 100lvh;
}

.study-img {
    width: 100px;
    height: 100px;
    border: 1px solid var(--backgroundColor);
    border-radius: 50%;
    padding: 5px;
    margin: 10px;
}

.study-detail {
    margin: 5px;
}

@media only screen and (max-width: 600px) {
    #timeline {
        /* width: 100%;
        position: relative; */
    }

    /* .study-img {
        display: block;
        margin: auto;
    } */

    .study-detail {
        text-align: center;
        margin: 10px 0;
    }

    .study-item {
        /* justify-content: center;
        flex-direction: column; */
        width: 90%;
    }
}
</style>