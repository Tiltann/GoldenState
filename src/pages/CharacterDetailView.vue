<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { characters } from '@/data/characters'

const route = useRoute()
const char = characters.find(
  (c) => c.name.replace(/\s+/g, '-').toLowerCase() === route.params.slug,
)

function initials(name) {
  return name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
}
</script>

<template>
  <div class="pb-24 pt-32 sm:pt-36">
    <div class="mx-auto max-w-2xl px-5 sm:px-8">

      <!-- Back link -->
      <RouterLink
        to="/charaktere"
        class="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-gold-100 transition-colors"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M19 12H5M11 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Zurück zur Übersicht
      </RouterLink>

      <template v-if="char">
        <div class="glass mt-8 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
          <!-- Avatar -->
          <img
            v-if="char.image"
            :src="char.image"
            :alt="char.name"
            class="h-32 w-32 rounded-xl object-cover mb-5 ring-2 ring-gold-400/30"
          />
          <div
            v-else
            class="grid h-32 w-32 place-items-center rounded-xl border border-gold-400/30 bg-gold-400/10 font-display text-3xl text-gold-100 mb-5"
          >
            {{ initials(char.name) }}
          </div>

          <!-- Identity -->
          <h1 class="font-display text-3xl text-gold-100 mb-1">{{ char.name }}</h1>
          <div class="text-xs uppercase tracking-widest text-gold-300/70 mb-1">{{ char.role }}</div>
          <div v-if="char.faction" class="text-zinc-500 text-sm mb-4">{{ char.faction }}</div>

          <!-- Tags -->
          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span
              v-for="t in char.tags"
              :key="t"
              class="rounded-full border border-white/10 px-3 py-0.5 text-xs text-zinc-400"
            >{{ t }}</span>
          </div>

          <div class="w-full border-t border-white/10 mb-6" />

          <!-- Lore -->
          <p class="w-full whitespace-pre-line text-left text-sm leading-relaxed text-zinc-300 mb-6">
            {{ char.lore }}
          </p>

          <!-- Quote -->
          <p
            v-if="char.quote"
            class="w-full border-l-2 border-gold-400/50 pl-4 text-left text-sm italic text-zinc-300 mb-6"
          >
            „{{ char.quote }}"
          </p>

          <p class="text-xs text-zinc-500">Gespielt von {{ char.player }}</p>
        </div>
      </template>

      <!-- Not found -->
      <div v-else class="mt-16 text-center">
        <h1 class="font-display text-3xl text-gold-100">Charakter nicht gefunden</h1>
        <p class="mt-3 text-zinc-400">Dieser Charakter existiert nicht.</p>
        <RouterLink to="/charaktere" class="btn-ghost mt-6">Zur Übersicht</RouterLink>
      </div>

    </div>
  </div>
</template>
