import { test, expect } from '@playwright/test'
import { ROUTES } from '../src/constants/index.js'

test('visits the select-exam-view url', async ({ page }) => {
  await page.goto(ROUTES.SELECT_EXAM_VIEW.path)

  const container = page.locator('.select-exam-view')

  await expect(container).toBeAttached()
  await expect(container).toContainClass('select-exam-view')
})
