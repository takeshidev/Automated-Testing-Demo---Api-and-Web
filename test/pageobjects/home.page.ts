import { $ } from "@wdio/globals";
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  // Selectors
  public get phones() {
    return $("#itemc=Phones");
  }

  public get laptops() {
    return $("#itemc=Laptops");
  }

  public get monitors() {
    return $("#itemc=Monitors");
  }

  public get previous() {
    return $("#prev2");
  }

  public get next() {
    return $("#next2");
  }

  public get productsTitle() {
    return $$(".card .card-title");
  }

  // Methods
  public async clickPhones() {
    await this.phones.click();
    await browser.pause(1000);
  }

  public async clickLaptops() {
    await this.laptops.click();
    await browser.pause(1000);
  }

  public async clickMonitors() {
    await this.monitors.click();
    await browser.pause(1000);
  }

  public async clickPrevious() {
    await this.previous.click();
    await browser.pause(1000);
  }

  public async clickNext() {
    await this.next.click();
    await browser.pause(1000);
  }

  public open() {
    return super.open("index.html");
  }
}

export default new HomePage();
