<template>
  <div>
    <NuxtLayout>
      <SvgLogoLoader v-if="isLoading" />

      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // A setTimeout csak egy példa, a valóságban a tartalom betöltése után kell elrejteni a loadert.
  setTimeout(() => {
    isLoading.value = false
  }, 5000)
})
</script>