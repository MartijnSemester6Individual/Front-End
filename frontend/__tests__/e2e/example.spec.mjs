import { test, expect } from '@playwright/test';

test('should navigate to the home page.', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/');
  // Find an element with the text
  await expect(page.locator('h1')).toContainText('Welcome to');
});