<script setup>
import PageHero from '@/components/PageHero.vue'
import { site, mastodon } from '@/site.config'

// Sobald die Mastodon-Instanz steht und in site.config eingetragen ist,
// erscheint hier der Feed. Bis dahin der Platzhalter unten.
const ready = !!(mastodon.events.instance && mastodon.events.accountId)
</script>

<template>
  <div class="pb-24">
    <PageHero
      eyebrow="Was in der Stadt passiert"
      title="Events"
      subtitle="Aktionen, Rennen, Treffen und große Storylines  hier laufen die Ankündigungen zusammen."
    />

    <section class="mx-auto max-w-3xl px-5 sm:px-8">
      <!-- Live-Feed (sobald Mastodon eingerichtet ist) -->
      <div v-if="ready" v-reveal class="glass overflow-hidden rounded-2xl">
        <iframe
          :src="`${mastodon.events.instance}/@${mastodon.events.accountId}/embed`"
          class="h-[600px] w-full"
          frameborder="0"
          title="Event-Feed"
        ></iframe>
      </div>

      <!-- Platzhalter, solange noch nichts angebunden ist -->
      <div v-else v-reveal class="glass rounded-2xl p-12 text-center">
        <div class="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold-400/30 bg-gold-400/5">
          <svg class="h-7 w-7 text-gold-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M3 9h18M8 2v4M16 2v4" stroke-linecap="round" />
          </svg>
        </div>
        <h2 class="mt-6 font-display text-2xl text-gold-100">Event-Feed wird vorbereitet</h2>
        <p class="mx-auto mt-3 max-w-md text-zinc-400">
          Wir richten gerade unseren Mastodon-Kanal ein. Schon bald erscheinen die
          aktuellen Events automatisch an dieser Stelle.
        </p>
        <a :href="site.links.discord" target="_blank" rel="noopener" class="btn-ghost mt-7">
          Events vorerst im Discord
        </a>
      </div>
    </section>
  </div>
</template>
