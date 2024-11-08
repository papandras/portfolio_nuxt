<template>
    <div>
        <header>
            <ul class="menu">
                <li>
                    <!-- <RouterLink to="/" id="name">{{
                            store.texts.name
                    }}</RouterLink> -->
                    <a @click="showmenu" href="/" id="menu-item-name" class="menu-item">{{
                        store.texts.name
                    }}</a>
                </li>
                <li class="menu-hided" id="hidable">
                    <a @click="showmenu" href="/#aboutme" id="menu-item-home" class="menu-item">{{
                        store.texts.menu.about
                    }}</a>
                    <a @click="showmenu" href="/#timeline" id="menu-item-home" class="menu-item">{{
                        store.texts.menu.experience
                    }}</a>
                    <a @click="showmenu" href="/#skills" id="menu-item-home" class="menu-item">{{
                        store.texts.menu.skills
                    }}</a>
                    <a @click="showmenu" href="/#contact" id="menu-item-contact"
                        class="menu-item hero__scroll aos-init aos-animate">{{
                            store.texts.menu.contact
                        }}</a>
                    <a @click="setLang" id="menu-item-contact" class="menu-item hero__scroll aos-init aos-animate">{{
                        store.texts.menu.language
                    }}</a>
                    <a @click="showmenu" v-if="store.isAdmin" href="/admin" id="menu-item-admin"
                        class="menu-item hero__scroll aos-init aos-animate">{{
                            store.texts.menu.admin
                        }}</a>
                </li>
                <li id="hamburger">
                    <img src="@/assets/icon/hamburger.svg" alt="Menu icon" class="menu-icon" @click="showmenu">
                </li>
            </ul>
        </header>



        <main>
            <Cookiebar />
            <slot />
        </main>

        <footer>
            <p>© {{ currentYear }} {{ store.texts.name }}</p>
            <div>
                <a href="https://www.linkedin.com/in/andr%C3%A1s-pap-519a7b240/" target="_blank"><i
                        class="fa-brands fa-linkedin-in"></i></a>
                <a href="mailto:papandras01@gmail.com"><i class="fa-solid fa-at"></i></a>
            </div>
        </footer>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from "~/stores/lang.js"

export default {
    data() {
        const store = useStore()
        store.getLang()

        const showmenu = () => {
            document.getElementById("hidable").classList.toggle("menu-hided")
            document.getElementById("hidable").classList.toggle("menu-visible")
            document.getElementsByTagName("main")[0].classList.toggle("menu-hided")
            // document.getElementsByTagName("footer")[0].classList.toggle("footer")
        }
        const setLang = () => {
            this.store.setLang()
        }

        const currentYear = new Date().getFullYear()

        return {
            store,
            currentYear,
            showmenu,
            setLang
        }
    },
};
</script>

<style scoped>
footer>a {
    padding: none;
}

footer>div {
    display: flex;
    justify-content: center;
    gap: 5%;
}
</style>