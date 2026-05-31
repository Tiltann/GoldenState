<script setup>
import PageHero from '@/components/PageHero.vue'
import { site } from '@/site.config'
import { characters } from '@/data/characters'

function initials(name) {
  return name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
}
</script>

<template>
  <div class="pb-24">
    <PageHero
      eyebrow="Die Gesichter der Stadt"
      title="Charaktere"
      subtitle="Geschichten, die unsere Spieler in Los Santos schreiben. Lern die Menschen kennen, die GoldenState lebendig machen."
    />

    <section class="mx-auto max-w-5xl px-5 sm:px-8">

      <!-- Empty state -->
      <div v-if="!characters.length" v-reveal class="glass rounded-2xl p-10 text-center">
        <div class="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-white/10 text-zinc-500">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0"/>
          </svg>
        </div>
        <p class="font-display text-lg text-gold-100">Noch keine Charaktere</p>
        <p class="mt-2 text-sm text-zinc-500">Wir haben noch nicht offiziell gestartet  die ersten Gesichter der Stadt folgen bald.</p>
      </div>

      <div v-else class="flex flex-wrap justify-center gap-7">
        <RouterLink
          v-for="(c, i) in characters"
          :key="c.name"
          :to="'/charaktere/' + c.name.replace(/\s+/g, '-').toLowerCase()"
          v-reveal="i * 70"
          class="glass flex w-full flex-col items-center text-center rounded-2xl p-6 hover:shadow-2xl hover:border-gold-300/40 transition-all duration-300 group sm:w-72"
        >
          <img
            v-if="c.image"
            :src="c.image"
            :alt="c.name"
            class="h-24 w-24 rounded-xl object-cover mb-4 ring-2 ring-gold-400/20"
          />
          <div
            v-else
            class="grid h-24 w-24 place-items-center rounded-xl border border-gold-400/30 bg-gold-400/10 font-display text-xl text-gold-100 mb-4"
          >
            {{ initials(c.name) }}
          </div>

          <h3 class="font-display text-lg text-gold-100 mb-1 group-hover:text-gold-300 transition-colors">
            {{ c.name }}
          </h3>
          <div class="text-xs uppercase tracking-widest text-gold-300/70 mb-2">{{ c.role }}</div>
          <div v-if="c.faction" class="text-zinc-500 text-xs mb-3">{{ c.faction }}</div>
          <p class="text-zinc-300 text-xs line-clamp-3 leading-relaxed">{{ c.lore }}</p>

          <span class="mt-4 text-[11px] text-gold-400/60 group-hover:text-gold-300 transition-colors">
            Mehr erfahren →
          </span>
        </RouterLink>
      </div><!-- end v-else cards -->

      <div v-reveal class="glass mt-10 rounded-2xl p-8 text-center">
        <p class="text-zinc-300">Du willst deinen Charakter hier vorstellen?</p>
        <a :href="site.links.discord" target="_blank" rel="noopener" class="btn-gold mt-5">
          Im Discord melden
        </a>
      </div>
    </section>
  </div>
</template>
