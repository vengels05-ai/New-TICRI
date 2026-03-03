import { expect, test } from '@playwright/test';

test.describe('Congress Scanner UI', () => {
  test('[smoke] search returns results and pagination works from the keyboard', async ({ page }) => {
    await page.goto('/congress-scanner');

    await expect(page.getByRole('heading', { name: 'Search filters' })).toBeVisible();
    await expect(page.getByLabel('Keyword')).toBeVisible();
    await expect(page.getByLabel('From date')).toBeVisible();
    await expect(page.getByLabel('To date')).toBeVisible();
    await expect(page.getByLabel('Sponsor')).toBeVisible();
    await expect(page.getByLabel('Member')).toBeVisible();
    await expect(page.getByLabel('Bill number or ID')).toBeVisible();
    await expect(page.getByLabel('Chamber')).toBeVisible();
    await expect(page.getByLabel('Bill type')).toBeVisible();

    await page.getByLabel('Keyword').fill('water');
    await page.getByLabel('Sponsor').fill('Alice');
    await page.getByLabel('Chamber').selectOption('House');
    await page.getByLabel('Bill type').selectOption('hr');
    await page.getByRole('button', { name: 'Search bills' }).click();

    await expect(page.getByRole('link', { name: 'Clean Water Restoration Act' })).toBeVisible();
    await expect(page.getByText('Alice Monroe')).toBeVisible();

    await page.getByRole('button', { name: 'Reset' }).click();
    const pagination = page.getByRole('navigation', { name: 'Search results pagination' });
    await expect(pagination).toContainText('Page 1 of 2');

    await pagination.getByRole('button', { name: 'Next' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Page 2 of 2')).toBeVisible();

    await pagination.getByRole('button', { name: 'Previous' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Page 1 of 2')).toBeVisible();
  });

  test('clicking a bill opens the detail page and the timeline is chronological', async ({ page }) => {
    await page.goto('/congress-scanner');

    await page.getByRole('link', { name: 'Clean Water Restoration Act' }).click();

    await expect(page).toHaveURL(/\/congress-scanner\/bill\?congress=119&type=hr&number=1001$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Clean Water Restoration Act' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Bill metadata' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Action timeline' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Plain-English status' })).toBeVisible();

    const timelineItems = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Action timeline' }) }).locator('ol > li');
    await expect(timelineItems).toHaveCount(3);

    await expect(timelineItems.nth(0)).toContainText('Introduced in House');
    await expect(timelineItems.nth(1)).toContainText('Referred to the House Committee on Energy and Commerce.');
    await expect(timelineItems.nth(2)).toContainText('Referred to House Subcommittee on Water Resources.');
  });

  test('invalid query shows a friendly error message', async ({ page }) => {
    await page.goto('/congress-scanner');

    await page.getByLabel('From date').fill('2026-02-20');
    await page.getByLabel('To date').fill('2026-02-18');
    await page.getByRole('button', { name: 'Search bills' }).click();

    await expect(page.getByRole('heading', { name: 'Search unavailable' })).toBeVisible();
    await expect(page.getByText('from must be before or equal to to.')).toBeVisible();
  });

  test('empty results are user-readable', async ({ page }) => {
    await page.goto('/congress-scanner');

    await page.getByLabel('Keyword').fill('no-matching-bill-term');
    await page.getByRole('button', { name: 'Search bills' }).click();

    await expect(page.getByRole('heading', { name: 'No bills matched these filters' })).toBeVisible();
    await expect(page.getByText('Try widening the date range, removing a filter, or searching for a broader keyword.')).toBeVisible();
  });
});
