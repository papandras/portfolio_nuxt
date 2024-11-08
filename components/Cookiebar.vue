<script setup>
import { useStore } from "@/stores/lang.js"

const store = useStore()
store.getLang()
</script>

<template>
    <div>
        <vue-cookie-accept-decline :debug="false" :disableDecline="true" :showPostponeButton="false"
            @clicked-accept="cookieClickedAccept" @clicked-decline="cookieClickedDecline"
            @clicked-postpone="cookieClickedPostpone" @removed-cookie="cookieRemovedCookie" @status="cookieStatus"
            elementId="myPanel1" position="bottom" ref="myPanel1" transitionName="fade" type="bar">
            <!-- Optional -->
            <template #postponeContent>&times;</template>

            <!-- Optional -->
            <template #message>
                {{ store.texts.cookie.message }}
            </template>

            <!-- Optional -->
            <template #declineContent>{{ store.texts.cookie.decline }}</template>

            <!-- Optional -->
            <template #acceptContent>{{ store.texts.cookie.accept }}</template>
        </vue-cookie-accept-decline>
    </div>
</template>