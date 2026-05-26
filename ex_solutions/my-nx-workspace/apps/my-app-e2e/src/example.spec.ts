import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect((await page.locator('h1').innerText()).toLowerCase()).toContain('welcome');
});

//nx e2e project name is my-app-e2e (not my-app)
//nx e2e my-app-e2e 
//nx e2e my-app-e2e --grep="example"
