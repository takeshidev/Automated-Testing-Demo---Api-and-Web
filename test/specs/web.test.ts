import chai from "chai";
import HomePage from "../pageobjects/home.page";
const expect = chai.expect;

describe("[Web UI testing] - demoblaze.com product store", () => {
  it("[Web-001] Verify categories and pagination in home page", async () => {
    await HomePage.open();
    await browser.pause(2000);

    // PHONES category
    await HomePage.clickPhones();
    const phonesFirstPage = await HomePage.productsTitle[0].getText();
    await HomePage.clickNext();
    const phoneSecondPage = await HomePage.productsTitle[0].getText();
    await expect(phonesFirstPage).not.equals(phoneSecondPage, "Clicking NEXT in the Phones caterory did not bring new items");
    await HomePage.clickPrevious();
    const phoneThirdPage = await HomePage.productsTitle[0].getText();
    await expect(phoneSecondPage).not.equals(phoneThirdPage, "Clicking PREVIOUS in the Phones caterory did did not bring new items");

    // LAPTOPS category
    await HomePage.clickLaptops();
    const laptopsFirstPage = await HomePage.productsTitle[0].getText();
    await expect(laptopsFirstPage).not.equals(phoneThirdPage, "Clicking the Laptops caterory did not bring new items");
    await HomePage.clickNext();
    const laptopsSecondPage = await HomePage.productsTitle[0].getText();
    await expect(laptopsFirstPage).not.equals(laptopsSecondPage, "Clicking NEXT in the Laptops caterory did not bring new items");
    await HomePage.clickPrevious();
    const laptopsThirdPage = await HomePage.productsTitle[0].getText();
    await expect(laptopsSecondPage).not.equals(laptopsThirdPage, "Clicking PREVIOUS in the Laptops caterory did did not bring new items");

    // MONITORS category
    await HomePage.clickMonitors();
    const monitorsFirstPage = await HomePage.productsTitle[0].getText();
    await expect(monitorsFirstPage).not.equals(laptopsThirdPage, "Clicking the Monitors caterory did not bring new items");
    await HomePage.clickNext();
    const monitorsSecondPage = await HomePage.productsTitle[0].getText();
    await expect(monitorsFirstPage).not.equals(monitorsSecondPage, "Clicking NEXT in the Monitors caterory did not bring new items");
    await HomePage.clickPrevious();
    const monitorsThirdPage = await HomePage.productsTitle[0].getText();
    await expect(monitorsSecondPage).not.equals(monitorsThirdPage, "Clicking PREVIOUS in the Monitors caterory did did not bring new items");
  });
});
