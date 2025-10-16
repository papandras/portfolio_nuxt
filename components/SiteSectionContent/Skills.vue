<template>
    <div :class="`section-content ${isProtected ? 'protected' : 'public'}`" id="about-section">
        <div class="skill-container">
            <div v-for="group in skillGroups" :key="group" class="skill-group">
                <h3>{{ $t(group) }}</h3>
                <div class="skill-items">
                    <div v-for="skill in skills.filter(s => s.group === group)" :key="skill.skill" class="skill-item">
                        <img :src="skill.imageLink" :alt="`${skill.skill} icon`" class="skill-icon" />
                        <div class="skill-info">
                            <p class="skill-name">{{ skill.skill }}</p>
                            <div class="skill-progress-bar">
                                <div class="skill-progress" :style="{ width: `${skill.progress}%` }"></div>
                            </div>
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

const skills = [
    {
        skill: "HTML",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
        experienceLevel: null,
        progress: 80, // School (Alapvető web skill)
        source: "School",
        group: "Frontend"
    },
    {
        skill: "Cascading Style Sheets (CSS)",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
        experienceLevel: null,
        progress: 75, // School (Alapvető web skill)
        source: "School",
        group: "Frontend"
    },
    {
        skill: "JavaScript",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
        experienceLevel: null,
        progress: 95, // Both (Alap és munka)
        source: "Both",
        group: "Frontend"
    },
    {
        skill: "React.js",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        experienceLevel: null,
        progress: 85, // Work
        source: "Work",
        group: "Frontend"
    },
    {
        skill: "Vue.js",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
        experienceLevel: null,
        progress: 70, // School
        source: "School",
        group: "Frontend"
    },
    {
        skill: "Node.js",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg",
        experienceLevel: null,
        progress: 90, // Work
        source: "Work",
        group: "Backend"
    },
    {
        skill: "PHP",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
        experienceLevel: null,
        progress: 80, // Both (Web alapok)
        source: "Both",
        group: "Backend"
    },
    {
        skill: "C#",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg",
        experienceLevel: null,
        progress: 70, // School
        source: "School",
        group: "Backend"
    },
    {
        skill: "ASP.NET",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain.svg",
        experienceLevel: null,
        progress: 65, // School
        source: "School",
        group: "Backend"
    },
    {
        skill: ".NET Core",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain.svg",
        experienceLevel: null,
        progress: 70, // School
        source: "School",
        group: "Backend"
    },
    {
        skill: ".NET Framework",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain.svg",
        experienceLevel: null,
        progress: 60, // School
        source: "School",
        group: "Backend"
    },
    {
        skill: "Microservices",
        imageLink: "https://cdn-icons-png.flaticon.com/512/6146/6146577.png",
        experienceLevel: null,
        progress: 85, // Work
        source: "Work",
        group: "Backend"
    },
    {
        skill: "Back-End Web Development",
        imageLink: "https://cdn-icons-png.flaticon.com/512/8010/8010472.png",
        experienceLevel: null,
        progress: 90, // Work (Összefoglaló skill)
        source: "Work",
        group: "Backend"
    },
    {
        skill: "PostgreSQL",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
        experienceLevel: null,
        progress: 85, // Work
        source: "Work",
        group: "Database (DB)"
    },
    {
        skill: "MongoDB",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg",
        experienceLevel: null,
        progress: 80, // Work
        source: "Work",
        group: "Database (DB)"
    },
    {
        skill: "SQL",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
        experienceLevel: null,
        progress: 90, // Both (Alap és munka)
        source: "Both",
        group: "Database (DB)"
    },
    {
        skill: "Prisma ORM",
        imageLink: "https://www.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png",
        experienceLevel: null,
        progress: 85, // Work
        source: "Work",
        group: "Database (DB)"
    },
    {
        skill: "Databases",
        imageLink: "https://icon-library.com/images/database-png-icon/database-png-icon-22.jpg",
        experienceLevel: null,
        progress: 90, // Both (Összefoglaló skill)
        source: "Both",
        group: "Database (DB)"
    },
    {
        skill: "GraphQL",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
        experienceLevel: null,
        progress: 85, // Work
        source: "Work",
        group: "API/Adatkapcsolat"
    },
    {
        skill: "Apollo GraphQL",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apollographql/apollographql-original.svg",
        experienceLevel: null,
        progress: 80, // Work
        source: "Work",
        group: "API/Adatkapcsolat"
    },
    {
        skill: "Git",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg",
        experienceLevel: null,
        progress: 95, // Both (Alap és munka)
        source: "Both",
        group: "DevOps/Tools"
    },
    {
        skill: "GitHub",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png",
        experienceLevel: null,
        progress: 80, // School (Közép szint)
        source: "School",
        group: "DevOps/Tools"
    },
    {
        skill: "Docker Products",
        imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
        experienceLevel: null,
        progress: 80, // Work
        source: "Work",
        group: "DevOps/Tools"
    },
    {
        skill: "Sourcetree",
        imageLink: "https://cdn.worldvectorlogo.com/logos/sourcetree-1.svg",
        experienceLevel: null,
        progress: 75, // Work (Spezifikus eszköz)
        source: "Work",
        group: "DevOps/Tools"
    },
    {
        skill: "Jira",
        imageLink: "https://logo.svgcdn.com/logos/jira.png",
        experienceLevel: null,
        progress: 90, // Work (Gyakori eszköz)
        source: "Work",
        group: "DevOps/Tools"
    },
    {
        skill: "WordPress",
        imageLink: "https://img.icons8.com/3d-fluency/512/wordpress.png",
        experienceLevel: null,
        progress: 75, // Work
        source: "Work",
        group: "Other"
    },
    {
        skill: "Object-Oriented Programming (OOP)",
        imageLink: "https://cdn-icons-png.freepik.com/256/4248/4248245.png",
        experienceLevel: null,
        progress: 85, // School (Alapelv)
        source: "School",
        group: "Other"
    },
    {
        skill: "Web Development",
        imageLink: "https://static.vecteezy.com/system/resources/previews/011/153/360/non_2x/3d-web-developer-working-on-project-illustration-png.png",
        experienceLevel: null,
        progress: 95, // Work (Összefoglaló skill)
        source: "Work",
        group: "Other"
    },
    {
        skill: "Software Development",
        imageLink: "https://static.vecteezy.com/system/resources/previews/036/584/129/non_2x/3d-illustration-of-software-development-free-png.png",
        experienceLevel: null,
        progress: 85, // School (Összefoglaló skill)
        source: "School",
        group: "Other"
    },
    {
        skill: "English",
        imageLink: "https://img.icons8.com/color/48/great-britain.png",
        experienceLevel: null,
        progress: 80, // School
        source: "School",
        group: "Other"
    },
    {
        skill: "Microsoft Office",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/6/65/Microsoft_Office_logo_%282013%E2%80%932019%29.png",
        experienceLevel: null,
        progress: 75, // School
        source: "School",
        group: "Other"
    }
];

const skillGroups = skills.reduce((groups, skill) => {
    if (!groups.includes(skill.group)) {
        groups.push(skill.group);
    }
    return groups;
}, [] as string[]);
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
}

.protected p {
    text-align: justify;
}

.public p {
    padding: .5rem 0;
}

#about-section {
    padding-right: .5rem;
}

.skill-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.skill-group h3 {
    margin-bottom: .5rem;
    color: rgb(var(--text-color-r), var(--text-color-g), var(--text-color-b));
    border-bottom: 2px solid rgb(var(--text-color-r), var(--text-color-g), var(--text-color-b));
    padding-bottom: .25rem;
}

.skill-items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.skill-item {
    display: flex;
    align-items: center;
    width: 200px;
    gap: .5rem;
}

.skill-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
    mix-blend-mode: luminosity;
}

.skill-group:hover .skill-icon {
    mix-blend-mode: normal;
}

.skill-group:hover+.skill-group .skill-icon {
    mix-blend-mode: normal;
}

.skill-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .25rem;
    justify-content: space-between;
    height: 100%;
}

.skill-name {
    font-weight: bold;
    margin: 0 0 0.25rem 0;
}

.skill-progress-bar {
    background-color: rgba(var(--primary-color-r), var(--primary-color-g), var(--primary-color-b), 0.1);
    border-radius: 5px;
    height: 10px;
    width: 100%;
    overflow: hidden;
}

.skill-progress {
    background-color: rgb(var(--text-color-r), var(--text-color-g), var(--text-color-b));
    height: 100%;
    border-radius: 5px 0 0 5px;
    transition: width 0.3s ease-in-out;
    width: 0;
}

.skill-progress-bar:hover .skill-progress {
    height: 12px;
}

@media (max-width: 600px) {
    .skill-item {
        width: 100%;
    }
}
</style>