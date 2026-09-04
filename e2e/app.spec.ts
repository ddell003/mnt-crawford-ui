import { expect, test } from '@playwright/test';

test('home page renders the Mount Crawford site', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('app-root')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Town of Mount Crawford' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Mount Crawford' })).toBeVisible();
});

test('primary navigation opens the announcements menu', async ({ page }) => {
  await page.goto('/');

  const announcementsButton = page.getByRole('button', { name: /Announcements/ });
  await announcementsButton.click();

  await expect(page.locator('#announcements-menu')).toBeVisible();
  await expect(page.getByRole('link', { name: /Events/ })).toBeVisible();
});
