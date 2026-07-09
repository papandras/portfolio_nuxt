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
                                <span class="exp-year">2022 — {{ $t('en') === 'English' ? 'JELEN' : 'PRESENT' }}</span>
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

        <!-- ===== PROJECTS CTA ===== -->
        <section class="section projects-cta-section">
            <div class="projects-cta-content" data-aos="zoom-in" data-aos-duration="800">
                <h2 class="massive-text outline-text">{{ $t('projects') }}</h2>
                <h2 class="massive-text text-accent">WORKS</h2>
                <NuxtLink :to="localePath('/projects')" class="btn-gradient mt-lg">
                    {{ $t('projects') }} <i class="fa-solid fa-arrow-right"></i>
                </NuxtLink>
            </div>
        </section>

        <!-- ===== CONTACT CTA ===== -->
        <section class="section contact-cta-section">
            <div class="contact-cta-inner" data-aos="fade-up">
                <h2 class="huge-text">LET'S</h2>
                <h2 class="huge-text text-accent">TALK.</h2>
                <div class="contact-cta-footer">
                    <NuxtLink :to="localePath('/contact')" class="btn-outline">
                        {{ $t('send_me_a_message') }} <i class="fa-solid fa-arrow-right"></i>
                    </NuxtLink>
                    <div class="footer-socials">
                        <a href="https://github.com/papandras" target="_blank" rel="noopener">GITHUB</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener">LINKEDIN</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta, useLocalePath } from '#imports'

definePageMeta({ layout: 'default' })
const localePath = useLocalePath()
</script>

<style scoped>
.noir-home {
    background-color: var(--bg);
}

/* ===== HERO ===== */
.hero-section {
    min-height: 100vh;
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
    transition: all 0.4s var(--ease-out-expo);
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

/* ===== PROJECTS CTA ===== */
.projects-cta-section {
    background: var(--bg-elevated);
    text-align: center;
    align-items: center;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.projects-cta-content {
    text-align: center;
}

.massive-text {
    font-size: clamp(4rem, 14vw, 12rem);
    letter-spacing: -0.05em;
    line-height: 0.85;
}

/* ===== CONTACT CTA ===== */
.contact-cta-section {
    background: var(--bg);
    padding-bottom: 5rem;
}

.contact-cta-inner {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
}

.huge-text {
    font-size: clamp(3rem, 10vw, 9rem);
    letter-spacing: -0.04em;
    line-height: 0.9;
}

.contact-cta-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
    gap: 2rem;
}

.footer-socials {
    display: flex;
    gap: 2rem;
}

.footer-socials a {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    color: var(--text-dim);
    transition: color 0.3s ease;
}

.footer-socials a:hover {
    color: var(--accent-start);
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

    .massive-text {
        font-size: clamp(3rem, 12vw, 8rem);
    }

    .huge-text {
        font-size: clamp(2.5rem, 8vw, 6rem);
    }
}

/* Mobile */
@media (max-width: 768px) {
    .hero-section {
        min-height: 85vh;
        padding: 4rem var(--section-padding);
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

    .massive-text {
        font-size: clamp(2.5rem, 12vw, 5rem);
    }

    .huge-text {
        font-size: clamp(2.5rem, 10vw, 4rem);
    }

    .contact-cta-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
        margin-top: 2.5rem;
    }

    .footer-socials {
        gap: 1.5rem;
    }
}

/* Small Mobile */
@media (max-width: 480px) {
    .hero-section {
        min-height: 80vh;
        padding: 3rem var(--section-padding);
    }

    .hero-cta {
        gap: 0.8rem;
    }
}
</style>
