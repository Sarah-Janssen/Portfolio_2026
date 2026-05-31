import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages via the header', async ({ page }) => {
    await page.goto('/');
    
    // Check Home
    await expect(page).toHaveTitle(/Sarah Janssen | Complexiteit begrijpen/);
    
    // Navigate to Projects
    await page.click('nav a[href="/projects"]');
    await expect(page).toHaveURL(/\/projects/);
    await expect(page.locator('main h1').first()).toContainText(/Projecten/);
    
    // Navigate to Contact
    await page.click('nav a[href="/contact"]');
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator('main h1').first()).toContainText(/Contact/);
  });

  test('should navigate to project detail page', async ({ page }) => {
    await page.goto('/projects');
    
    // Click on Unclutter Mind case study
    await page.click('a[href="/projects/unclutter-mind"]');
    await expect(page).toHaveURL(/\/projects\/unclutter-mind/);
    await expect(page.locator('main h1').first()).toContainText(/Unclutter Mind/);
  });

  test('should show 404 page for non-existent routes', async ({ page }) => {
    await page.goto('/non-existent-page');
    await expect(page.locator('h1')).toContainText(/Pagina niet gevonden/);
  });
});
