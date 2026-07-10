import { test, expect } from '@playwright/test'
import { ROUTES } from '../src/constants/index.js'

test('visits the exam-configuration-view url', async ({ page }) => {
  await page.goto(ROUTES.EXAM_CONFIGURATION_VIEW.path)

  const container = page.locator('.exam-configuration-view')

  await expect(container).toBeAttached()
  await expect(container).toContainClass('exam-configuration-view')
})
