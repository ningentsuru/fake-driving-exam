export const ROUTES = {
  LANDING_VIEW: { name: 'landing', path: '/' },
  EXAM_VIEW: { name: 'exam', path: '/exam' },
  SELECT_EXAM_VIEW: { name: 'selectExam', path: '/select-exam' },
  // plop:inject-routes-do-not-removed
  NOT_FOUND_VIEW: { name: 'notFound', path: '/:pathMatch(.*)*' },
} as const

export type RouteName = (typeof ROUTES)[keyof typeof ROUTES]['name']
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]['path']
