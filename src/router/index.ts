import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { ROUTES } from '@/constants'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    layout?: 'DefaultLayout' | 'ErrorLayout'
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTES.LANDING_VIEW.path,
    name: ROUTES.LANDING_VIEW.name,
    component: () => import('@/views/LandingView'),
  },
  {
    path: ROUTES.EXAM_VIEW.path,
    name: ROUTES.EXAM_VIEW.name,
    component: () => import('@/views/ExamView'),
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: ROUTES.SELECT_EXAM_VIEW.path,
    name: ROUTES.SELECT_EXAM_VIEW.name,
    component: () => import('@/views/SelectExamView'),
    meta: {
      layout: 'DefaultLayout',
    },
  },
  // plop:inject-routes-component-do-not-removed
  {
    path: ROUTES.NOT_FOUND_VIEW.path,
    name: ROUTES.NOT_FOUND_VIEW.name,
    component: () => import('@/views/NotFound'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const isAuthenticated = () => {
  return !!localStorage.getItem('mock_auth_token')
}

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  if ((to.name === 'login' || to.name === 'signup') && isAuthenticated()) {
    return { name: 'dashboard' }
  }

  return true
})

export default router
