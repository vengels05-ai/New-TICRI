import { test, expect } from '@playwright/test';

test('case search runs the query supplied by a featured-case link', async ({ page }) => {
  page.on('pageerror', error => console.error(error));
  page.on('console', message => { if (message.type() === 'error') console.error(message.text()); });
  const query = 'New York Times v. United States';
  await page.route('**/api/cases/search?*', async (route) => {
    const requestQuery = new URL(route.request().url()).searchParams.get('q');
    await route.fulfill({
      json: {
        total: 1,
        results: [{
          id: 108327,
          case_name: requestQuery,
          date_filed: '1971-06-30',
          scdb_votes_majority: 6,
          scdb_votes_minority: 3,
          citation_count: 1,
        }],
      },
    });
  });
  await page.goto(`/cases/search/?q=${encodeURIComponent(query)}`);
  const input = page.getByPlaceholder('Search by case name, party, or topic...');
  await expect(input).toHaveValue(query);
  await expect(page.getByRole('link', { name: new RegExp(query.replace('.', '\\.')) })).toBeVisible();
  await input.fill('Brown v. Board of Education');
  await expect(page.getByRole('link', { name: /Brown v\. Board of Education/ })).toBeVisible();
  await page.getByRole('button', { name: 'Clear', exact: true }).click();
  await expect(input).toHaveValue('');
  await expect(page.getByRole('link', { name: /Brown v\. Board of Education/ })).toHaveCount(0);
});
