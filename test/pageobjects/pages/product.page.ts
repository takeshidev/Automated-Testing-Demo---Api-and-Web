import { $ } from "@wdio/globals";
import Page from "./page";
import HeaderComp from "../components/header.comp";

const headerComp = HeaderComp;

class ProductPage extends Page {
  public get addToCart() {
    return $(".btn-success=Add to cart");
  }

  public get productName() {
    return $("h2");
  }

  public get productPrice() {
    return $(".price-container");
  }

  public get productDescription() {
    return $("#more-information p");
  }

  public get header() {
    return headerComp;
  }
}

export default new ProductPage();
