<script setup>
import PageHero from '@/components/PageHero.vue'
import { site } from '@/site.config'
import { companies } from '@/data/companies'

const statusStyle = {
  aktiv: 'border-emerald-400/40 text-emerald-300 bg-emerald-400/5',
  rekrutiert: 'border-gold-400/40 text-gold-200 bg-gold-400/5',
  geschlossen: 'border-zinc-500/40 text-zinc-400 bg-white/5',
}

const statusLabel = {
  aktiv: 'Aktiv',
  rekrutiert: 'Rekrutiert',
  geschlossen: 'Geschlossen',
}
</script>

<template>
  <div class="pb-24">
    <PageHero
      eyebrow="Wer die Stadt am Laufen hält"
      title="Unternehmensregister"
      subtitle="Behörden, Betriebe und Organisationen von GoldenState. Klick auf einen Eintrag für alle Details."
    />

    <section class="mx-auto max-w-5xl px-5 sm:px-8">
      <div class="flex flex-wrap justify-center gap-7">
        <RouterLink
          v-for="(c, i) in companies"
          :key="c.slug"
          :to="'/unternehmen/' + c.slug"
          v-reveal="i * 70"
          class="glass flex w-full flex-col items-center text-center rounded-2xl p-6 hover:shadow-2xl hover:border-gold-300/40 transition-all duration-300 group sm:w-72"
        >
          <span
            class="mb-3 rounded-full border px-3 py-1 text-[11px]"
            :class="statusStyle[c.status]"
          >
            {{ statusLabel[c.status] }}
          </span>
          <span class="mb-2 text-[11px] uppercase tracking-widest text-zinc-500">{{ c.type }}</span>
          <h3 class="font-display text-lg text-gold-100 mb-1 group-hover:text-gold-300 transition-colors">
            {{ c.short }}
          </h3>
          <div class="text-zinc-400 text-sm mb-3">{{ c.name }}</div>
          <p class="text-zinc-300 text-xs line-clamp-3 leading-relaxed">{{ c.tagline }}</p>
          <span class="mt-4 text-[11px] text-gold-400/60 group-hover:text-gold-300 transition-colors">
            Details ansehen →
          </span>
        </RouterLink>
      </div>

      <div v-reveal class="glass mt-10 rounded-2xl p-8 text-center">
        <p class="text-zinc-300">Dein Unternehmen soll ins Register?</p>
        <p class="mx-auto mt-2 max-w-md text-sm text-zinc-500">
          Reiche einfach deine Daten und einen kurzen Text ein  wir nehmen dich auf.
        </p>
        <a :href="site.links.discord" target="_blank" rel="noopener" class="btn-gold mt-5">
          Eintrag anfragen
        </a>
      </div>
    </section>
  </div>
</template>
