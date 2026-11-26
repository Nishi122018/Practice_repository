import { Page, expect, Locator } from "@playwright/test";
import locatorspath from "../constants/locators.json"
import {MESSAGES} from "../constants/messages"
import credentials from "../test-data/loginData.json"
export class LoginValidations {
    page: Page
    constructor(page: Page) {
        this.page = page;

    }
    async smoke_Validation() {
        await expect(
            this.page.locator(locatorspath.LoginPage.lusername)
        ).toBeVisible();

        await expect(
            this.page.locator(locatorspath.LoginPage.lpassword)
        ).toBeVisible();

        await expect(
            this.page.locator(locatorspath.LoginPage.llogin)
        ).toBeVisible();
    }

    async logintoapplication()
    {

        await this.page.locator(locatorspath.LoginPage.lusername).fill(credentials.validLogin.username);

        await this.page.locator(locatorspath.LoginPage.lpassword).fill(credentials.validLogin.password);

        await this.page.locator(locatorspath.LoginPage.llogin).click();
    }

    async login_sanity_scenarios(Scenario: string, username: string, password: string) {

        await this.page.locator(locatorspath.LoginPage.lusername).fill(username);

        await this.page.locator(locatorspath.LoginPage.lpassword).fill(password);

        await this.page.locator(locatorspath.LoginPage.llogin).click();

        if (Scenario === "validLogin") {
            await expect(this.page).toHaveURL(/dashboard/);
            await expect(
                this.page.getByRole('heading', {
                    name: MESSAGES.DASHBOARD.TITLE
                })
            ).toBeVisible();
        }
        else if (Scenario === "invalidLogin") {
            await expect(
                this.page.getByText(MESSAGES.LOGIN.INVALID_CREDENTIALS)
            ).toBeVisible();
        }
        else if (Scenario === "emptyUsername") {
            await expect(
                this.page.getByText(MESSAGES.LOGIN.REQUIRED_USERNAME)
            ).toBeVisible();
        }
        else if (Scenario === "emptyPassword") {
            await expect(
                this.page.getByText(MESSAGES.LOGIN.REQUIRED_PASSWORD)
            ).toBeVisible();

        }
    }
}