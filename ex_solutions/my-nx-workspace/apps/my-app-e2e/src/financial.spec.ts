import { test, expect } from '@playwright/test';

test('good monthlyPayment computation', async ({ page }) => {
  
  await page.goto('/financial');

  // Get an input, type data into it 
	//and verify that the value has been updated
	 await page.fill('input[name="nbMonth"]','120');
	 await page.fill('input[name="amount"]','100000');
   await page.fill('input[name="annualRate"]','2.5');
   //await page.click('input[type="button"][value="compute monthlyPayment"]');
	 await expect(page.locator("#monthlyPayment")).toContainText("942.699");
});

//nx e2e project name is my-app-e2e (not my-app)
//nx e2e my-app-e2e 
//nx e2e my-app-e2e --grep="example"
