<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center px-5 text-center">
    <p class="font-display text-7xl gold-text sm:text-8xl">404</p>
    <h1 class="mt-4 font-display text-2xl text-gold-100">Diese Straße gibt es nicht</h1>
    <p class="mt-3 max-w-sm text-zinc-400">
      Du hast dich in Los Santos verfahren. Lass uns zurück in die Innenstadt bringen.
    </p>
    <RouterLink to="/" class="btn-gold mt-8">Zur Startseite</RouterLink>
  </div>
</template>
