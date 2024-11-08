<script setup>
import { useStore } from "@/stores/lang.js"

const store = useStore()
store.getLang()
</script>

<template>
    <div id="skills">
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.csharp }}</p>
            <img src="@/assets/img/csharp.svg" :alt="store.texts.skills.csharp" :title="store.texts.skills.csharp"
                class="skill-img">
        </div>
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.html }}</p>
            <img src="@/assets/img/html.png" :alt="store.texts.skills.html" :title="store.texts.skills.html"
                class="skill-img">
        </div>
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.css }}</p>
            <img src="@/assets/img/css.png" :alt="store.texts.skills.css" :title="store.texts.skills.css" class="skill-img">
        </div>
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.bootstrap }}</p>
            <img src="@/assets/img/bootstrap.png" :alt="store.texts.skills.bootstrap" :title="store.texts.skills.bootstrap"
                class="skill-img">
        </div>
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.tailwind }}</p>
            <img src="@/assets/img/tailwind.png" :alt="store.texts.skills.tailwind" :title="store.texts.skills.tailwind"
                class="skill-img">
        </div>
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.javascript }}</p>
            <img src="@/assets/img/js.png" :alt="store.texts.skills.javascript" :title="store.texts.skills.javascript"
                class="skill-img">
        </div>
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.vue }}</p>
            <img src="@/assets/img/vue.png" :alt="store.texts.skills.vue" :title="store.texts.skills.vue" class="skill-img">
        </div>
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.php }}</p>
            <img src="@/assets/img/php.png" :alt="store.texts.skills.php" :title="store.texts.skills.php" class="skill-img">
        </div>
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.laravel }}</p>
            <img src="@/assets/img/laravel.png" :alt="store.texts.skills.laravel" :title="store.texts.skills.laravel"
                class="skill-img">
        </div>
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.mysql }}</p>
            <img src="@/assets/img/mysql.svg" :alt="store.texts.skills.mysql" :title="store.texts.skills.mysql"
                class="skill-img">
        </div>
        <div class="skill-item">
            <p class="skill-detail">{{ store.texts.skills.git }}</p>
            <img src="@/assets/img/github.png" :alt="store.texts.skills.git" :title="store.texts.skills.git"
                class="skill-img">
        </div>
    </div>
</template>

<style scoped>
#skills {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-evenly;
}

.skill-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column-reverse;
    width: 30%;
    height: 190px;
}

.skill-img {
    width: 100px;
    padding: 5px;
    margin: 10px;
}

.skill-detail {
    margin: 5px;
}

@media only screen and (max-width: 600px) {
    #skills {
        display: unset;
        /* display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center; */
    }

    .skill-detail {
        text-align: center;
        margin: 10px 0;
    }

    /* .skill-item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column-reverse;
        width: 50%;
        margin: 20px 0;
    } */
}
</style>

<script>
export default {
    mounted() {
        if (window.innerWidth < 700) {
            for (let i = 0; i < document.getElementsByClassName("skill-item").length; i++) {
                if (i % 2 == 0) {
                    document.getElementsByClassName("skill-item")[i].setAttribute("data-aos", "fade-right")
                } else {
                    document.getElementsByClassName("skill-item")[i].setAttribute("data-aos", "fade-left")
                }
            }
        }
    }
}
</script>