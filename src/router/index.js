import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/pages/HomeView.vue') },
  { path: '/charaktere', name: 'characters', component: () => import('@/pages/CharactersView.vue') },
  { path: '/charaktere/:slug', name: 'character', component: () => import('@/pages/CharacterDetailView.vue') },
  { path: '/regelwerk', name: 'rules', component: () => import('@/pages/RulesView.vue') },
  { path: '/unternehmen', name: 'companies', component: () => import('@/pages/CompaniesView.vue') },
  {
    path: '/unternehmen/:slug',
    name: 'company',
    component: () => import('@/pages/CompanyDetailView.vue'),
  },
  { path: '/events', name: 'events', component: () => import('@/pages/EventsView.vue') },
  { path: '/streams', name: 'streams', component: () => import('@/pages/StreamsView.vue') },
  { path: '/changelog', name: 'changelog', component: () => import('@/pages/ChangelogView.vue') },
  { path: '/panel', name: 'panel', component: () => import('@/pages/PanelView.vue') },
  { path: '/impressum', name: 'impressum', component: () => import('@/pages/ImpressumView.vue') },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('@/pages/NotFoundView.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
