<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/logo-no-text.png'
import { site } from '@/site.config'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-white/10 bg-ink/60 backdrop-blur-sm">
    <div class="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div class="flex items-center gap-3">
            <img :src="logo" alt="GoldenState" class="h-10 w-10 object-contain" />
            <span class="font-display text-lg text-gold-100">GoldenState</span>
          </div>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
            Ein deutsches GTA-V Roleplay-Projekt. Wir bauen die beste Version der
            goldenen Ära von Los Santos  mit Fokus auf Qualität und Spielspaß.
          </p>
        </div>

        <div>
          <h4 class="eyebrow">Entdecken</h4>
          <ul class="mt-4 space-y-2 text-sm">
            <li><RouterLink to="/charaktere" class="text-zinc-400 hover:text-gold-100">Charaktere</RouterLink></li>
            <li><RouterLink to="/unternehmen" class="text-zinc-400 hover:text-gold-100">Unternehmen</RouterLink></li>
            <li><RouterLink to="/regelwerk" class="text-zinc-400 hover:text-gold-100">Regelwerk</RouterLink></li>
            <li><RouterLink to="/changelog" class="text-zinc-400 hover:text-gold-100">Changelog</RouterLink></li>
            <li><RouterLink to="/impressum" class="text-zinc-400 hover:text-gold-100">Impressum</RouterLink></li>
          </ul>
        </div>

        <div>
          <h4 class="eyebrow">Community</h4>
          <ul class="mt-4 space-y-2 text-sm">
            <li><a :href="site.links.discord" target="_blank" rel="noopener" class="text-zinc-400 hover:text-gold-100">Discord</a></li>
            <li><a :href="site.links.wiki" target="_blank" rel="noopener" class="text-zinc-400 hover:text-gold-100">Wiki</a></li>
            <li><RouterLink to="/streams" class="text-zinc-400 hover:text-gold-100">Streams</RouterLink></li>
            <li><RouterLink to="/events" class="text-zinc-400 hover:text-gold-100">Events</RouterLink></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row">
        <p>© {{ year }} GoldenState. Kein offizielles Rockstar-Games-Produkt. <RouterLink to="/impressum" class="underline hover:text-gold-100 ml-2">Impressum</RouterLink></p>
        <p>Made with <span style="color:gold;font-size:1.1em">💛</span> for the community by <span class="text-gold-300 font-semibold">goldenstate</span>.</p>
      </div>
    </div>
  </footer>
</template>
