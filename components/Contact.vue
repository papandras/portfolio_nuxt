<script setup>
import { useStore } from "@/stores/lang.js"

const store = useStore()
store.getLang()

</script>

<template>
    <div>
        <form id="contactform" @submit.prevent="sendEmail">
            <label for="contactname">{{ store.texts.contact.name }}</label>
            <input type="text" name="name" id="contactname" v-model="name" required>
            <label for="email">{{ store.texts.contact.email }}</label>
            <input type="email" name="email" id="email" v-model="email" required>
            <label for="subject">{{ store.texts.contact.subject }}</label>
            <textarea name="subject" id="subject" cols="30" rows="10" form="contactform" required></textarea>
            <input type="submit" :value="store.texts.contact.send">
        </form>
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
}

input[type=submit] {
    cursor: pointer;
    border: 1px solid var(--navColor) !important;
    /* margin-bottom: 80px; */
}

input[type=submit]:hover {
    color: var(--backgroundColor);
    background-color: var(--navColor);
    border: 1px solid var(--backgroundColor) !important;
    transition: 400ms ease-in-out;
}

input,
textarea,
button {
    min-width: 300px;
    color: var(--navColor);
    background-color: var(--backgroundColor);
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    text-align: center;
}

input:focus,
textarea:focus {
    outline: none;
    border: 1px solid var(--backgroundColor);
}

input[type=button] {
    border: 2px solid black;
}
</style>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'ContactUs',
    data() {
        return {
            name: '',
            email: '',
            //message: ''
        }
    },
    methods: {
        sendEmail() {
            const form = document.getElementById('contactform')
            const formData = new FormData(form)
            try {
                emailjs.send('service_i51noeu', 'template_5kb0nxf', {
                    from_name: formData.get('name'),
                    to_name: "András",
                    reply_to: formData.get('email'),
                    message: formData.get('subject')
                }, 'FRoQzZDdOrg0OYAxI')

                alert("Üzenet sikeresen elküldve!")
            } catch (error) {
                console.log({ error })
            }
            // Reset form field
            document.getElementById("contactname").value = ""
            document.getElementById("email").value = ""
            document.getElementById("subject").value = ""
        },
    }
}
</script>
