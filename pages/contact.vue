<template>
    <div class="noir-page">
        <NuxtLink :to="localePath('/')" class="back-link">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') }}
        </NuxtLink>

        <!-- Hero -->
        <section class="page-hero">
            <h1 class="hero-title">
                <span class="outline-text" data-aos="fade-down">{{ $t('send_me_a_message') }}</span>
                <span class="text-accent" data-aos="fade-up">{{ $t('contact') }}.</span>
            </h1>
        </section>

        <!-- Contact Content -->
        <section class="section contact-section">
            <div class="grid-split">
                <div class="split-label" data-aos="fade-right">
                    <span class="section-number">01</span>
                    <h2 class="section-label">{{ $t('contact') }}</h2>

                    <div class="contact-links">
                        <a href="mailto:hello@papandras.hu" class="contact-link-item">
                            <i class="fa-solid fa-at"></i> hello@papandras.hu
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener" class="contact-link-item">
                            <i class="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="https://github.com/papandras" target="_blank" rel="noopener" class="contact-link-item">
                            <i class="fa-brands fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
                <div class="split-content" data-aos="fade-up">
                    <form id="contactform" @submit.prevent="sendEmail" class="contact-form">
                        <div class="form-field">
                            <label for="contactname" class="field-label">{{ $t('name') }}</label>
                            <input type="text" id="contactname" name="name" v-model="formName" class="field-input" required autocomplete="name">
                            <div class="field-underline"></div>
                        </div>

                        <div class="form-field">
                            <label for="email" class="field-label">{{ $t('email') }}</label>
                            <input type="email" id="email" name="email" v-model="formEmail" class="field-input" required autocomplete="email">
                            <div class="field-underline"></div>
                        </div>

                        <div class="form-field">
                            <label for="subject" class="field-label">{{ $t('subject') }}</label>
                            <textarea id="subject" name="subject" v-model="formSubject" class="field-textarea" rows="5" required></textarea>
                            <div class="field-underline"></div>
                        </div>

                        <button type="submit" class="btn-gradient submit-btn" :disabled="isSending">
                            {{ isSending ? 'SENDING...' : ($t('send') || 'SEND') }}
                            <i v-if="!isSending" class="fa-solid fa-paper-plane"></i>
                        </button>

                        <Transition name="fade">
                            <p v-if="submitStatus === 'success'" class="status-msg success">
                                <i class="fa-solid fa-check-circle"></i> Message sent successfully!
                            </p>
                            <p v-else-if="submitStatus === 'error'" class="status-msg error">
                                <i class="fa-solid fa-exclamation-circle"></i> Error sending message. Please try again.
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
.noir-page {
    background-color: var(--bg);
    min-height: 100vh;
    padding-bottom: 8rem;
}

.back-link {
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 100;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    color: var(--text);
    mix-blend-mode: difference;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.back-link:hover { color: var(--accent-start); }

.page-hero {
    min-height: 45vh;
    display: flex;
    align-items: flex-end;
    padding: 0 var(--section-padding) 4rem;
}

.hero-title {
    display: flex;
    flex-direction: column;
    font-size: clamp(3rem, 8vw, 7rem);
    letter-spacing: -0.04em;
    line-height: 0.88;
}

.section {
    padding: 5rem var(--section-padding);
    border-top: 1px solid var(--border);
}

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
    font-size: 1.1rem;
    letter-spacing: 0.1em;
    font-weight: 600;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2rem;
}

/* Contact Links */
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

/* Form */
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

/* Status */
.status-msg {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 0.95rem;
}

.status-msg.success {
    color: #22c55e;
}

.status-msg.error {
    color: #ef4444;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Responsive */

@media (max-width: 1024px) {
    .page-hero {
        min-height: 35vh;
        padding-top: 6rem;
    }
}

@media (max-width: 768px) {
    .back-link {
        top: 1.2rem;
        left: 1.2rem;
        font-size: 0.75rem;
    }

    .page-hero {
        min-height: 30vh;
        padding: 5rem var(--section-padding) 2rem;
    }

    .hero-title {
        font-size: clamp(2rem, 8vw, 4rem);
    }

    .section {
        padding: 3rem var(--section-padding);
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

@media (max-width: 480px) {
    .hero-title {
        font-size: clamp(1.8rem, 7vw, 3rem);
    }

    .contact-link-item {
        font-size: 0.9rem;
    }
}
</style>
