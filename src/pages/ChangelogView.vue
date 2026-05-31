<script setup>
import PageHero from '@/components/PageHero.vue'
import { changelog } from '@/data/changelog'

function fmt(date) {
  return new Date(date).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

const typeConfig = {
  added:   { label: '+', classes: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' },
  removed: { label: '−', classes: 'text-red-400    bg-red-400/10    border-red-400/30'    },
  changed: { label: '~', classes: 'text-gold-300   bg-gold-400/10   border-gold-400/30'   },
  fixed:   { label: '✓', classes: 'text-sky-400    bg-sky-400/10    border-sky-400/30'    },
}
</script>

<template>
  <div class="pb-24">
    <PageHero
      eyebrow="Was sich getan hat"
      title="Changelog"
      subtitle="Jede Version bringt GoldenState ein Stück näher an das, was wir uns vorstellen."
    />

    <!-- Legend -->
    <div v-reveal class="mx-auto mb-10 flex flex-wrap justify-center gap-3 px-5">
      <span
        v-for="(cfg, key) in typeConfig"
        :key="key"
        class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs"
        :class="cfg.classes"
      >
        <span class="font-mono font-bold">{{ cfg.label }}</span>
        <span class="capitalize">{{ key === 'added' ? 'Hinzugefügt' : key === 'removed' ? 'Entfernt' : key === 'changed' ? 'Geändert' : 'Behoben' }}</span>
      </span>
    </div>

    <section class="mx-auto max-w-2xl px-5 sm:px-8">

      <!-- Empty state -->
      <div v-if="!changelog.length" v-reveal class="glass rounded-2xl p-10 text-center">
        <div class="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-white/10 text-zinc-500">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
          </svg>
        </div>
        <p class="font-display text-lg text-gold-100">Hier kommt noch was</p>
        <p class="mt-2 text-sm text-zinc-500">Wir haben noch nicht offiziell gestartet  die ersten Einträge folgen bald.</p>
      </div>

      <div v-else class="relative border-l border-white/10 pl-8">
        <article
          v-for="(c, i) in changelog"
          :key="c.version"
          v-reveal="i * 70"
          class="relative pb-12 last:pb-0"
        >
          <!-- Timeline dot -->
          <span class="absolute -left-[39px] top-1.5 grid h-5 w-5 place-items-center rounded-full border border-gold-400/50 bg-ink">
            <span class="h-2 w-2 rounded-full bg-gold-400"></span>
          </span>

          <!-- Header -->
          <div class="flex flex-wrap items-center gap-3">
            <h2 class="font-display text-xl text-gold-100">{{ c.version }}</h2>
            <span class="text-xs text-zinc-500">{{ fmt(c.date) }}</span>
          </div>
          <p class="mt-1 text-zinc-300">{{ c.title }}</p>

          <div class="mt-2 flex flex-wrap gap-1.5">
            <span
              v-for="t in c.tags"
              :key="t"
              class="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-zinc-400"
            >{{ t }}</span>
          </div>

          <!-- Categorized items -->
          <ul class="mt-4 space-y-2">
            <li
              v-for="item in c.items"
              :key="item.text"
              class="flex items-start gap-2.5 text-sm text-zinc-300"
            >
              <span
                class="mt-0.5 shrink-0 grid h-5 w-5 place-items-center rounded border font-mono text-[11px] font-bold leading-none"
                :class="typeConfig[item.type]?.classes"
              >
                {{ typeConfig[item.type]?.label }}
              </span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>
