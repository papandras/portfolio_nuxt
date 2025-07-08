<template>
    <div>
        <div class="section" id="aboutme">
            <a href="#aboutme" class="section-header">{{ store.texts.about }}</a>
            <Aboutme />
        </div>
        <div class="section" id="timeline">
            <a href="#timeline" class="section-header">{{ store.texts.experience.title }}</a>
            <Timeline />
        </div>
        <div class="section" data-aos="fade-up">
            <a href="#skills" class="section-header">{{ store.texts.skills.title }}</a>
            <Skills />
        </div>
        <div class="section" id="contact" data-aos="fade-up">
            <a href="#contact" class="section-header">{{ store.texts.contact.title }}</a>
            <Contact />
        </div>
    </div>
</template>

<script>
import { useStore } from "~/stores/lang.js"

import Skills from "~/components/Skills.vue"
import Timeline from "~/components/Timeline.vue"
import Contact from "~/components/Contact.vue"
import Aboutme from "~/components/Aboutme.vue"

export default {
    components: {
        Skills, Timeline, Contact, Aboutme
    },
    data() {
        return {
            store: useStore()
        }
    }
}
</script>
