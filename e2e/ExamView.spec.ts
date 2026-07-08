import { test, expect } from '@playwright/test'
import { ROUTES } from '../src/constants/index.js'

test('visits the exam-view url', async ({ page }) => {
  await page.goto(ROUTES.EXAM_VIEW.path)

  const container = page.locator('.exam-view')

  await expect(container).toBeAttached()
  await expect(container).toContainClass('exam-view')
})
