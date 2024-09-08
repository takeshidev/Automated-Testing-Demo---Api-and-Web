import chai from "chai";
import HomePage from "../pageobjects/pages/home.page";
import ProductPage from "../pageobjects/pages/product.page";
import CartPage from "../pageobjects/pages/cart.page";
const expect = chai.expect;

describe("[Web UI testing] - demoblaze.com product store", () => {
  it("[Web-001] Verify categories and pagination in home page", async () => {
    await HomePage.open();
    await browser.pause(2000);

    // PHONES category
    await HomePage.clickPhones();
    const phonesFirstPage = await HomePage.productsTitle(0).getText();
    await HomePage.clickNext();
    const phoneSecondPage = await HomePage.productsTitle(0).getText();
    await expect(phonesFirstPage).not.equals(phoneSecondPage, "Clicking NEXT in the Phones caterory did not bring new items");
    await HomePage.clickPrevious();
    const phoneThirdPage = await HomePage.productsTitle(0).getText();
    await expect(phoneSecondPage).not.equals(phoneThirdPage, "Clicking PREVIOUS in the Phones caterory did did not bring new items");

    // LAPTOPS category
    await HomePage.clickLaptops();
    const laptopsFirstPage = await HomePage.productsTitle(0).getText();
    await expect(laptopsFirstPage).not.equals(phoneThirdPage, "Clicking the Laptops caterory did not bring new items");
    await HomePage.clickNext();
    const laptopsSecondPage = await HomePage.productsTitle(0).getText();
    await expect(laptopsFirstPage).not.equals(laptopsSecondPage, "Clicking NEXT in the Laptops caterory did not bring new items");
    await HomePage.clickPrevious();
    const laptopsThirdPage = await HomePage.productsTitle(0).getText();
    await expect(laptopsSecondPage).not.equals(laptopsThirdPage, "Clicking PREVIOUS in the Laptops caterory did did not bring new items");

    // MONITORS category
    await HomePage.clickMonitors();
    const monitorsFirstPage = await HomePage.productsTitle(0).getText();
    await expect(monitorsFirstPage).not.equals(laptopsThirdPage, "Clicking the Monitors caterory did not bring new items");
    await HomePage.clickNext();
    const monitorsSecondPage = await HomePage.productsTitle(0).getText();
    await expect(monitorsFirstPage).not.equals(monitorsSecondPage, "Clicking NEXT in the Monitors caterory did not bring new items");
    await HomePage.clickPrevious();
    const monitorsThirdPage = await HomePage.productsTitle(0).getText();
    await expect(monitorsSecondPage).not.equals(monitorsThirdPage, "Clicking PREVIOUS in the Monitors caterory did did not bring new items");
  });

  it("[Web-002] Purchase a product", async () => {
    await HomePage.open();
    await browser.pause(2000);
    await HomePage.clickLaptops();

    const productTitleInHomePage = await HomePage.productsTitle(0).getText();
    const productPriceInHomePage = (await HomePage.productsPrice(0).getText()).substring(1);
    const productDescriptionInHomePage = await HomePage.productsDescription(0).getText();
    await HomePage.productsTitle(0).click();

    await expect(await ProductPage.productName.getText()).equals(productTitleInHomePage, "Product name in Product page does not match the name in Home Page");
    await expect(await ProductPage.productPrice.getText()).contains(productPriceInHomePage, "Product price in Product page does not match the price in Home Page");
    await expect(await ProductPage.productDescription.getText()).equals(
      productDescriptionInHomePage,
      "Product description in Product page does not match the description in Home Page"
    );
    await ProductPage.addToCart.click();
    await browser.pause(1000);
    await browser.acceptAlert();

    await ProductPage.header.cart.click();
    await browser.pause(1000);
    await expect(await CartPage.getItemPrice(0).getText()).equals(productPriceInHomePage, "Price in cart does not match the price in Home page");
    await expect(await CartPage.getItemTitle(0).getText()).equals(productTitleInHomePage, "Title in cart does not match the title in Home Page");
    await expect(await CartPage.totalPrice.getText()).equals(productPriceInHomePage, "Total price is incorrect");

    await CartPage.placeOrder.click();
    await browser.pause(1000);

    await CartPage.placeOrderModal.name.setValue("James Hetfield");
    await CartPage.placeOrderModal.country.setValue("United States");
    await CartPage.placeOrderModal.city.setValue("San Francisco");
    await CartPage.placeOrderModal.card.setValue("123456");
    await CartPage.placeOrderModal.month.setValue("02");
    await CartPage.placeOrderModal.year.setValue("28");
    await CartPage.placeOrderModal.purchase.click();
    await browser.pause(1000);

    await expect(await CartPage.placeOrderModal.successMessage.getText()).contains("Thank you for your purchase", "Purchase was not successful");
    await CartPage.placeOrderModal.ok.click();
    await browser.pause(1000);
    await expect(await browser.getUrl()).contains("index.html", "Browser was not redirected to Home Page");

    await HomePage.header.cart.click();
    await expect(await CartPage.item.length).equals(0, "Cart should be empty");
  });
});
