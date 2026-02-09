<template>
    <div :class="`section-content ${isProtected ? 'protected' : 'public'}`" id="about-section">
        <!-- Egy modern scrollolható timeline -->
        <div class="timeline">
            <div v-for="exp in experience" :key="exp.year" class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-header">
                        <div class="timeline-year">{{ exp.year }}</div>
                        <div class="timeline-place">{{ exp.place }}</div>
                    </div>
                    <div class="timeline-body">
                        <p>{{ exp.description }}</p>
                        <div class="timeline-skills">
                            <div v-for="skill in exp.skills" :key="skill">{{ skill }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    protected?: boolean
}>();

const isProtected = props.protected || false;

const experience = [{
    year: "2017 - 2022",
    type: "school",
    description: "",
    place: "Budapesti Műszaki Szakképzési Centrum Neumann János Informatikai Technikum",
    skills: ["HTML", "CSS", "JS", "PHP", "C#", "VUE"]
}, {
    year: "2022 - ",
    type: "work",
    place: "HMSoft Zrt.",
    description: "",
    skills: ["Node.JS", "PHP", "React", "WordPress"]
}]
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
    z-index: 1;
}

.protected p {
    text-align: justify;
}

.public p {
    padding: .5rem 0;
}

.timeline {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.protected .timeline {
    width: 90%;
}

.timeline::before {
    width: .2rem;
    height: 150%;
    background-color: var(--text-color);
    content: "";
    position: absolute;
    top: 0;
    left: -1rem;
    z-index: 1;
}

.timeline-item {
    position: relative;
    margin-bottom: 2rem;
    border: 1px solid var(--text-color);
    padding: 1rem;
}

.timeline-item::before {
    content: "";
    width: 1rem;
    height: .1rem;
    background-color: var(--text-color);
    position: absolute;
    top: 50%;
    left: -1rem;
    z-index: 1;
}

.timeline-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>