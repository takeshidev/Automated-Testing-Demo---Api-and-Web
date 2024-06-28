import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import { MainOperations } from "../business-operations/api/main.operations";

let mainApiOperations = new MainOperations();

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
  it("[TK-001]Test resquest", async function () {
    let response = await mainApiOperations.testRequest();
    await expect(response.status).toBe(200);
  });
});
