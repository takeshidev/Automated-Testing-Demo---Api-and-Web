import { $ } from "@wdio/globals";
import Page from "./page";
import HeaderComp from "../components/header.comp";

const headerComp = HeaderComp;

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

  public get products() {
    return $$(".card");
  }

  public productsTitle(item: number) {
    return this.products[item].$(".card-title");
  }

  public productsPrice(item: number) {
    return this.products[item].$("h5");
  }

  public productsDescription(item: number) {
    return this.products[item].$(".card-text");
  }

  public get header() {
    return headerComp;
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
