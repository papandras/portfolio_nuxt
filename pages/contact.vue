<template>
    <div class="avant-garde-page">
        <NuxtLink :to="localePath('/')" class="back-btn">
            <i class="fa-solid fa-arrow-left"></i> {{ $t('home') || 'BACK TO HOME' }}
        </NuxtLink>

        <section class="section contact-hero">
            <h1 class="huge-text outline-text" data-aos="fade-down">SAY</h1>
            <h1 class="huge-text text-accent" data-aos="fade-up">HELLO.</h1>
        </section>

        <section class="section contact-content">
            <div class="grid-layout">
                <div class="col-left">
                    <h2 class="section-title">{{ $t('contact') || 'CONTACT' }}</h2>
                    
                    <div class="contact-links mt-normal">
                        <a href="mailto:hello@papandras.hu" class="brutal-contact-link">
                            hello@papandras.hu
                        </a>
                        <a href="https://linkedin.com" target="_blank" class="brutal-contact-link">
                            LinkedIn
                        </a>
                        <a href="https://github.com/papandras" target="_blank" class="brutal-contact-link">
                            GitHub
                        </a>
                    </div>
                </div>
                <div class="col-right">
                    <p class="big-paragraph mb-normal">
                        {{ $t('send_me_a_message') || "Let's build something exceptional together. I'm currently open for new opportunities. Drop a message below." }}
                    </p>
                    
                    <form id="contactform" @submit.prevent="sendEmail" class="brutal-form">
                        <div class="form-group">
                            <label for="contactname" class="brutal-label">{{ $t('name') || 'NAME' }}</label>
                            <input type="text" name="name" id="contactname" v-model="formName" class="brutal-input" required autocomplete="name">
                        </div>
                        
                        <div class="form-group">
                            <label for="email" class="brutal-label">{{ $t('email') || 'EMAIL' }}</label>
                            <input type="email" name="email" id="email" v-model="formEmail" class="brutal-input" required autocomplete="email">
                        </div>
                        
                        <div class="form-group">
                            <label for="subject" class="brutal-label">{{ $t('subject') || 'MESSAGE' }}</label>
                            <textarea name="subject" id="subject" v-model="formSubject" class="brutal-textarea" rows="5" required></textarea>
                        </div>
                        
                        <button type="submit" class="brutal-submit-btn" :disabled="isSending">
                            {{ isSending ? 'SENDING...' : ($t('send') || 'SEND MESSAGE') }}
                        </button>
                        
                        <p v-if="submitStatus === 'success'" class="status-msg success">Message sent successfully!</p>
                        <p v-if="submitStatus === 'error'" class="status-msg error">Error sending message. Please try again.</p>
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

// Form State
const formName = ref('')
const formEmail = ref('')
const formSubject = ref('')
const isSending = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const sendEmail = async () => {
    if (isSending.value) return;
    
    isSending.value = true;
    submitStatus.value = 'idle';
    
    try {
        await emailjs.send('service_i51noeu', 'template_5kb0nxf', {
            from_name: formName.value,
            to_name: "András",
            reply_to: formEmail.value,
            message: formSubject.value
        }, 'FRoQzZDdOrg0OYAxI')
        
        submitStatus.value = 'success';
        
        // Reset form fields
        formName.value = '';
        formEmail.value = '';
        formSubject.value = '';
        
        setTimeout(() => { submitStatus.value = 'idle' }, 5000);
    } catch (error) {
        console.error("Email send error:", error);
        submitStatus.value = 'error';
    } finally {
        isSending.value = false;
    }
}
</script>

<style scoped>
.avant-garde-page {
    background-color: var(--bg-color);
    min-height: 100vh;
    padding-bottom: 10rem;
}

.back-btn {
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 100;
    color: var(--text-color);
    font-family: var(--font-body);
    font-weight: 600;
    letter-spacing: 0.1em;
    mix-blend-mode: difference;
    transition: color 0.3s ease;
}

.back-btn:hover {
    color: var(--accent);
}

.section {
    padding: 2rem 5vw;
}

.contact-hero {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10rem;
}

.huge-text {
    font-size: clamp(3rem, 10vw, 8rem);
    letter-spacing: -0.04em;
    line-height: 0.9;
}

.outline-text {
    color: transparent;
    -webkit-text-stroke: 2px var(--text-color);
}

.grid-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    font-family: var(--font-body);
    font-weight: 500;
    color: var(--accent);
}

.big-paragraph {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    line-height: 1.3;
    font-family: var(--font-display);
    font-weight: 600;
    margin-bottom: 2rem;
}

.contact-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.brutal-contact-link {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-family: var(--font-display);
    color: var(--text-color);
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease;
    border-bottom: 2px solid transparent;
    width: fit-content;
}

.brutal-contact-link:hover {
    color: var(--accent);
    border-bottom-color: var(--accent);
    padding-left: 1rem;
}

/* Form Styles */
.brutal-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-top: 2px solid #333;
    padding-top: 2rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.brutal-label {
    font-family: var(--font-body);
    font-weight: bold;
    letter-spacing: 0.1em;
    color: var(--text-color);
}

.brutal-input, .brutal-textarea {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #333;
    color: var(--text-color);
    font-family: var(--font-body);
    font-size: 1.2rem;
    padding: 1rem 0;
    transition: border-color 0.3s ease;
}

.brutal-input:focus, .brutal-textarea:focus {
    outline: none;
    border-bottom-color: var(--accent);
}

.brutal-textarea {
    resize: vertical;
}

.brutal-submit-btn {
    background-color: var(--text-color);
    color: var(--bg-color);
    border: none;
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    padding: 1.5rem;
    text-transform: uppercase;
    transition: all 0.3s ease;
    margin-top: 1rem;
}

.brutal-submit-btn:hover:not(:disabled) {
    background-color: var(--accent);
    color: var(--bg-color);
    transform: translateY(-5px);
}

.brutal-submit-btn:disabled {
    opacity: 0.5;
    background-color: #333;
}

.status-msg {
    font-family: var(--font-body);
    font-weight: bold;
    margin-top: 1rem;
}

.status-msg.success {
    color: var(--accent);
}

.status-msg.error {
    color: #ff3333;
}

.mb-normal { margin-bottom: 3rem; }
.mt-normal { margin-top: 3rem; }

@media (max-width: 768px) {
    .grid-layout { grid-template-columns: 1fr; gap: 4rem; }
}
</style>
