import { Page, expect, Locator } from "@playwright/test";
import {MESSAGES} from "../constants/messages"
import PimLocators from "../constants/locators.json"
import {URLS} from "../constants/urls"
import { LoginValidations } from "../pages/LoginPage";
export class PIMPage
{
    page:Page;
    constructor(page: Page)
    {
    this.page=page
    }

    async verifyPIMPage_loading()
    {
       
       await expect(this.page.locator(PimLocators.PIMPage.Pim_menulink)).toBeVisible();
       await (this.page.locator(PimLocators.PIMPage.Pim_menulink)).click();
       await expect(this.page).toHaveURL(URLS.PIM_addemployee)
       await expect(this.page.getByRole('heading',{name:MESSAGES.PIM.TITLE})).toBeVisible();
    }

    async Useradditionform()
    {
        //this.verifyPIMPage_loading();
        await expect(this.page.locator(PimLocators.PIMPage.Pim_menulink)).toBeVisible();
       await (this.page.locator(PimLocators.PIMPage.Pim_menulink)).click();
        await expect(this.page.locator(PimLocators.PIMPage.Add_Employee)).toBeVisible();
        await (this.page.locator(PimLocators.PIMPage.Add_Employee)).click();
        await expect(this.page.getByPlaceholder(PimLocators.PIMPage.Add_Employee_Firstname)).toBeVisible();
        await expect(this.page.getByPlaceholder(PimLocators.PIMPage.Add_Employee_Middlename)).toBeVisible();
        await expect(this.page.getByPlaceholder(PimLocators.PIMPage.Add_Employee_Lastname)).toBeVisible();
        await expect(this.page.locator(PimLocators.PIMPage.Add_Employee_save_button)).toBeVisible();
        await expect(this.page.locator(PimLocators.PIMPage.Add_Employee_cancel_button)).toBeVisible();
    }
}