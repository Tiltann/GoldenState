<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import logo from '@/assets/logo-no-text.png'
import { site } from '@/site.config'

const route = useRoute()
const isHome = computed(() => route.name === 'home')

const nav = [
  { to: '/charaktere', label: 'Charaktere' },
  { to: '/regelwerk', label: 'Regelwerk' },
  { to: '/unternehmen', label: 'Unternehmen' },
  { to: '/events', label: 'Events' },
  { to: '/streams', label: 'Streams' },
  { to: '/changelog', label: 'Changelog' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'border-b border-white/10 bg-ink/70 backdrop-blur-xl' : 'border-b border-transparent'"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
      <RouterLink to="/" class="flex items-center gap-3 group">
        <img :src="logo" alt="GoldenState" class="h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-105" />
        <span v-if="isHome" class="hidden font-display text-lg tracking-wide text-gold-100 sm:block">GoldenState</span>
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex">
        <RouterLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-gold-100"
          active-class="text-gold-100"
        >
          {{ item.label }}
        </RouterLink>
        <a
          :href="site.links.wiki"
          target="_blank"
          rel="noopener"
          class="rounded-full px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-gold-100"
        >
          Wiki ↗
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <RouterLink to="/panel" class="btn-ghost hidden px-5 py-2.5 sm:inline-flex">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.2.5c1.7.4 2.5.9 3.4 1.5a13.3 13.3 0 0 0-10.5 0c.9-.6 1.9-1.1 3.4-1.5L11.3 3a19.8 19.8 0 0 0-4.9 1.4C3.2 9 2.4 13.5 2.7 18a19.9 19.9 0 0 0 6 3l.5-.7c-.9-.3-1.9-.8-2.8-1.4l.7-.5a14.2 14.2 0 0 0 12 0l.7.5c-.9.6-1.9 1-2.8 1.4l.5.7a19.9 19.9 0 0 0 6-3c.4-5.2-.7-9.6-3.9-13.6ZM9.1 15.3c-1 0-1.7-.9-1.7-2s.8-2 1.7-2c1 0 1.7.9 1.7 2s-.8 2-1.7 2Zm5.8 0c-1 0-1.7-.9-1.7-2s.8-2 1.7-2c1 0 1.7.9 1.7 2s-.7 2-1.7 2Z"/>
          </svg>
          Login
        </RouterLink>

        <button
          class="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-zinc-200 lg:hidden"
          @click="menuOpen = !menuOpen"
          aria-label="Menü"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path v-if="!menuOpen" d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
            <path v-else d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="border-t border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden">
        <nav class="mx-auto flex max-w-7xl flex-col px-5 py-4">
          <RouterLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="rounded-lg px-3 py-3 text-zinc-200 hover:bg-white/5"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </RouterLink>
          <a :href="site.links.wiki" target="_blank" rel="noopener" class="rounded-lg px-3 py-3 text-zinc-200 hover:bg-white/5">
            Wiki ↗
          </a>
          <RouterLink to="/panel" class="mt-2 btn-ghost justify-center" @click="menuOpen = false">
            Mit Discord einloggen
          </RouterLink>
        </nav>
      </div>
    </transition>
  </header>
</template>
