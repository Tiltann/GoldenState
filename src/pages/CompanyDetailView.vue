<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { marked } from 'marked'
import { findCompany } from '@/data/companies'

const route = useRoute()
const company = computed(() => findCompany(route.params.slug))
const html = computed(() => (company.value ? marked.parse(company.value.content) : ''))
</script>

<template>
  <div class="pb-24 pt-32 sm:pt-36">
    <div class="mx-auto max-w-3xl px-5 sm:px-8">

      <!-- Back link -->
      <RouterLink
        to="/unternehmen"
        class="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-gold-100 transition-colors"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M19 12H5M11 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Zurück zum Register
      </RouterLink>

      <template v-if="company">
        <!-- Header -->
        <header class="mt-8 border-b border-white/10 pb-8">
          <p class="text-xs uppercase tracking-widest text-zinc-500">{{ company.type }}</p>
          <h1 class="mt-2 font-display text-4xl gold-text sm:text-5xl">{{ company.short }}</h1>
          <p class="mt-2 text-lg text-zinc-300">{{ company.name }}</p>
          <div class="mt-4 flex flex-wrap gap-3 items-center">
            <span
              v-if="company.status"
              class="rounded-full border px-3 py-1 text-[11px]"
              :class="{
                'border-emerald-400/40 text-emerald-300 bg-emerald-400/5': company.status === 'aktiv',
                'border-gold-400/40 text-gold-200 bg-gold-400/5': company.status === 'rekrutiert',
                'border-zinc-500/40 text-zinc-400 bg-white/5': company.status === 'geschlossen',
              }"
            >
              {{ company.status === 'aktiv' ? 'Aktiv' : company.status === 'rekrutiert' ? 'Rekrutiert' : 'Geschlossen' }}
            </span>
            <span v-if="company.leadership" class="text-sm text-zinc-500">
              Leitung: {{ company.leadership }}
            </span>
          </div>
        </header>

        <!-- Markdown content -->
        <article class="prose-gold mt-8" v-html="html" />
      </template>

      <!-- Not found -->
      <div v-else class="mt-16 text-center">
        <h1 class="font-display text-3xl text-gold-100">Eintrag nicht gefunden</h1>
        <p class="mt-3 text-zinc-400">Dieses Unternehmen existiert nicht (mehr).</p>
        <RouterLink to="/unternehmen" class="btn-ghost mt-6">Zum Register</RouterLink>
      </div>

    </div>
  </div>
</template>
