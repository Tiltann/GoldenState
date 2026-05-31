<script setup>
import PageHero from '@/components/PageHero.vue'
import { streams, streamUrl } from '@/data/streams'

const live = streams.filter((s) => s.live)
const offline = streams.filter((s) => !s.live)
</script>

<template>
  <div class="pb-24">
    <PageHero
      eyebrow="Schau zu, wie die Stadt lebt"
      title="Streams"
      subtitle="Unsere Creator zeigen GoldenState aus erster Hand. Live-Kanäle erscheinen automatisch ganz oben."
    />

    <section class="mx-auto max-w-5xl px-5 sm:px-8">

      <!-- Empty state -->
      <div v-if="!streams.length" v-reveal class="glass rounded-2xl p-10 text-center">
        <div class="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-white/10 text-zinc-500">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5 21 12m0 0-5.25 1.5M21 12v-3.75A2.25 2.25 0 0 0 18.75 6H5.25A2.25 2.25 0 0 0 3 8.25v7.5A2.25 2.25 0 0 0 5.25 18h13.5A2.25 2.25 0 0 0 21 15.75V12Z"/>
          </svg>
        </div>
        <p class="font-display text-lg text-gold-100">Noch keine Streams</p>
        <p class="mt-2 text-sm text-zinc-500">Wir haben noch nicht offiziell gestartet  sobald Creator live gehen, erscheinen sie hier.</p>
      </div>

      <template v-else>
      <div v-if="live.length" class="mb-10">
        <h2 class="mb-4 flex items-center gap-2 text-sm uppercase tracking-widest text-red-400">
          <span class="h-2 w-2 animate-pulse rounded-full bg-red-500"></span> Jetzt live
        </h2>
        <div class="grid gap-5 sm:grid-cols-2">
          <a
            v-for="s in live"
            :key="s.channel"
            :href="streamUrl(s)"
            target="_blank"
            rel="noopener"
            class="glass group rounded-2xl border-red-500/30 p-6 transition-all hover:border-red-400/60"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-display text-xl text-gold-100">{{ s.name }}</h3>
              <span class="rounded-full bg-red-500/15 px-2.5 py-0.5 text-[11px] font-medium text-red-300">LIVE</span>
            </div>
            <p class="mt-2 text-sm text-zinc-400">{{ s.title }}</p>
            <p class="mt-4 text-xs text-zinc-500">twitch.tv/{{ s.channel }}</p>
          </a>
        </div>
      </div>

      <h2 v-if="offline.length" class="mb-4 text-sm uppercase tracking-widest text-zinc-500">Unsere Creator</h2>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(s, i) in offline"
          :key="s.channel"
          :href="streamUrl(s)"
          target="_blank"
          rel="noopener"
          v-reveal="i * 60"
          class="glass group rounded-2xl p-6 transition-all hover:border-gold-300/40"
        >
          <div class="flex items-center justify-between">
            <h3 class="font-display text-lg text-gold-100">{{ s.name }}</h3>
            <span class="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-zinc-500">Offline</span>
          </div>
          <p class="mt-2 text-sm text-zinc-500">twitch.tv/{{ s.channel }}</p>
        </a>
      </div>

      <p v-reveal class="mt-10 text-center text-xs text-zinc-600">
        Du streamst GoldenState? Melde dich im Discord, dann nehmen wir deinen Kanal auf.
      </p>
      </template><!-- end v-else -->
    </section>
  </div>
</template>
