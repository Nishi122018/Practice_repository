
import { test, expect } from '@playwright/test';
import loginData from "../test-data/loginData.json"
import { MESSAGES } from '../constants/messages';
import { LoginValidations } from '../pages/LoginPage'
test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('Smoke Scenario ->Verify OrangeHRM login page is displayed', async ({ page }) => {
  const smoke_scenario = new LoginValidations(page);
  await smoke_scenario.smoke_Validation();
})

Object.entries(loginData).forEach(([Scenario, data]) => {
  test(`Verify login with=> ${Scenario}`, async ({ page }) => {
    const login_scenarios = new LoginValidations(page)
    await login_scenarios.login_sanity_scenarios(Scenario, data.username, data.password);

  })

});
