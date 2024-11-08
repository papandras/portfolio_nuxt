<script setup>
import { useStore } from "@/stores/lang.js"

const store = useStore()
store.getLang()
</script>

<template>
    <div id="aboutme">
        <img src="@/assets/img/profilpic.jpg" :alt="'Me'.split('').reverse().join('')">
        <!-- <img src="@/assets/img/profilpic2.jpg" :alt="'Me'.split('').reverse().join('')"> -->
        <p>{{ store.texts.introduction }}</p>
    </div>
</template>

<style scoped>
#aboutme {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

#aboutme p {
    width: 40%;
    text-align: center;
    margin: 0 30px;
}

#aboutme img {
    transform: rotateY(180deg);
    border-radius: 10px;
    box-shadow: 0 0 3px 3px var(--navColor);
    margin: 20px 0 30px 0;
    /* max-width: 90%; */
    /* height: auto; */
    /* max-height: 400px; */
    width: 15%;
    transition: transform 100ms ease-in-out;
}

#aboutme img:hover {
    transform: rotateY(180deg) rotate(-10deg);
    transition: transform 300ms linear;
}

#aboutme img:hover+p {
    transform: rotate(0deg);
}

@media only screen and (max-width: 1200px) {
    @media (orientation: landscape) {
        #aboutme img {
            max-height: 60vh;
            max-width: auto;
        }
    }
}

@media only screen and (max-width: 600px) {

    #aboutme p,
    #timeline,
    #skills {
        width: 100%;
    }

    #aboutme {
        flex-direction: column;
    }

    #aboutme p {
        margin: 0;
        padding: 10px;
        text-align: center;
    }

    #aboutme img {
        width: 50%;
    }
}
</style>