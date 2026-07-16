<template>
    <div class="noir-home">
        <!-- ===== HERO ===== -->
        <section class="hero-section">
            <div class="hero-content">
                <div class="hero-label" data-aos="fade-down" data-aos-duration="800">
                    <span class="label-line"></span>
                    <span class="label-text">PORTFOLIO — 2025</span>
                </div>

                <h1 class="hero-name" data-aos="fade-up" data-aos-duration="1000">
                    <span class="name-line outline-text">PAP</span>
                    <span class="name-line text-accent">ANDRÁS</span>
                </h1>

                <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    {{ $t('role') }} <span class="subtitle-dim">· {{ $t('role_subtitle') }}</span>
                </p>

                <p class="hero-role" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    {{ $t('introduction') }}
                </p>

                <div class="hero-cta" data-aos="fade-up" data-aos-delay="400">
                    <NuxtLink :to="localePath('/projects')" class="btn-gradient">
                        {{ $t('projects') }} <i class="fa-solid fa-arrow-right"></i>
                    </NuxtLink>
                    <NuxtLink :to="localePath('/contact')" class="btn-outline">
                        {{ $t('contact') }}
                    </NuxtLink>
                </div>
            </div>

            <div class="scroll-indicator">
                <span>SCROLL</span>
                <div class="scroll-line"></div>
            </div>
        </section>

        <!-- ===== ABOUT PREVIEW ===== -->
        <section class="section about-preview-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">01</span>
                    <h2 class="section-label">{{ $t('about') }}</h2>
                </div>
                <div class="split-content" data-aos="fade-up">
                    <p class="big-text">
                        {{ $t('introduction') }}
                    </p>
                    <NuxtLink :to="localePath('/about')" class="btn-outline mt-lg">
                        {{ $t('about') }} <i class="fa-solid fa-arrow-right"></i>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- ===== SKILLS MARQUEE ===== -->
        <section class="marquee-section">
            <div class="marquee-track">
                <div class="marquee-content">
                    <span v-for="n in 3" :key="n">
                        NODE.JS • GRAPHQL • TYPESCRIPT • ELASTICSEARCH • REACT • PHP • WORDPRESS • POSTGRESQL • PRISMA • DOCKER •&nbsp;
                    </span>
                </div>
            </div>
        </section>

        <!-- ===== EXPERIENCE ===== -->
        <section class="section experience-preview-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">02</span>
                    <h2 class="section-label">{{ $t('experience') }}</h2>
                </div>
                <div class="split-content" data-aos="fade-left">
                    <ul class="exp-list">
                        <li class="exp-item">
                            <div class="exp-meta">
                                <span class="exp-year">2022 — {{ $t('present').toUpperCase() }}</span>
                            </div>
                            <h3 class="exp-title">{{ $t('company') }}</h3>
                        </li>
                        <li class="exp-item">
                            <div class="exp-meta">
                                <span class="exp-year">2017 — 2022</span>
                            </div>
                            <h3 class="exp-title">{{ $t('neumann') }}</h3>
                        </li>
                    </ul>
                    <NuxtLink :to="localePath('/experience')" class="btn-outline mt-lg">
                        {{ $t('experience') }} <i class="fa-solid fa-arrow-right"></i>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- ===== SERVICES PREVIEW ===== -->
        <section class="section services-preview-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">03</span>
                    <h2 class="section-label">{{ $t('services') }}</h2>
                </div>
                <div class="split-content" data-aos="fade-left">
                    <p class="big-text">
                        {{ $t('srv_intro') }}
                    </p>
                    
                    <div class="services-grid mt-lg">
                        <NuxtLink v-for="(srv, i) in serviceTypes" :key="srv.titleKey"
                            :to="localePath('/services')"
                            class="service-card"
                            data-aos="fade-up"
                            :data-aos-delay="i * 60">
                            <div class="service-header">
                                <div class="service-icon"><i :class="srv.icon"></i></div>
                                <h3 class="service-title">{{ $t(srv.titleKey) }}</h3>
                            </div>
                            <p class="service-desc">{{ $t(srv.descKey) }}</p>
                        </NuxtLink>
                    </div>

                    <NuxtLink :to="localePath('/services')" class="btn-outline mt-lg">
                        {{ $t('services') }} <i class="fa-solid fa-arrow-right"></i>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- ===== PROJECTS PREVIEW ===== -->
        <section class="section projects-preview-section">
            <div class="grid-split projects-grid-header">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">04</span>
                    <h2 class="section-label">{{ $t('projects') }}</h2>
                </div>
                <div class="split-content">
                    <NuxtLink :to="localePath('/projects')" class="btn-outline">
                        {{ $t('projects') }} <i class="fa-solid fa-arrow-right"></i>
                    </NuxtLink>
                </div>
            </div>

            <div class="projects-grid">
                <div v-for="(project, i) in projects" :key="project.title"
                    class="project-card"
                    data-aos="fade-up"
                    :data-aos-delay="i * 100">

                    <div class="project-img-wrap">
                        <img :src="project.img_thumbnail_url" :alt="project.title" class="project-img" loading="lazy">
                        <div class="img-overlay">
                            <span class="overlay-number">{{ String(i + 1).padStart(2, '0') }}</span>
                        </div>
                    </div>

                    <div class="project-info">
                        <div class="project-header">
                            <h3 class="project-title">{{ project.title }}</h3>
                            <span class="project-year">{{ project.year }}</span>
                        </div>
                        <p class="project-desc">{{ project.description }}</p>
                        <div class="project-tech">
                            <span v-for="tech in project.technologies" :key="tech" class="tech-chip">{{ tech }}</span>
                        </div>
                        <div class="project-links">
                            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link" :aria-label="'View code for ' + project.title">
                                <i class="fa-brands fa-github" aria-hidden="true"></i> CODE
                            </a>
                            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link" :aria-label="'View live site: ' + project.title">
                                <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> LIVE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== CONTACT CTA ===== -->
        <section class="section contact-cta-section">
            <div class="grid-split" data-aos="fade-up">
                <div class="split-label">
                    <span class="section-number">05</span>
                    <h2 class="section-label">{{ $t('contact') }}</h2>
                    <div class="contact-links">
                        <a href="mailto:hello@papandras.hu" class="contact-link-item">
                            <i class="fa-solid fa-at"></i> hello@papandras.hu
                        </a>
                        <a href="https://www.linkedin.com/in/papandras" target="_blank" rel="noopener noreferrer" class="contact-link-item">
                            <i class="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="https://github.com/papandras" target="_blank" rel="noopener noreferrer" class="contact-link-item">
                            <i class="fa-brands fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
                <div class="split-content">
                    <form id="homecontactform" @submit.prevent="sendEmail" class="contact-form">
                        <div class="form-field">
                            <label for="hcname" class="field-label">{{ $t('name') }}</label>
                            <input type="text" id="hcname" name="name" v-model="formName" class="field-input" required autocomplete="name">
                            <div class="field-underline"></div>
                        </div>
                        <div class="form-field">
                            <label for="hcemail" class="field-label">{{ $t('email') }}</label>
                            <input type="email" id="hcemail" name="email" v-model="formEmail" class="field-input" required autocomplete="email">
                            <div class="field-underline"></div>
                        </div>
                        <div class="form-field">
                            <label for="hcsubject" class="field-label">{{ $t('subject') }}</label>
                            <textarea id="hcsubject" name="subject" v-model="formSubject" class="field-textarea" rows="5" required></textarea>
                            <div class="field-underline"></div>
                        </div>
                        <button type="submit" class="btn-gradient submit-btn" :disabled="isSending" :aria-busy="isSending">
                            {{ isSending ? $t('sending') : $t('send') }}
                            <i v-if="!isSending" class="fa-solid fa-paper-plane" aria-hidden="true"></i>
                        </button>
                        <Transition name="fade">
                            <p v-if="submitStatus === 'success'" class="status-msg success" role="alert">
                                <i class="fa-solid fa-check-circle" aria-hidden="true"></i> {{ $t('msg_success') }}
                            </p>
                            <p v-else-if="submitStatus === 'error'" class="status-msg error" role="alert">
                                <i class="fa-solid fa-exclamation-circle" aria-hidden="true"></i> {{ $t('msg_error') }}
                            </p>
                        </Transition>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { definePageMeta, useLocalePath } from '#imports'
import emailjs from 'emailjs-com'

definePageMeta({ layout: 'default' })
const localePath = useLocalePath()

const serviceTypes = [
    {
        icon: 'fa-solid fa-rocket',
        titleKey: 'srv_type_landing_title',
        descKey: 'srv_type_landing_desc'
    },
    {
        icon: 'fa-solid fa-address-card',
        titleKey: 'srv_type_portfolio_title',
        descKey: 'srv_type_portfolio_desc'
    },
    {
        icon: 'fa-solid fa-building',
        titleKey: 'srv_type_corporate_title',
        descKey: 'srv_type_corporate_desc'
    },
    {
        icon: 'fa-brands fa-wordpress',
        titleKey: 'srv_type_wp_title',
        descKey: 'srv_type_wp_desc'
    },
    {
        icon: 'fa-solid fa-wand-magic-sparkles',
        titleKey: 'srv_type_custom_title',
        descKey: 'srv_type_custom_desc'
    },
]

const projects = [
    {
        title: "Portfolio Weboldal",
        description: "Personal developer portfolio website built with Nuxt 3 and TypeScript, featuring multi-language support and modern UI design.",
        github: "https://github.com/papandras/portfolio_nuxt",
        link: "https://papandras.hu/",
        year: "2023",
        technologies: ["Nuxt 3", "TypeScript", "Vue 3", "CSS"],
        img_thumbnail_url: "https://i.kek.sh/Cnt92uGyo6G.png"
    },
    {
        title: "BDR Honlap",
        description: "A professional company showcase website built on WordPress using PHP, jQuery, and JavaScript technologies to manage painting, decorating, and home renovation services.",
        github: "",
        link: "https://bdrandbdr.hu/",
        year: "2025",
        technologies: ["WordPress", "PHP", "jQuery", "JavaScript"],
        img_thumbnail_url: "https://i.kek.sh/it2B3p4z5Sc.png"
    },
    {
        title: "Értem magamat Honlap",
        description: "Professional coaching and psychology related website setup.",
        github: "",
        link: "https://ertemmagamat.hu/",
        year: "2025",
        technologies: ["WordPress"],
        img_thumbnail_url: "https://i.kek.sh/37c0FEdHset.png"
    },
    {
        title: "DAKA Möbel Produkt WebShop",
        description: "A professional e-commerce platform, implemented on a WordPress and WooCommerce foundation, built on core PHP and JavaScript/jQuery technologies.",
        github: "",
        link: "https://mobelprodukt.eu/",
        year: "2025",
        technologies: ["WordPress", "WooCommerce"],
        img_thumbnail_url: "https://i.kek.sh/V51w5UWC6E9.jpg"
    }
]

const formName = ref('')
const formEmail = ref('')
const formSubject = ref('')
const isSending = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const sendEmail = async () => {
    if (isSending.value) return
    isSending.value = true
    submitStatus.value = 'idle'
    try {
        await emailjs.send('service_i51noeu', 'template_5kb0nxf', {
            from_name: formName.value,
            to_name: 'András',
            reply_to: formEmail.value,
            message: formSubject.value
        }, 'FRoQzZDdOrg0OYAxI')
        submitStatus.value = 'success'
        formName.value = ''
        formEmail.value = ''
        formSubject.value = ''
        setTimeout(() => { submitStatus.value = 'idle' }, 5000)
    } catch (error) {
        console.error('Email send error:', error)
        submitStatus.value = 'error'
    } finally {
        isSending.value = false
    }
}

</script>

<style scoped>
.noir-home {
    background-color: var(--bg);
}

/* ===== HERO ===== */
.hero-section {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6rem var(--section-padding);
    position: relative;
}

.hero-content {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
}

.hero-label {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.label-line {
    display: block;
    width: 60px;
    height: 1px;
    background: var(--gradient-accent-h);
}

.label-text {
    font-family: var(--font-body);
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    color: var(--text-muted);
}

.hero-name {
    display: flex;
    flex-direction: column;
}

.name-line {
    font-size: clamp(5rem, 16vw, 14rem);
    letter-spacing: -0.04em;
    line-height: 0.88;
    font-weight: 700;
}

.hero-subtitle {
    font-family: var(--font-display);
    font-size: clamp(1rem, 1.8vw, 1.3rem);
    font-weight: 700;
    margin-top: 2rem;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.subtitle-dim {
    font-weight: 400;
    -webkit-text-fill-color: var(--text-muted);
}

.hero-role {
    font-size: clamp(1rem, 2vw, 1.4rem);
    color: var(--text-muted);
    max-width: 550px;
    margin-top: 2.5rem;
    line-height: 1.7;
}

.hero-cta {
    display: flex;
    gap: 1.5rem;
    margin-top: 3rem;
    flex-wrap: wrap;
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 3rem;
    right: var(--section-padding);
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: var(--font-body);
    font-size: 0.7rem;
    letter-spacing: 0.25em;
    color: var(--text-dim);
    transform: rotate(90deg);
    transform-origin: right center;
}

.scroll-line {
    width: 60px;
    height: 1px;
    background: var(--gradient-accent-h);
    animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
    0%, 100% { opacity: 0.3; width: 30px; }
    50% { opacity: 1; width: 60px; }
}

/* ===== SECTION STYLING ===== */
.split-label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.section-number {
    font-family: var(--font-body);
    font-size: 0.8rem;
    color: var(--text-dim);
    letter-spacing: 0.15em;
}

.section-label {
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    font-weight: 600;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.big-text {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 600;
    line-height: 1.3;
}

.mt-lg { margin-top: 3rem; }

/* ===== ABOUT PREVIEW ===== */
.about-preview-section {
    background-color: var(--bg-elevated);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

/* ===== MARQUEE ===== */
.marquee-section {
    padding: 1.5rem 0;
    overflow: hidden;
    border-bottom: 1px solid var(--border);
    background: var(--bg);
}

.marquee-track {
    overflow: hidden;
    white-space: nowrap;
}

.marquee-content {
    display: inline-block;
    animation: marquee 25s linear infinite;
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: var(--text-dim);
}

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
}

/* ===== EXPERIENCE PREVIEW ===== */
.exp-list {
    border-top: 1px solid var(--border);
}

.exp-item {
    padding: 2rem 0;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    transition: padding 0.4s var(--ease-out-expo), border-color 0.4s var(--ease-out-expo);
}

.exp-item:hover {
    padding-left: 1rem;
    border-bottom-color: var(--accent-start);
}

.exp-year {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--text-dim);
    letter-spacing: 0.1em;
}

.exp-title {
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0;
}

/* ===== SERVICES PREVIEW ===== */
.services-preview-section {
    background: var(--bg);
}

.services-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 1px solid var(--border);
    padding-top: 2rem;
}

.service-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 1.5rem;
    transition: border-color 0.4s var(--ease-out-expo), transform 0.4s var(--ease-out-expo);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.service-card:hover {
    border-color: var(--accent-start);
    transform: translateY(-4px);
}

.service-header {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.service-icon {
    font-size: 1.5rem;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.service-title {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;
}

.service-desc {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.5;
}

/* ===== PROJECTS PREVIEW ===== */
.projects-preview-section {
    background: var(--bg-elevated);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.projects-grid-header {
    margin-bottom: 3rem;
}

.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    max-width: 1400px;
    margin: 0 auto;
}

.project-card {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    align-items: center;
}

.project-card:nth-child(even) .project-img-wrap {
    order: 2;
}

.project-card:nth-child(even) .project-info {
    order: 1;
}

.project-img-wrap {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--bg-card);
    transition: border-color 0.4s ease;
}

.project-card:hover .project-img-wrap {
    border-color: var(--accent-start);
}

.project-img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    filter: grayscale(80%) brightness(0.7);
    transition: all 0.6s var(--ease-out-expo);
    transform: scale(1.05);
}

.project-card:hover .project-img {
    filter: grayscale(0%) brightness(1);
    transform: scale(1);
}

.img-overlay {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2;
}

.overlay-number {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.project-title {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;
    line-height: 1.1;
}

.project-year {
    font-family: var(--font-body);
    font-size: 0.85rem;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
}

.project-desc {
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.tech-chip {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.4rem 0.8rem;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: all 0.3s ease;
}

.project-card:hover .tech-chip {
    border-color: var(--accent-start);
    color: var(--text);
}

.project-links {
    display: flex;
    gap: 2rem;
}

.project-link {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
    border-bottom: 1px solid transparent;
    padding-bottom: 2px;
}

.project-link:hover {
    color: var(--accent-start);
    border-bottom-color: var(--accent-start);
}

/* ===== CONTACT CTA ===== */
.contact-cta-section {
    background: var(--bg);
    border-top: 1px solid var(--border);
    padding-bottom: 6rem;
}

.contact-links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1rem;
}

.contact-link-item {
    font-family: var(--font-display);
    font-size: clamp(1rem, 2vw, 1.3rem);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.3s ease;
    text-transform: none;
    letter-spacing: 0;
}

.contact-link-item:hover {
    color: var(--accent-start);
    transform: translateX(5px);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.form-field {
    position: relative;
}

.field-label {
    display: block;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
}

.field-input,
.field-textarea {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--border);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 1.2rem;
    padding: 0.8rem 0;
    transition: border-color 0.4s var(--ease-out-expo);
    outline: none;
}

.field-textarea {
    resize: vertical;
    min-height: 120px;
}

.field-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-accent-h);
    transition: width 0.5s var(--ease-out-expo);
}

.field-input:focus ~ .field-underline,
.field-textarea:focus ~ .field-underline {
    width: 100%;
}

.submit-btn {
    align-self: flex-start;
    margin-top: 1rem;
}

.submit-btn:disabled {
    opacity: 0.4;
    pointer-events: none;
}

.status-msg {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 0.95rem;
}

.status-msg.success { color: #22c55e; }
.status-msg.error { color: #ef4444; }

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* ===== RESPONSIVE ===== */

/* Tablet */
@media (max-width: 1024px) {
    .hero-section {
        padding: 5rem var(--section-padding);
    }

    .hero-role {
        max-width: 100%;
    }

    .project-card,
    .project-card:nth-child(even) {
        grid-template-columns: 1fr;
        direction: ltr;
    }

    .projects-grid {
        gap: 4rem;
    }

    .project-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .hero-section {
        min-height: auto;
        padding: 4rem var(--section-padding) 3rem;
        justify-content: flex-start;
    }

    .hero-label {
        margin-bottom: 1.5rem;
    }

    .label-line {
        width: 30px;
    }

    .label-text {
        font-size: 0.7rem;
    }

    .hero-role {
        margin-top: 1.5rem;
        font-size: 1rem;
    }

    .hero-cta {
        flex-direction: column;
        margin-top: 2rem;
        gap: 1rem;
    }

    .scroll-indicator {
        display: none;
    }

    .section-number {
        font-size: 0.7rem;
    }

    .big-text {
        font-size: clamp(1.2rem, 4.5vw, 1.8rem);
    }

    .marquee-content {
        font-size: 0.9rem;
    }

    .exp-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 1.5rem 0;
    }

    .exp-title {
        font-size: 1.1rem;
    }

    .exp-year {
        font-size: 0.75rem;
    }

    .projects-grid {
        gap: 3rem;
    }

    .project-card {
        gap: 1.5rem;
    }

    .project-title {
        font-size: 1.3rem;
    }

    .project-desc {
        font-size: 0.9rem;
    }

    .project-img {
        filter: grayscale(0%) brightness(1);
    }

    .overlay-number {
        font-size: 2rem;
    }

    .tech-chip {
        font-size: 0.65rem;
        padding: 0.3rem 0.6rem;
    }

    .project-links {
        gap: 1.5rem;
    }

    .project-link {
        font-size: 0.8rem;
    }

    .contact-links {
        margin-bottom: 2rem;
        gap: 1rem;
    }

    .contact-link-item {
        font-size: 1rem;
    }

    .field-input,
    .field-textarea {
        font-size: 1rem;
        padding: 0.6rem 0;
    }

    .field-label {
        font-size: 0.75rem;
    }

    .contact-form {
        gap: 2rem;
    }

    .submit-btn {
        width: 100%;
        justify-content: center;
    }
}

/* Small Mobile */
@media (max-width: 480px) {
    .hero-section {
        min-height: auto;
        padding: 3rem var(--section-padding) 2.5rem;
    }

    .hero-cta {
        gap: 0.8rem;
    }
}
</style>
