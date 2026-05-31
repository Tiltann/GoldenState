<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/logo-no-text.png'
import { site } from '@/site.config'

const features = [
  {
    title: 'Lebendige Stadt',
    text: 'Von den Hügeln Vinewoods bis zu den Docks  jede Ecke von Los Santos erzählt eine eigene Geschichte.',
  },
  {
    title: 'Tiefe Charaktere',
    text: 'Bau dir eine Figur mit Vergangenheit, Zielen und echten Konsequenzen. Dein Weg gehört dir.',
  },
  {
    title: 'Wirtschaft & Jobs',
    text: 'Ehrliche Arbeit oder krumme Geschäfte  verdiene dein Geld auf deine Art und steig auf.',
  },
  {
    title: 'Behörden & Fraktionen',
    text: 'LSPD, LSMD und unabhängige Organisationen sorgen für Spannung, Ordnung und Konflikt.',
  },
  {
    title: 'Events & Storylines',
    text: 'Regelmäßige Events und durchdachte Geschichten, die die ganze Stadt bewegen.',
  },
  {
    title: 'Faires Miteinander',
    text: 'Klares Regelwerk und ein Team, das zuhört. Hier zählt Spielspaß für alle.',
  },
]

const pillars = [
  { k: 'Qualität', v: 'Sauberes Roleplay statt Chaos. Wir nehmen uns Zeit für Details.' },
  { k: 'Fun', v: 'Spielspaß steht über allem. Ernst, aber nie verbissen.' },
  { k: 'Community', v: 'Ein Team und eine Community, die anpacken und einander zuhören.' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <div class="animate-fade-in">
        <img :src="logo" alt="GoldenState" class="mx-auto h-28 w-28 object-contain sm:h-36 sm:w-36 animate-float" />
      </div>

      <span
        class="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/5 px-4 py-1.5 text-xs uppercase tracking-widest text-gold-200 animate-fade-up"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-300 opacity-60"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-gold-300"></span>
        </span>
        Beta-Phase läuft
      </span>

      <h1 class="mt-6 max-w-4xl font-display text-5xl leading-[1.05] sm:text-7xl animate-fade-up" style="animation-delay: 80ms">
        <span class="gold-text">GoldenState</span>
      </h1>
      <p class="mt-5 max-w-xl text-lg text-zinc-300 animate-fade-up" style="animation-delay: 160ms">
        Die beste Version der goldenen Ära 
        ernsthaft gespielt, sorgfältig gebaut.
      </p>

      <div class="mt-9 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style="animation-delay: 240ms">
        <a :href="site.links.discord" target="_blank" rel="noopener" class="btn-gold">
          Discord beitreten
        </a>
        <a href="#story" class="btn-ghost">Mehr erfahren</a>
      </div>

      <a
        href="#story"
        class="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-gold-200"
        aria-label="Nach unten"
      >
        <svg class="h-6 w-6 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 5v14M6 13l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </section>

    <!-- Story -->
    <section id="story" class="relative mx-auto max-w-4xl px-5 py-28 sm:px-8">
      <p v-reveal class="eyebrow text-center">Die goldene Ära</p>
      <h2 v-reveal="80" class="mx-auto mt-4 max-w-2xl text-center font-display text-3xl leading-snug sm:text-4xl">
        Eine Stadt, die alles verspricht  und nichts geschenkt gibt.
      </h2>
      <div v-reveal="160" class="mx-auto mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-zinc-300">
        <p>
          Los Santos glänzt am Tag und brennt in der Nacht. Zwischen den Villen von
          Vinewood und den Hinterhöfen von Strawberry entscheidet jeder Tag aufs Neue,
          wer aufsteigt und wer zurückbleibt.
        </p>
        <p>
          Bei <span class="text-gold-100">GoldenState</span> schreibst du deine eigene Geschichte.
          Ob du als Polizist für Ordnung sorgst, als Sanitäter Leben rettest, ein Unternehmen
          aufbaust oder im Schatten Geschäfte machst  die Stadt erinnert sich an jeden, der
          seine Spuren hinterlässt.
        </p>
        <p>
          Wir bauen kein x-beliebiges Projekt. Wir bauen den Ort, an dem aus Rollenspiel
          echte Erinnerungen werden.
        </p>
      </div>
    </section>

    <!-- Features -->
    <section class="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="mb-14 text-center">
        <p v-reveal class="eyebrow">Was dich erwartet</p>
        <h2 v-reveal="80" class="mt-4 font-display text-3xl sm:text-4xl">Mach das Beste aus deiner Zeit in der Stadt</h2>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(f, i) in features"
          :key="f.title"
          v-reveal="i * 60"
          class="glass group rounded-2xl p-7 transition-all duration-300 hover:border-gold-300/40 hover:bg-white/[0.05]"
        >
          <div class="mb-4 h-px w-10 gold-line transition-all duration-500 group-hover:w-16"></div>
          <h3 class="font-display text-xl text-gold-100">{{ f.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-zinc-400">{{ f.text }}</p>
        </article>
      </div>
    </section>

    <!-- Pillars -->
    <section class="relative mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <div class="glass rounded-3xl p-10 sm:p-14">
        <p v-reveal class="eyebrow text-center">Wofür wir stehen</p>
        <div class="mt-10 grid gap-10 sm:grid-cols-3">
          <div v-for="(p, i) in pillars" :key="p.k" v-reveal="i * 80" class="text-center">
            <h3 class="font-display text-2xl gold-text">{{ p.k }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-zinc-400">{{ p.v }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
      <h2 v-reveal class="font-display text-3xl sm:text-5xl">
        Bereit für die <span class="gold-text">goldene Ära</span>?
      </h2>
      <p v-reveal="80" class="mx-auto mt-5 max-w-lg text-zinc-400">
        Wir sind mitten in der Beta. Komm in unseren Discord, sichere dir deinen Platz
        und sei dabei, wenn die Stadt zum Leben erwacht.
      </p>
      <div v-reveal="160" class="mt-9 flex flex-wrap justify-center gap-4">
        <a :href="site.links.discord" target="_blank" rel="noopener" class="btn-gold">Jetzt beitreten</a>
        <RouterLink to="/regelwerk" class="btn-ghost">Regelwerk lesen</RouterLink>
      </div>
    </section>
  </div>
</template>
