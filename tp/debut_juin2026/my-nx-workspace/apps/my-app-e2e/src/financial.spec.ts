import { test, expect } from '@playwright/test';

test('calcul mensualite', async ({page}) => {
//await page.goto("http://localhost:4200/financial");
await page.goto("/financial");
await page.fill('input[name="nbMonth"]','120');
await page.fill('input[name="amount"]','100000');
await page.fill('input[name="annualRate"]','2.5');
await expect(page.locator("#monthlyPayment")).toHaveText("942.7");
  })
