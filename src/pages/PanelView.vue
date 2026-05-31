<script setup>
import { ref, onMounted } from 'vue'
import PageHero from '@/components/PageHero.vue'
import { loginWithDiscord, readCallback } from '@/lib/discord'
import { discord } from '@/site.config'

const state = ref('intro') // 'intro' | 'returned' | 'error'

const planned = [
  'Deine Charaktere einsehen  Steckbrief, Skills, Fortschritt',
  'Kontostand und letzte Transaktionen',
  'Fahrzeuge und Eigentum verwalten',
  'Bewerbungen und Anträge direkt einreichen',
  'Support-Tickets und Statusmeldungen',
]

function start() {
  loginWithDiscord()
}

onMounted(() => {
  // Wenn Discord uns mit ?code zurückschickt, landen wir hier.
  if (window.location.search.includes('code=')) {
    const res = readCallback()
    state.value = res.ok ? 'returned' : 'error'
    // URL aufräumen, damit der Code nicht im Verlauf bleibt.
    window.history.replaceState({}, '', discord.redirectPath)
  }
})
</script>

<template>
  <div class="pb-24">
    <PageHero
      eyebrow="Dein Bereich"
      title="Spieler-Panel"
      subtitle="Melde dich mit Discord an und verwalte bald alles rund um deine Charaktere  direkt im Browser."
    />

    <section class="mx-auto max-w-2xl px-5 sm:px-8">
      <!-- Rückkehr von Discord -->
      <div v-if="state === 'returned'" v-reveal class="glass rounded-2xl p-10 text-center">
        <h2 class="font-display text-2xl text-gold-100">Login erkannt ✓</h2>
        <p class="mx-auto mt-3 max-w-md text-zinc-400">
          Wir haben deine Discord-Anmeldung erhalten. Das Panel selbst ist noch in Arbeit 
          sobald das Backend steht, siehst du hier deine Charaktere und kannst loslegen.
        </p>
      </div>

      <div v-else-if="state === 'error'" v-reveal class="glass rounded-2xl p-10 text-center">
        <h2 class="font-display text-2xl text-gold-100">Anmeldung fehlgeschlagen</h2>
        <p class="mx-auto mt-3 max-w-md text-zinc-400">
          Beim Login ist etwas schiefgelaufen. Bitte versuch es noch einmal.
        </p>
        <button class="btn-ghost mt-6" @click="state = 'intro'">Erneut versuchen</button>
      </div>

      <!-- Standard -->
      <div v-else v-reveal class="glass rounded-3xl p-10">
        <span class="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/5 px-3 py-1 text-xs uppercase tracking-widest text-gold-200">
          In Entwicklung
        </span>

        <h2 class="mt-6 font-display text-3xl text-gold-100">Bald verfügbar</h2>
        <p class="mt-3 text-zinc-400">
          Wir bauen ein Panel, in dem du dich mit Discord anmeldest und dein In-Game-Leben
          verwaltest. Hier ein Blick auf das, was kommt:
        </p>

        <ul class="mt-6 space-y-3">
          <li v-for="p in planned" :key="p" class="flex gap-3 text-sm text-zinc-300">
            <svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>{{ p }}</span>
          </li>
        </ul>

        <button class="btn-gold mt-8 w-full sm:w-auto" @click="start">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.2.5c1.7.4 2.5.9 3.4 1.5a13.3 13.3 0 0 0-10.5 0c.9-.6 1.9-1.1 3.4-1.5L11.3 3a19.8 19.8 0 0 0-4.9 1.4C3.2 9 2.4 13.5 2.7 18a19.9 19.9 0 0 0 6 3l.5-.7c-.9-.3-1.9-.8-2.8-1.4l.7-.5a14.2 14.2 0 0 0 12 0l.7.5c-.9.6-1.9 1-2.8 1.4l.5.7a19.9 19.9 0 0 0 6-3c.4-5.2-.7-9.6-3.9-13.6ZM9.1 15.3c-1 0-1.7-.9-1.7-2s.8-2 1.7-2c1 0 1.7.9 1.7 2s-.8 2-1.7 2Zm5.8 0c-1 0-1.7-.9-1.7-2s.8-2 1.7-2c1 0 1.7.9 1.7 2s-.7 2-1.7 2Z"/>
          </svg>
          Mit Discord einloggen
        </button>
      </div>
    </section>
  </div>
</template>
