import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to home page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Creative Automation');
  });

  test('should navigate to tools page', async ({ page }) => {
    await page.goto('/tools');
    await expect(page.locator('h1')).toContainText('AI Tool Library');
  });

  test('should navigate to services page', async ({ page }) => {
    await page.goto('/services');
    await expect(page.locator('h1')).toContainText('Creative Services');
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('h1')).toContainText('About ArtificialArtz');
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('h1')).toContainText('Get in Touch');
  });
});
