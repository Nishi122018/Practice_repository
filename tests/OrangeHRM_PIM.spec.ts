import {test,expect} from "@playwright/test"
import { MESSAGES } from "../constants/messages"
import { PIMPage } from "../pages/PIMPage"
import { LoginValidations } from "../pages/LoginPage";

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
// test("PIM Page Navigation", async({page})=>{
// await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// })
test("PIM Page Add Employee form Validation",async({page})=>{
    //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     const login=new LoginValidations(page);
     await login.logintoapplication();
       const PIMValidation=new PIMPage(page);
       await PIMValidation.verifyPIMPage_loading();
      
})

test("PIM Page Add employee Validation", async({page})=>{
    //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     const login=new LoginValidations(page);
     await login.logintoapplication();

      const PIMValidation=new PIMPage(page);
      await  PIMValidation.Useradditionform();
})