<template>
    <div class="noir-page">
        <NuxtLink :to="localePath('/')" class="back-link">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') }}
        </NuxtLink>

        <!-- Hero -->
        <section class="page-hero">
            <h1 class="hero-title">
                <span class="outline-text" data-aos="fade-down">{{ $t('hero_services_1') }}</span>
                <span class="text-accent" data-aos="fade-up">{{ $t('hero_services_2') }}</span>
            </h1>
        </section>

        <!-- Intro -->
        <section class="section intro-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">01</span>
                    <h2 class="section-label">INTRO</h2>
                </div>
                <div class="split-content" data-aos="fade-up">
                    <p class="big-text">{{ $t('srv_intro') }}</p>
                    <NuxtLink :to="localePath('/contact')" class="btn-gradient mt-lg">
                        {{ $t('srv_contact_cta') }} <i class="fa-solid fa-arrow-right"></i>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Service types -->
        <section class="section services-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">02</span>
                    <h2 class="section-label">{{ $t('services') }}</h2>
                </div>
                <div class="split-content">
                    <div class="services-grid">
                        <div v-for="(srv, i) in serviceTypes" :key="srv.titleKey"
                            class="service-card"
                            data-aos="fade-up"
                            :data-aos-delay="i * 60">
                            <div class="service-icon"><i :class="srv.icon"></i></div>
                            <h3 class="service-title">{{ $t(srv.titleKey) }}</h3>
                            <p class="service-desc">{{ $t(srv.descKey) }}</p>
                            <div class="service-tags">
                                <span v-for="tag in srv.tags" :key="tag" class="service-tag">{{ tag }}</span>
                                <span v-for="tagKey in srv.tagKeys" :key="tagKey" class="service-tag">{{ $t(tagKey) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process -->
        <section class="section process-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">03</span>
                    <h2 class="section-label">{{ $t('srv_process_title') }}</h2>
                </div>
                <div class="split-content">
                    <div class="process-steps">
                        <div v-for="(step, i) in processSteps" :key="step.titleKey"
                            class="process-step"
                            data-aos="fade-up"
                            :data-aos-delay="i * 80">
                            <div class="step-number">{{ String(i + 1).padStart(2, '0') }}</div>
                            <div class="step-body">
                                <h4 class="step-title">{{ $t(step.titleKey) }}</h4>
                                <p class="step-desc">{{ $t(step.descKey) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="section cta-section">
            <div class="cta-inner" data-aos="zoom-in">
                <h2 class="cta-title outline-text">{{ $t('srv_contact_cta') }}</h2>
                <p class="cta-desc">{{ $t('srv_contact_desc') }}</p>
                <NuxtLink :to="localePath('/contact')" class="btn-gradient">
                    {{ $t('send_me_a_message') }} <i class="fa-solid fa-arrow-right"></i>
                </NuxtLink>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">
import { definePageMeta, useLocalePath } from '#imports'

definePageMeta({ layout: 'default' })
const localePath = useLocalePath()

const serviceTypes = [
    {
        icon: 'fa-solid fa-rocket',
        titleKey: 'srv_type_landing_title',
        descKey: 'srv_type_landing_desc',
        tags: ['HTML / CSS', 'JavaScript', 'SEO'],
        tagKeys: ['srv_tag_fast']
    },
    {
        icon: 'fa-solid fa-address-card',
        titleKey: 'srv_type_portfolio_title',
        descKey: 'srv_type_portfolio_desc',
        tags: [],
        tagKeys: ['srv_tag_responsive', 'srv_tag_contact', 'srv_tag_animation']
    },
    {
        icon: 'fa-solid fa-building',
        titleKey: 'srv_type_corporate_title',
        descKey: 'srv_type_corporate_desc',
        tags: ['CMS', 'Blog'],
        tagKeys: ['srv_tag_gallery', 'srv_tag_contact']
    },
    {
        icon: 'fa-brands fa-wordpress',
        titleKey: 'srv_type_wp_title',
        descKey: 'srv_type_wp_desc',
        tags: ['WordPress'],
        tagKeys: ['srv_tag_custom_theme', 'srv_tag_plugin', 'srv_tag_editable']
    },
    {
        icon: 'fa-solid fa-wand-magic-sparkles',
        titleKey: 'srv_type_custom_title',
        descKey: 'srv_type_custom_desc',
        tags: [],
        tagKeys: ['srv_tag_custom_need', 'srv_tag_consultation', 'srv_tag_flexible']
    },
]

const processSteps = [
    { titleKey: 'srv_process_1_title', descKey: 'srv_process_1_desc' },
    { titleKey: 'srv_process_2_title', descKey: 'srv_process_2_desc' },
    { titleKey: 'srv_process_3_title', descKey: 'srv_process_3_desc' },
    { titleKey: 'srv_process_4_title', descKey: 'srv_process_4_desc' },
]
</script>

<style scoped>
.noir-page {
    background-color: var(--bg);
    min-height: 100vh;
    min-height: 100svh;
    padding-bottom: 6rem;
}

.back-link {
    position: fixed; top: 2rem; left: 2rem; z-index: 100;
    font-family: var(--font-display); font-weight: 600; font-size: 0.85rem;
    letter-spacing: 0.1em; color: var(--text); mix-blend-mode: difference;
    transition: color 0.3s ease; display: flex; align-items: center; gap: 0.5rem;
}
.back-link:hover { color: var(--accent-start); }

/* Hero */
.page-hero {
    min-height: 55vh;
    display: flex;
    align-items: flex-end;
    padding: 0 var(--section-padding) 4rem;
}
.hero-title {
    display: flex;
    flex-direction: column;
    font-size: clamp(4rem, 12vw, 10rem);
    letter-spacing: -0.04em;
    line-height: 0.88;
}

/* Sections */
.section {
    padding: 5rem var(--section-padding);
    border-top: 1px solid var(--border);
}

.split-label { display: flex; flex-direction: column; gap: 0.5rem; }
.section-number { font-family: var(--font-body); font-size: 0.8rem; color: var(--text-dim); letter-spacing: 0.15em; }
.section-label { font-size: 1.1rem; letter-spacing: 0.1em; font-weight: 600; background: var(--gradient-accent); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

/* Intro */
.intro-section { background: var(--bg); }
.big-text { font-family: var(--font-display); font-size: clamp(1.3rem, 2.5vw, 2rem); font-weight: 600; line-height: 1.4; margin-bottom: 1rem; }
.mt-lg { margin-top: 2rem; }

/* Services grid */
.services-section { background: var(--bg-elevated); }

.services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    border-top: 1px solid var(--border);
    padding-top: 1.5rem;
}

.service-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 2rem;
    transition: all 0.4s var(--ease-out-expo);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.service-card:hover {
    border-color: var(--accent-start);
    transform: translateY(-6px);
    box-shadow: 0 12px 40px var(--accent-glow);
}

.service-icon {
    font-size: 1.8rem;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.service-title {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;
    line-height: 1.2;
}

.service-desc {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
    flex: 1;
}

.service-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.5rem;
}

.service-tag {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.25rem 0.65rem;
    border: 1px solid var(--border);
    color: var(--text-dim);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: all 0.3s ease;
}

.service-card:hover .service-tag {
    border-color: var(--accent-start);
    color: var(--text);
}

/* Process */
.process-section { background: var(--bg); }

.process-steps {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--border);
    padding-top: 1.5rem;
}

.process-step {
    display: flex;
    gap: 2rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--border);
    align-items: flex-start;
    transition: all 0.3s var(--ease-out-expo);
}

.process-step:hover {
    padding-left: 0.5rem;
}

.step-number {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    min-width: 3.5rem;
}

.step-title {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;
    margin-bottom: 0.4rem;
}

.step-desc {
    font-size: 0.95rem;
    color: var(--text-muted);
    line-height: 1.6;
}

/* CTA */
.cta-section {
    background: var(--bg-elevated);
    text-align: center;
}

.cta-inner {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.cta-title {
    font-size: clamp(2.5rem, 6vw, 5rem);
    letter-spacing: -0.04em;
    line-height: 1;
    -webkit-text-stroke: 1.5px var(--text-muted);
}

.cta-desc {
    font-size: 1.1rem;
    color: var(--text-muted);
    line-height: 1.6;
}

/* Responsive */
@media (max-width: 1024px) {
    .page-hero { min-height: 40vh; padding-top: 6rem; }
    .services-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
    .back-link { top: 1.2rem; left: 1.2rem; font-size: 0.75rem; }
    .page-hero { min-height: 35vh; padding: 6rem var(--section-padding) 2rem; }
    .hero-title { font-size: clamp(3rem, 12vw, 5rem); }
    .section { padding: 3rem var(--section-padding); }

    .big-text { font-size: 1.15rem; }

    .services-grid { grid-template-columns: 1fr; gap: 1rem; }
    .service-card { padding: 1.5rem; }
    .service-card:hover { transform: translateY(-3px); }

    .process-step { gap: 1.2rem; }
    .step-number { font-size: 1.8rem; min-width: 2.5rem; }

    .cta-title { font-size: clamp(2rem, 8vw, 3rem); }
}

@media (max-width: 480px) {
    .service-card { padding: 1.2rem; }
    .service-title { font-size: 1.1rem; }
    .process-step { flex-direction: column; gap: 0.5rem; }
    .step-number { font-size: 1.5rem; }
}
</style>
