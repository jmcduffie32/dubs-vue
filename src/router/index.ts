import EventsView from '@/views/EventsView.vue'
import HomeView from '@/views/HomeView.vue'
import PayoutView from '@/views/PayoutView.vue'
import PlayersView from '@/views/PlayersView.vue'
import SetupView from '@/views/SetupView.vue'
import TeamsView from '@/views/TeamsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/setup',
      name: 'setup',
      component: SetupView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/players',
      name: 'players',
      component: PlayersView
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView
    },
    {
      path: '/payout',
      name: 'payout',
      component: PayoutView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
