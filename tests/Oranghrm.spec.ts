
import { test, expect } from '@playwright/test';
import loginData from "../test-data/loginData.json"
import { MESSAGES } from '../constants/messages';

 test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });
test('Smoke Scenario ->Verify OrangeHRM login page is displayed', async ({ page }) => {


  await expect(
    page.locator('input[name="username"]')
  ).toBeVisible();

  await expect(
    page.locator('input[name="password"]')
  ).toBeVisible();

  await expect(
    page.locator('button[type="submit"]')
  ).toBeVisible();

});

Object.entries(loginData).forEach(([Scenario, credentials]) => {


  test(`Verify OrangeHRM Login scenario with ${Scenario}`, async ({ page }) => {

    await page.locator('input[name="username"]').fill(credentials.username)
    await page.locator('input[name="password"]').fill(credentials.password)
    await page.locator('button[type="submit"]').click();
    if (Scenario === "validLogin") {
      await expect(page).toHaveURL(/dashboard/);
      await expect(page.getByRole('heading', { name: MESSAGES.DASHBOARD.TITLE })).toBeVisible();
    }
    else if (Scenario === "invalidLogin") {
      await expect(
        page.getByText(MESSAGES.LOGIN.INVALID_CREDENTIALS)
      ).toBeVisible();
    }
    else if (Scenario === "emptyUsername") {
      await expect(
        page.getByText(MESSAGES.LOGIN.REQUIRED_USERNAME)
      ).toBeVisible();
    }

    else if (Scenario === "emptyPassword") {
      await expect(
        page.getByText(MESSAGES.LOGIN.REQUIRED_PASSWORD)
      ).toBeVisible();

    }

    else if (Scenario === "emptyUsername & Password") {
      await expect(
        page.getByText(MESSAGES.LOGIN.REQUIRED_USERNAME)
      ).toHaveCount(2);
      
    }


  })

});
